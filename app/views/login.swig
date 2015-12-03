<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="/css/style.css"> 
  {% if ENV_DEVELOPMENT %}
  <script src="http://localhost:35729/livereload.js"></script>
  {% endif %}
</head>

<body>
  <h1>{{ title }}</h1>
  <p>Welcome to The login page</p>
  <a href="/auth/facebook">Facebook</a>
  <a href="/auth/google">Google</a>
  <a href="/auth/twitter">Twitter</a>
  <a href="/auth/github">Github</a>
</body>

</html>