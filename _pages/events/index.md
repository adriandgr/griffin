---
layout: default
title: Events
permalink: /events/
---

<div class="jumbotron" style="margin-bottom: 0px; padding-bottom: 0px;">
	<h2>Events Listing</h2>
</div>

{% for event in site.events reversed %}

<div class="jumbotron" style="margin-bottom: 0px; padding-bottom: 0px;">
     
	<h2><a href="{{ event.url }}">{{ event.title }}</a></h2>
	<a href="{{ event.url }}">
	<p><span style="font-size: 11pt">{{ event.event-date }}</span></p></a>
	<div class="row">
		<div class="col-md-5">
			</a><a href="{{ event.url }}"><img alt="{{ event.img-artist }}" title="" src="{{ site.url }}/assets/img/events/{{ event.img }}"></a>
		</div>
		<div class="col-md-7">{{ event.content }}
		</div>
	</div>
</div>
  

{% if event.last-post == false %} <hr style="margin-top: 80px;"> {% endif %}
{% if event.last-post == true %} <br> <br> <br> {% endif %}

{% endfor %}