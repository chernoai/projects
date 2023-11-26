
<?php
$directorio = $_GET['directorio'];
$archivos = scandir($directorio);
$archivos = array_diff($archivos, ['.', '..']);
echo json_encode(array_values($archivos));
?>
