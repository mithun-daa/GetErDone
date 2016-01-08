<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/css/style.css"> 
  {% if ENV_DEVELOPMENT %}
  <script src="http://localhost:35729/livereload.js"></script>
  {% endif %}
</head>

<body>

<div class="login-container">
  <div class="login">
    <div class="login-header">
      <h1>{{ title }}</h1>
      <p>Welcome</p>
    </div>
      <div class="login-content">
        <a href="/auth/facebook">
        <div class='login-link fb'>
          <i class='fa fa-facebook'></i>
        </div>
        </a>
        <a href="/auth/google">
        <div class='login-link google'>
          <i class='fa fa-google'></i>
        </div>
        </a>
        <a href="/auth/twitter">
        <div class='login-link twitter'>
          <i class='fa fa-twitter'></i>
        </div>
        </a>
        <a href="/auth/github">
        <div class='login-link github'>
          <i class='fa fa-github'></i>
        </div>
        </a>
      </div>
    </div>
  </div>
</body>

</html>