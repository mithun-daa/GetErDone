<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<title>{{ title }}</title>
		<link rel="stylesheet" href="/css/style.css">
		<script src="js/libs/system.src.js"></script>
		<script src="js/libs/angular2.dev.js"></script>
		<script src="js/libs/http.dev.js"></script>
		<script>
			System.config({
		packages: {'js/app': {defaultExtension: 'js'}}
		});
		System.import('js/app/app');
		</script>
	
		{% if ENV_DEVELOPMENT %}
		<script src="http://localhost:35729/livereload.js"></script>
		{% endif %}
	</head>
	
	<body>
		<get-er-done>Loading...</get-er-done>
	
		<script type="text/javascript">
			var user = {{ JSON.stringify(user) }}
		</script>
	</body>
</html>