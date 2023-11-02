<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $caption = $_POST["caption"];

    // Check if the file was uploaded without errors
    if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["image"]["name"]);

        // Check if the file already exists
        if (file_exists($target_file)) {
            echo "Sorry, this file already exists.";
        } else {
            // Check the file size and file type
            if ($_FILES["image"]["size"] > 5000000) {
                echo "Sorry, your file is too large.";
            } elseif (
                !in_array(
                    pathinfo($target_file, PATHINFO_EXTENSION),
                    ["jpg", "jpeg", "png", "gif"]
                )
            ) {
                echo "Sorry, only JPG, JPEG, PNG, and GIF files are allowed.";
            } else {
                // Move the file to the target directory
                if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                    echo "The file " . htmlspecialchars(basename($_FILES["image"]["name"])) . " has been uploaded.";

                    // Store image and caption in a JSON file
                    $jsonFile = 'image_data.json';

                    $imageData = json_decode(file_get_contents($jsonFile), true) [];

                    $newImageData = [
                        'image_path' => $target_file,
                        'caption' => $caption,
                    ];

                    $imageData[] = $newImageData;

                    file_put_contents($jsonFile, json_encode($imageData));
                } else {
                    echo "Sorry, there was an error uploading your file.";
                }
            }
        }
    } else {
        echo "Error: No file uploaded.";
    }
}
?>

