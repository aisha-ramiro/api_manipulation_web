<?php

    $apiUrl = 'http://localhost:3000/saudacao';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);

    $dados = json_decode($response, true);

    echo $dados['mensagem'];



?>