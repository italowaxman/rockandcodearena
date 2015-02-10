<? header('Content-Type: text/html; charset=utf-8'); ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> <!--  site com responsivo -->

	<!-- Core Meta Data -->
	<meta name="author" content="LincePlate">
	<meta name="description" content="Descrição do site">
	<meta name="keywords" content="Palavras chave do site aqui">

	<!-- Facebook Tags -->
	<meta property="og:description" content="Descrição do projeto aqui">
	<meta property="og:image" content="Endereço do site /avatar_face.png">
	<meta property="og:site_name" content="Nome do Site">
	<meta property="og:title" content="Título do Site">
	<meta property="og:type" content="website">
	<meta property="og:url" content="<?= 'http://'. $_SERVER["SERVER_NAME"] ?>">

	<!-- Twitter tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content=" Endereço do site aqui">
	<meta name="twitter:creator" content="Usuário do Twitter">
	<meta name="twitter:title" content="Título aqui">
	<meta name="twitter:description" content="Descrição do projeto aqui">
	<meta name="twitter:image" content="<?= 'http://'. $_SERVER["SERVER_NAME"] ?>/avatar_face.png">

	<!-- Humans -->
	<link rel="author" href="humans.txt" />

	<!-- Favicon -->
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="favicon.png" type="image/png">
	<link rel="shortcut icon" href="<?= 'http://'. $_SERVER["SERVER_NAME"] ?>/favicon.png" type="image/png"> <!-- link absoluto do favicon -->



	<? include '_css.php'; ?>
	<script src="assets/js/vendor/modernizr-2.6.2.min.js"></script>



	<meta charset="UTF-8">
	<title>LincePlate Turbo 2.0</title>
</head> 
