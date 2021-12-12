function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

// console.log(between(50, 70))


myStorage = window.localStorage;
$(function() {
    var socket = new FloatingEmoji()
    socket.open('wss://doriersocket.digiplace.site:443')
    socket.onreceive = spawnEmoji;
    // ---------- PARAMETERS ---------
    var randomSpeeds = function() { return getRandomInteger(1000, 7000) } // The lower, the faster


    var delay = 0 // The higher, the more delay
    var startScreenPercentage = 0.30 // starts from 70% of the screen...
    var endScreenPercentage = 0.70 // ...till 100% (end) of the screen
        // -------------------------------
        // Generates a random integer between the min and max
    var getRandomInteger = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        //     var fbReactions = ['angry', 'sad', 'surprise', 'happy', 'shy']
        //     var interval

    //     $('button').on('click', function(event) {


    //         interval = setInterval(function() {
    //             var emojiName = $(event.target).parent().data("emoji")
    //             console.log(emojiName)
    //             if (emojiName !== 'undefined') {
    //                 $('body').append('<img class="particle" src="https://cdn4.iconfinder.com/data/icons/reaction/32/' + emojiName + '-512.png" />')
    //                 $('.particle').toArray().forEach(function(particle) {
    //                     var bounds = getRandomInteger($('body').width() * startScreenPercentage, $('body').width() * endScreenPercentage)
    //                     $(particle).animate({ left: bounds, right: bounds }, delay, function() {
    //                         $(particle).animate({ top: '-70%', opacity: 0 }, randomSpeeds(), function() {
    //                             $(particle).remove()
    //                         })
    //                     })
    //                 }) /* forEach particle Loop close*/
    //             }
    //             clearInterval(interval)
    //         }, 1) /* setInterval close*/

    //     }) /* on('click') close*/
    // }) /* JQuery onDocumentReady close*/



    function spawnEmoji(emojiName) {
        const topperc = between(30, 70) + "%";
        if (emojiName !== undefined) {
            var interval = setInterval(function() {
                $('body').append('<img class="particle" src="/emojis/' + emojiName + '.png" />')
                $('.particle').toArray().forEach(function(particle) {
                    var bounds = getRandomInteger($('body').width() * startScreenPercentage, $('body').width() * endScreenPercentage)
                    $(particle).animate({ left: bounds, right: bounds }, delay, function() {
                        $(particle).animate({ top: topperc, opacity: 0 }, randomSpeeds(), function() {
                            $(particle).remove()
                        })
                    })
                }) /* forEach particle Loop close*/
                clearInterval(interval);
            }, 1) /* setInterval close*/
        } else {
            console.log("error");
        }
    }
    $('button').on('click', function(event) {
        clickcount();
        if (myStorage.clickcount < 10) {
            socket.send($(event.target).parent().data("emoji"))
        } else {

            var emojiName = $(event.target).parent().data("emoji");
            console.log(emojiName);
            if (emojiName !== undefined) {

                spawnEmoji(emojiName);
            } else {
                console.log("error");
            }
        }


    }) /* on('click') close*/

}) /* JQuery onDocumentReady close*/


// else 

// debugger;
// // incrementValue();		 
// var emojiName = $(event.target).parent().data("emoji");
// spawnEmoji(emojiName);

function clickcount() {
    // setTimeout(() => { console.log("this is the first message") }, 1000);
    // setTimeout(() => { console.log("this is the second message") }, 60000);
    // setTimeout(() => { console.log("this is the third message") }, 60000);

    if (myStorage.clickcount === undefined) {
        myStorage.clickcount = 0;
    } else {
        if (myStorage.clickcount < 10) {
            myStorage.clickcount = parseInt(myStorage.clickcount) + 1;
            // alert(myStorage.clickcount);
        } else if (myStorage.clickcount >= 10) {
            setTimeout(resetlocal, 60000);
        }
    }
}
var temp = "enabled";

function hideemojis() {

    if (temp == "enabled") {
        temp = "disabled";
        $(".particle").remove();
        $("#wrapper").hide()
    } else {
        temp = "enabled";
        $(".particle").show()
        $("#wrapper").show()
    }
}

function resetlocal() {
    myStorage.clickcount = 0;
    console.log("called");
}