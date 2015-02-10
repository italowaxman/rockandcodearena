<? include '_head.php'; ?>
<body>
    <? include '_chromeframe.php'; ?>
    <div class="wrapper">
        <? include '_header.php'; ?>
		<div class="content">
			<div class="block">
				<div class="centered">
					<h1>TESTE TESTE TESTE</h1>	
				</div>
			</div>
		</div>
		<div class="bg-full">
			<div class="effect-video"></div>
	        <video autoplay  poster="assets/images/bg-poster-video.jpg" id="bg-video" loop>
			    <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
				<source src="assets/images/gladiators-bg-3.mp4" type="video/mp4">
			</video>
		</div>

        <? include '_footer.php'; ?>
    </div>
</body>
</html>