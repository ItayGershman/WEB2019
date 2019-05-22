<!DOCTYPE html>
<html>
    <head>
        <title>ex4</title>
    </head>
    <body>
        <section>
            <?php
                $name = $_GET["reg_name"];
                $phone = $_GET["reg_phone"];
                if($name == "itay"){
                    echo "<h2>Hello there " . $name ."</h2>";
                }
                else echo "<h2>Who are you? you can't get in </h2>";

                if($phone != "0542336331" ){
                    echo "<h2>Your phone number has been changed to  " . $phone ." ,this phone number has been saved succesfully in the system</h2>";
                }
                else echo "<h2>Your phone number is: " .$phone . "</h2>";
            ?>
    </body>
</html>