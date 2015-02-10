<? include '_head.php'; ?>
<body>
    <? include '_chromeframe.php'; ?>
    <div class="wrapper">
        <? include '_header.php'; ?>
		<div class="content">
			<div class="block">
				<div class="centered">
					<div class="logo-block">
						<div class="thunder thunder-left"><img src="assets/images/thunder-left.svg" alt="ícone raio"></div>
						<h1 class="logo"><? include '_logo.php'; ?></h1>	
						<div class="thunder thunder-right"><img src="assets/images/thunder-right.svg" alt="ícone raio"></div>
					</div>
					<div class="info-block">
						<h2 class=""><span><</span>ARENA<span>/></span></h2>
						<h4 class=""><span>ARACAJU</span> - SERGIPE</h4>
						<h3 class="">05<span>SET</span>15</h3>
					</div>
					<div class="buttons-block fadeIn">
						<a href="#" class="button-inscrever">
							<h4>INSCREVA-SE</h4>
							<p>LOTE PROMOCIONAL</p>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-full">
			<div class="effect-video"></div>
	        <video autoplay  poster="assets/images/bg-poster-video.jpg" id="bg-video" loop>
				<source src="assets/images/rock-and-code-1280x720.mp4" type="video/mp4">
			</video>
		</div>

        <? include '_footer.php'; ?>
    </div>
</body>
</html>