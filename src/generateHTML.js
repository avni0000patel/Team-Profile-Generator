class generateHTML {
    template = (data) => {
        return `
            <!doctype html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
                    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <link rel="stylesheet" href="./style.css">
                    <title>Team Profile Generator</title>
                </head>
                <body>
                    <div class="jumbotron text-center heading">
                        <h1 class="team">Team Profile Generator</h1>
                    </div>
                    <div class="container">
                        <div class="row">
                        ${data}
                        </div>
                    </div>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
                        <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
                </body>
            </html>
        `
    }
}

module.exports = generateHTML;