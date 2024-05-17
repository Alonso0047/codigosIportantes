<!-- Declaracion de variables
El . en php sirve para concatenar -->
<?php
$name = "Alonso";
$edad = 23;
$bool = true;
/* El var_dump sirve para indicar el tipo de dato */
var_dump($edad);
/* Variables globales */
define('logo', 'url_logo');

/* Esto es como el switch */
$saberEdad = match (true) {
    $edad<2  => "Eres un bebe, $name",
    $edad<10 => "Eres un niño, $name",
    $edad<18 => "Eres un adolescente, $name",
    $edad<40 => "Eres un adulto joven, $name",
    default  => "No tienes edad",
};


$person=[
    "name" => "Alonso",
    "age" => 22,
    "bool" => true,
];



$mejoresLenguas = ["Python", "PHP", 1,5];
/* Te lo agrega al final del array */
$mejoresLenguas[]="JAVA";
?>

<ul>
    <?php foreach($mejoresLenguas as $key => $lengua) : ?>
        <li><?= $key."".$lengua?></li>
    <?php endforeach; ?>
</ul>



<!-- If cuando quieras usarlo sin echo sino seria modo normal -->
<?php if ($bool):?>
    <h2>Eres viejo, lo siento</h2>
<?php elseif ($edad):?>
    <h2>No eres viejo, felicidades</h2>
<?php else :?>
    <h2>No eres viejo, felicidades</h2>
<?php endif ; ?>




<!-- Manera de imprimir el logo -->
<img src="<?=logo?>" alt="PHP logo" width="200">

<h1>
    <!-- El simbolo que tenemos debajo sirve para imprimir igual que echo solo que es mas rapido -->
<?= $name;?>
</h1>

<style>
    :root {
        color-scheme: light dark;
    }

    body{
        display: grid;
        place-content: center;
    }
</style>