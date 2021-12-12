<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="emojis.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" /> -->
    <title>Stream</title>

</head>

<body>

    <div class="container-fluid">
        <div class="row">
            <div style=''>
                <div style=''><iframe
                        src="https://web.microsoftstream.com/embed/video/8594514d-42d3-4805-af46-838a26a14d6d?autoplay=true&showinfo=false?wmode=opaque"
                        allowfullscreen
                        style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; "></iframe>
                </div>
            </div>
        </div>
    </div>

    <div id="wrapper" class="">
        <div class="emojisal">
            <div class="">
                <button class="angry" data-emoji="angry"><img
                        src="https://cdn4.iconfinder.com/data/icons/reaction/32/angry-512.png" /></button>
            </div>
            <div class="">
                <button class="sad" data-emoji="sad"><img
                        src="https://cdn4.iconfinder.com/data/icons/reaction/32/sad-512.png" /></button>
            </div>
            <div class="">
                <button class="surprise" data-emoji="surprise"><img
                        src="https://cdn4.iconfinder.com/data/icons/reaction/32/surprise-512.png" /></button>
            </div>
            <div class="">
                <button class="happy" data-emoji="happy"><img
                        src="https://cdn4.iconfinder.com/data/icons/reaction/32/happy-512.png" /></button>
            </div>
            <div class="">
                <button class="shy" data-emoji="shy"><img
                        src="https://cdn4.iconfinder.com/data/icons/reaction/32/shy-512.png" /></button>
            </div>
            <div class="particlesContainer"></div>
        </div>
    </div>
    <div hidden class="closeemoji" style="position: absolute;top: 4%;right: 3%;">
        <img onclick="hideemojis();" src="emojis/dizzy.png">
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous">
    </script>
    <script src="emojis.js"></script>
    <script src="emoji.js"></script>

    <script>

    </script>

</body>

</html>