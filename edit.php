<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sunglasses Order Details</title>
</head>
<body>
    <h1>Sunglasses Order Details</h1>
    <?php
        $color = $_GET["color"];
        $size = $_GET["size"];
        $quantity = $_GET["quantity"];
        echo "<p>Color: " . $color . "</p>";
        echo "<p>Size: " . $size . "</p>";
        echo "<p>Quantity: " . $quantity . "</p>";
    ?>
</body>
</html>