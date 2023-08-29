<?php

$data = stripslashes(file_get_contents("php://input"));

echo $data;
$filenum=1;

while(true)
{
    if(file_exists("tests/test".strval($filenum).".json")==0)
    {
      $myfile = fopen("tests/test".strval($filenum).".json", "w");
      fwrite($myfile, $data);
      echo "Test Created";
      break;
    }
    $filenum++;
}
?>