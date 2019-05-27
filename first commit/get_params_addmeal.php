<!DOCTYPE html>
<html>
    <head>
    <title>Add Meal Check</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
                    <link rel="stylesheet" href="includes/style.css">
                    <link href="https://fonts.googleapis.com/css?family=Bungee&display=swap" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
                    <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body>
        <section>
        <?php
            $un = $_GET["categ"];
            $pw = $_GET["meal"];

            if ($un == "Starters" || $un == "Main Dishes" || $un == "Desserts"){
                echo file_get_contents("success.html");
            }
            else {
                echo file_get_contents("failed.html");
            }
            
        ?>
        </section>
    </body>
</html>