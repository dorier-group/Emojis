class FloatingEmoji {
    constructor() {
        this.ready = false;
        this.enableLogging = true;
        this.reconnectTimeout = undefined;
        this.onreceive = undefined;
    }

    log(...args) {
        if (this.enableLogging) {
            console.log(...args);
        }
    }

    open(url = 'wss://doriersocket.digiplace.site:443') {
        this.close();

        this.log(`connecting to ${url}...`);
        this.socket = new WebSocket(url);

        this.socket.addEventListener('open', event => {
            this.log(`connection open`);
            this.ready = true;
        });

        this.socket.addEventListener('close', event => {
            this.log(`connection closed with code ${event.code}`);

            switch (event.code) {
                case 1000: // Normal Closure
                case 1005: // No Status Recvd
                    break;
                default: // Abnormal Closure etc.
                    this.log(`abnormal close, reconnect in 2 seconds...`);
                    this.ready = false;
                    this.reconnectTimeout = setTimeout(() => {
                        this.socket = undefined;
                        this.reconnectTimeout = undefined;
                        this.open(url);
                    }, 2000);
            }
        });

        this.socket.addEventListener('error', event => {
            this.log('error:', event);
        });

        this.socket.addEventListener('message', event => {
            const data = event.data;

            if (FloatingEmoji.isValidEmoji(data)) {
                if (typeof this.onreceive === 'function') {
                    if (temp !== "disabled") {
                        this.onreceive(data);
                    } else {
                        console.log("ok");
                    }

                }
            } else {
                this.log(`invalid message "${data}" received`);
            }
        });
    }

    close() {
        if (this.socket) {
            this.log(`closing socket...`);
            this.socket.close();
            this.ready = false;
            this.socket = undefined;
        }
    }

    send(emoji) {
        if (this.socket) {
            this.socket.send(emoji);
        } else {
            this.log(`warning: socket not open`);
        }
    }

    static isValidEmoji(string) {
        // only allow alphanumeric characters for security reasons
        // alternative: use a whitelist
        return /^[A-Za-z0-9_-]+$/.test(string);
    }
}