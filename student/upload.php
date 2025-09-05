<?php
// Set upload directory
$uploadDir = "uploads/";
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// Get student name
$studentName = htmlspecialchars($_POST['studentName']);

// Handle file upload
if (isset($_FILES['assignmentFile']) && $_FILES['assignmentFile']['error'] === UPLOAD_ERR_OK) {
    $fileTmpPath = $_FILES['assignmentFile']['tmp_name'];
    $fileName = basename($_FILES['assignmentFile']['name']);
    $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);

    // Optional: sanitize and rename file
    $newFileName = $studentName . "_" . time() . "." . $fileExtension;
    $destPath = $uploadDir . $newFileName;

    if (move_uploaded_file($fileTmpPath, $destPath)) {
        echo "✅ Assignment uploaded successfully!";
    } else {
        echo "❌ Error moving the uploaded file.";
    }
} else {
    echo "❌ No file uploaded or upload error.";
}
?>
