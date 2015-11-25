{% extends 'layout.swig' %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>Welcome to The login page</p>
  <a href="/auth/facebook">Facebook</a>
  <a href="/auth/google">Google</a>
  <a href="/auth/twitter">Twitter</a>
  <a href="/auth/github">Github</a>
{% endblock %}
