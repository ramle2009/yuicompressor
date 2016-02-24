/*
Theme Name: Hiero
Theme URI: http://athemes.com/theme/hiero
Author: aThemes
Author URI: http://athemes.com
Description:  Hiero is an awesome magazine theme for your WordPress site feature bold colors and details to the content. Responsive layout, post thumbnails support, threaded comments and more.
Version: 10.2
License: GNU General Public License v3.0
License URI: license.txt
Tags: black, white, red, two-columns, fixed-width, threaded-comments, full-width-template, custom-menu
*/


/* Global
----------------------------------------------- */
body {
	color: #333;
	font-weight: 400;
	font-family: Arial, Helvetica, sans-serif;
	line-height: 1.8;
	background: #fff;
	}

/* Headings */
h1, h2, h3, h4, h5, h6 {
	margin: 1.25em 0 .5em;
	color: #222;
	font-weight: 700;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	line-height: 1.2em;
	}
h1 {
	font-size: 16px;
	font-size: 1.6rem;
	}
h2 {
	font-size: 14px;
	font-size: 1.4rem;
	}
h3 {
	font-size: 13px;
	font-size: 1.3rem;
	}
h4 {
	font-size: 12px;
	font-size: 1.2rem;
	}
h5 {
	font-size: 11px;
	font-size: 1.1rem;
	}
h6 {
	font-size: 10px;
	font-size: 1rem;
	}


/* Links */
a {
	color: #ff2828;
	outline: none;
	-webkit-transition: all 0.14s ease 0s; 
	   -moz-transition: all 0.14s ease 0s; 
		 -o-transition: all 0.14s ease 0s; 
	}
a:visited {
	color: #eb2121;
	}
a:hover,
a:focus,
a:active {
	color: #333;
	}

/* Text Elements */
blockquote p {
	line-height: 1.6;
	}
dd {
	margin-bottom: 1em;
	}

/* Forms */
select,
textarea,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"],
.uneditable-input {
	height: 26px;
	color: #333;
	line-height: 26px;
	-webkit-border-radius: 0;
	   -moz-border-radius: 0;
			border-radius: 0;
	}
textarea {
	width: 80%;
	height: auto;
	}
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {
	border-color: #d6d6d6;
	outline: 0;
	outline: thin dotted \9;
  /* IE6-9 */

	-webkit-box-shadow: none;
	   -moz-box-shadow: none;
			box-shadow: none;
	}
button,
a.button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
	padding: 8px 15px;
	color: #fff;
	font-size: 1.2em;
	font-weight: 400;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	line-height: 30px;
	text-transform: uppercase;
	background: #060608;
	border: 1px solid #060608;
	}
button:hover,
a.button:hover,
input[type="button"]:hover,
input[type="reset"]:hover,
input[type="submit"]:hover {
	background: #ff2828;
	border-color: #ff2828;
	}

/* Tables */
table {
	width: 100%;
	margin-bottom: 20px;
	}
table th,
table td {
	padding: 8px;
	line-height: 20px;
	text-align: left;
	vertical-align: top;
	border-top: 1px solid #ddd;
	}
table th {
	font-weight: bold;
	}
table thead th {
	vertical-align: bottom;
	}
table caption + thead tr:first-child th,
table caption + thead tr:first-child td,
table colgroup + thead tr:first-child th,
table colgroup + thead tr:first-child td,
table thead:first-child tr:first-child th,
table thead:first-child tr:first-child td {
	border-top: 0;
	}
table tbody + tbody {
	border-top: 2px solid #ddd;
	}

/* Make sure embeds and iframes fit their containers */
embed,
iframe,
object {
	max-width: 100%;
	}

/* Alignment */
.alignleft {
	display: inline;
	float: left;
	margin: 0 1.5em 1.5em 0;
	}
.alignright {
	display: inline;
	float: right;
	margin: 0 0 1.5em 1.5em;
	}
.aligncenter {
	clear: both;
	display: block;
	margin: 0 auto;
	}

/* Text meant only for screen readers */
.screen-reader-text {
	position: absolute !important;
	clip: rect(1px, 1px, 1px, 1px);
	}
.screen-reader-text:hover,
.screen-reader-text:active,
.screen-reader-text:focus {
	top: 0;
	left: 0;
	width: auto;
	height: auto;
	display: block;
	clip: auto !important;
	line-height: normal;
	text-decoration: none;
	z-index: 100000; /* Above WP toolbar */
	}

/* Clearing */
.clearfix:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
	}
.clearfix {
	display: inline-block;
	}
* html .clearfix {
	height: 1%;
	}
*:first-child+html .clearfix {
	min-height: 1px;
	}
.clearfix {
	display: block;
	}
.clear {
	clear: both;
	}

/* HEADER
----------------------------------------------- */
.site-header {
	padding: 20px 0 0;
	background: #16171b;
	}
.site-branding {
	float: left;
	}
.site-title {
	margin: 0;
	font-size: 4.25em;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	line-height: 1;
	}
.site-title a {
	color: #fff;
	text-decoration: none;
	}
.site-description {
	color: #999;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	letter-spacing: 1px;
	}

/* MENU
----------------------------------------------- */
.sf-menu ul {
	margin: 0;
	padding: 0;
	list-style: none;
	}
.sf-menu li ul {
	top: -999em;
	position: absolute;
	z-index: 99999;
	}
.sf-menu li:hover ul,
.sf-menu li.sfHover ul {
	top: 40px;
	}
.sf-menu li:hover li ul,
.sf-menu li.sfHover li ul {
	top: -999em;
	}
.sf-menu li li:hover ul,
.sf-menu li li.sfHover ul {
	top: 0;
	left: 170px;
	}
.sf-menu li li:hover li ul,
.sf-menu li li.sfHover li ul {
	top: -999em;
	}
.sf-menu li li li:hover ul,
.sf-menu li li li.sfHover ul {
	top: 0;
	left: 170px;
	}
.sf-menu li {
	float: left;
	position: relative;
	visibility:	inherit;
	}
.sf-menu li a {
	float: left;
	display: block;
	}
.sf-menu li:hover li a,
.sf-menu li.sfHover li a {
	width: 130px;
	}

#main-navigation {
	clear: both;
	padding: 20px 0 0;
	}
#main-navigation .sf-menu {
	background: #060608;
	}
#main-navigation .sf-menu > ul > li:after {
	width: 1px;
	float: left;
	margin: 15px 0 0;
	content: "|";
	display: block;
	color: #666;
	font-size: 1em;
	font-family: Arial, Helvetica, sans-serif;
	}
#main-navigation .sf-menu > ul > li:last-child:after {
	display: none;
	}
#main-navigation .sf-menu > ul > li:hover:after,
#main-navigation .sf-menu > ul > li.sfHover:after,
#main-navigation .sf-menu > ul > li.current_page_item:after,
#main-navigation .sf-menu > ul > li.current-menu-item:after {
	color: #ff2828;
	}
#main-navigation li a {
	margin: 0 -2px 0 0;
	padding: 0 20px;
	color: #fff;
	font-size: 1.2em;
	font-weight: 400;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-decoration: none;
	text-transform: uppercase;
	line-height: 50px;
	}
#main-navigation li:hover ul,
#main-navigation li.sfHover ul {
	top: 50px;
	background: #ff2828;
	}
#main-navigation li li:hover ul,
#main-navigation li li.sfHover ul {
	top: 0;
	border-left: 1px solid #fd4848;
	}
#main-navigation li li {
	border-bottom: 1px solid #fd4848;
	}
#main-navigation li li a {
	color: #ffabab;
	}
#main-navigation li a:hover,
#main-navigation li.sfHover > a,
#main-navigation li.current_page_item > a,
#main-navigation li.current-menu-item > a,
#main-navigation li.current-menu-parent > a,
#main-navigation li.current-page-parent > a,
#main-navigation li.current-page-ancestor > a,
#main-navigation li.current_page_ancestor > a {
	color: #fff;
	background: #ff2828;
	}
#main-navigation li:hover li a,
#main-navigation li.sfHover li a {
	margin: 0;
	padding: 10px 20px;
	font-size: 1.1em;
	text-transform: none;
	line-height: normal;
	}
#main-navigation li:hover li a:hover,
#main-navigation li.sfHover li a:hover {
	background: #eb2121;
	}

/* Small Navigation */
.nav-open,
.nav-close {
	display: none;
	color: #333;
	font-size: 1.2em;
	font-weight: 400;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-decoration: none;
	text-transform: uppercase;
	line-height: 50px;
	letter-spacing: 1px;
	background: #060608;
	}
@media only screen and (max-width: 60em) {
	.nav-open {
		display: block;
		text-align: center;
		}
	#main-navigation:target > .nav-open {
		display: none;
		}
	#main-navigation:target > .nav-close {
		display: block;
		text-align: center;
		}
	#main-navigation > .sf-menu {
		position: relative;
		text-align: left;
		}
	#main-navigation > .sf-menu > ul {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		max-height: 0;
		max-width: 16em;
		overflow: hidden;
		background: #333;
		}
	#main-navigation:target > .sf-menu > ul {
		max-height: 400px;
		}
	#main-navigation > .sf-menu > ul > li {
		float: none;
		display: block;
		border-bottom: 1px dotted #565656;
		}
	#main-navigation > .sf-menu > ul > li:after {
		display: none;
		}
	#main-navigation li a {
		float: none;
		display: block;
		color: #fff;
		}
	}


/* LAYOUT
----------------------------------------------- */
.container {
	width: 980px;
	}
.content-area {
	width: 100%;
	float: left;
	}
.site-content {
	margin: 0 340px 0 0;
	}
.site-sidebar {
	width: 300px;
	float: left;
	margin: 0 0 0 -300px;
	}

/* CONTENT
----------------------------------------------- */
.site-main {
	padding: 40px 0;
	}
.site-content li {
	margin: 0 0 .75em;
	}
.site-content ul ul,
.site-content ul ol,
.site-content ol ol,
.site-content ol ul {
	margin-top: .75em;
	}

.sticky {
	}
.hentry {
	margin: 0 0 20px;
	-ms-word-wrap: break-word;
		word-wrap: break-word;
	}

.entry-header {
	margin: 0 0 20px;
	}
.entry-title {
	margin: 0 50px 3px 0;
	font-size: 2.4em;
	line-height: 1.2;
	}
.entry-title a {
	color: #222;
	text-decoration: none;
	}
.entry-title a:hover {
	color: #ff2828;
	}
.entry-meta {
	color: #999;
	font-size: .9em;
	}
.entry-meta a {
	color: #999;
	text-decoration: none;
	}
.entry-meta a:hover {
	color: #222;
	}
.entry-meta .cat-links {
	margin: 0 20px 0 0;
	}
.entry-meta [class^="ico-"]:before {
	margin-right: 5px;
	color: #333;
	}
.comments-link {
	float: right;
	margin: 5px 0 0;
	}
.comments-link a {
	padding: 4px 10px 6px;
	display: block;
	color: #fff;
	font-size: 1.4em;
	font-weight: 400;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-decoration: none;
	line-height: 1;
	background: #ff2828;
	}
.entry-thumbnail {
	float: left;
	width: 250px;
	height: 175px;
	margin: 0 0 20px;
	border: 5px solid #e6e6e6;
	}
.entry-thumbnail img {
	display: block;
	}
.entry-content {
	margin: 0 0 20px;
	}
.entry-summary {
	margin: 0 0 20px 280px;
	}
.entry-footer {
	clear: both;
	padding: 8px 0;
	border-top: 1px solid #d6d6d6;
	}
.more-link,
.page-links {
	margin: 15px 0 0;
	display: block;
	text-align: center;
	}
.post-password-required label {
	float: left;
	margin: 0 10px 0 0;
	}

.page-header {
	margin: 0 0 30px;
	padding: 15px 20px 5px;
	background: #f6f6f6;
	border: 1px solid #e6e6e6;
	}
.page-title {
	margin: 0 0 10px;
	font-size: 1.6em;
	text-transform: uppercase;
	letter-spacing: 2px;
	}

body.search .page .entry-footer {
	padding: 0;
	border-top: none;
	}

/* Author Box */
.author-info {
	margin: 0 0 30px;
	padding: 15px 20px;
	background: #f6f6f6;
	border: 1px solid #e6e6e6;
	}
.author-info .author-photo {
	float: left;
	margin: 0 30px 0 0;
	border: 5px solid #e6e6e6;
	}
.author-info .author-content {
	margin: 0 0 0 115px;
	}
.author-info .author-content h3 {
	margin: 0 0 10px;
	font-size: 1.4em;
	text-transform: uppercase;
	letter-spacing: 1px;
	}
.author-info .author-links a {
	margin: 0 20px 0 0;
	color: #999;
	font-size: .9em;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 2px;
	}
.author-info .author-links a:hover {
	color: #333;
	}

/* Media
----------------------------------------------- */
.page-content img.wp-smiley,
.entry-content img.wp-smiley,
.comment-content img.wp-smiley {
	margin-bottom: 0;
	margin-top: 0;
	padding: 0;
	border: none;
	}
.wp-caption {
	border: 1px solid #d5d5d5;
	margin-bottom: 1.5em;
	max-width: 100%;
	}
.wp-caption img[class*="wp-image-"] {
	display: block;
	margin: 1.2% auto 0;
	max-width: 98%;
	}
.wp-caption-text {
	color: #999;
	font-style: italic;
	text-align: center;
	}
.wp-caption .wp-caption-text {
	margin: .5em 0;
	}
.site-content .gallery {
	margin-bottom: 1.5em;
	}
.gallery-caption {
	}
.site-content .gallery a img {
	border: none;
	height: auto;
	max-width: 90%;
	}
.site-content .gallery dd {
	margin: 0;
	}
.entry-attachment .attachment {
	margin: 0 0 15px;
	}

/* Navigation
----------------------------------------------- */
.site-content [class*="navigation"] {
	margin: 0 0 15px;
	overflow: hidden;
	}
[class*="navigation"] .nav-previous {
	width: 50%;
	float: left;
	}
[class*="navigation"] .nav-next {
	width: 50%;
	float: right;
	text-align: right;
	}
.site-content [class*="navigation"] a {
	display: inline-block;
	padding: 5px 15px;
	color: #fff;
	font-size: 1.3em;
	font-weight: 400;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	text-decoration: none;
	line-height: 26px;
	background: #060608;
	}
.site-content [class*="navigation"] a:hover {
	background: #ff2828;
	}
.site-content [class*="navigation"] [class^="ico-"]:before {
	margin: 0;
	}

/* COMMENTS
----------------------------------------------- */
.comment-list {
	margin: 0 0 20px;
	padding: 0;
	list-style: none;
	}
.comment-list ul.children {
	margin: 0 0 0 50px;
	list-style: none;
	}
.comment-list li.comment,
.comment-list li.pingback {
	margin: 0;
	padding: 0;
	}
.comment-list li.pingback p {
	margin: 0;
	font-style: italic;
	}
.comment-list li.comment .comment-body {
	padding: 30px 0 20px;
	border-bottom: 1px solid #d6d6d6;
	}
.comment-list li.comment .comment-author .avatar {
	float: left;
	margin: 0 20px 0 0;
	display: block;
	}
.comment-list li.comment .comment-author .fn {
	color: #999;
	font-size: 1.2em;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	}
.comment-list li.comment .comment-author .fn a {
	color: #333;
	text-decoration: none;
	}
.comment-list li.comment .comment-author .fn a:hover {
	color: #ff2828;
	}
.comment-list li.comment .comment-metadata {
	margin: 0 0 2px;
	font-size: .875em;
	}
.comment-list li.comment .comment-metadata a {
	color: #999;
	text-decoration: none;
	}
.comment-list li.comment .comment-metadata a:hover {
	color: #333;
	}
.comment-list li.comment .reply {
	float: right;
	}
.comment-list li.comment .reply a {
	color: #ff2828;
	font-size: .9em;
	font-weight: 300;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 1px;
	}
.comment-list li.comment .reply a:hover {
	color: #333;
	}
.comment-content {
	clear: both;
	margin: 20px 0 0;
	}
.comment-content a {
	word-wrap: break-word;
	}
.bypostauthor {
	}

/* Comment Form */
#reply-title {
	margin: 20px 0 15px;
	padding: 0 0 15px;
	font-size: 1.5em;
	text-transform: uppercase;
	border-bottom: 1px solid #d6d6d6;
	}
#cancel-comment-reply-link {
	margin: 0 0 0 10px;
	color: #333;
	font-size: .9em;
	text-decoration: none;
	}
#commentform {
	margin: 0;
	padding: 0;
	}
#commentform label {
	font-size: 1.2em;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	letter-spacing: 2px;
	}
#commentform textarea {
	height: 100px;
	}

/* WIDGETS
----------------------------------------------- */
.widget {
	margin: 0 0 30px;
	}
.widget-title {
	margin: 0;
	font-size: 1.6em;
	text-transform: uppercase;
	letter-spacing: 2px;
	border-bottom: 1px solid #d6d6d6;
	}
.widget-title span {
	margin: 0 0 -1px;
	display: inline-block;
	line-height: 40px;
	border-bottom: 3px solid #ff2828;
	}

/* Make sure select elements fit in widgets */
.widget select {
	max-width: 100%;
	}

.widget ul {
	margin: 0 0 20px;
	padding: 0;
	list-style: none;
	}
.widget ul ul {
	margin: 6px 0 -7px;
	padding: 0 0 0 15px;
	border-top: 1px solid #e6e6e6;
	}
.widget li {
	padding: 6px 0;
	border-bottom: 1px solid #e6e6e6;
	}

.widget li a {
	color: #333;
	}
.widget li a:hover {
	color: #ff2828;
	}

/* Widget Text */
.widget_text .textwidget {
	margin: 15px 0 0;
	}

/* Widget Tabs */
.widget_athemes_tabs .widget-tab-nav {
	margin: 0;
	border-bottom: 1px solid #e6e6e6;
	*zoom: 1;
	}
.widget_athemes_tabs .widget-tab-nav li {
	float: left;
	width: 33.3%;
	margin: 0;
	padding: 0;
	text-align: center;
	border: none;
	}
.widget_athemes_tabs .widget-tab-nav li a {
	display: block;
	padding: 5px 15px;
	color: #999;
	font-size: 1.3em;
	font-family: "Yanone Kaffeesatz", Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	letter-spacing: 2px;
	line-height: 30px;
	background: #060608;
	border: none;
	border-radius: 0;
	}
.widget_athemes_tabs .widget-tab-nav li a:hover,
.widget_athemes_tabs .widget-tab-nav li a:focus {
	color: #fff;
	text-decoration: none;
	}
.widget_athemes_tabs .widget-tab-nav li.active a {
	color: #fff;
	background: #ff2828;
	}
.widget_athemes_tabs .widget-tab-content .tab-pane {
	margin: 0;
	display: none;
	background: #f6f6f6;
	border: 1px solid #e6e6e6;
	}
.widget_athemes_tabs .widget-tab-content .active {
	display: block;
	}
.widget_athemes_tabs .widget-tab-content .tab-pane ul {
	margin: 0;
	}
.widget_athemes_tabs .widget-tab-content .tab-pane li {
	margin: 0;
	padding: 10px;
	}
.widget_athemes_tabs .widget-entry-thumbnail {
	float: left;
	width: 50px;
	height: 50px;
	border: 3px solid #d6d6d6;
	}
.widget_athemes_tabs .widget-entry-thumbnail img {
	width: 50px;
	height: 50px;
	display: block;
	}
.widget_athemes_tabs .widget-entry-summary {
	margin: 3px 0 0 65px;
	}
.widget_athemes_tabs .widget-entry-content span,
.widget_athemes_tabs .widget-entry-summary span {
	color: #999;
	font-size: 1em;
	}
.widget_athemes_tabs .widget-entry-content h4,
.widget_athemes_tabs .widget-entry-summary h4 {
	margin: 0;
	font-size: 1.3em;
	text-transform: uppercase;
	line-height: 1.2;
	}
.widget_athemes_tabs .widget-entry-content h4 a,
.widget_athemes_tabs .widget-entry-summary h4 a {
	}
.widget_athemes_tabs .widget-entry-content h4 a:hover,
.widget_athemes_tabs .widget-entry-summary h4 a:hover {
	text-decoration: none;
	}
.widget_athemes_tabs #widget-tab-tags {
	padding: 10px;
	line-height: 1.4;
	}
.widget_athemes_tabs #widget-tab-tags a {
	color: #999;
	text-decoration: none;
	}
.widget_athemes_tabs #widget-tab-tags a:hover {
	color: #333;
	}

/* Widget oEmbed */
.widget_athemes_media_embed .widget-oembed-content {
	margin: 15px auto 5px;
	}
.widget_athemes_media_embed embed,
.widget_athemes_media_embed iframe,
.widget_athemes_media_embed object,
.widget_athemes_media_embed video {
	max-width: 100%;
	min-height: 200px;
	max-height: 250px;
	}
.widget_athemes_media_embed .widget-oembed-description {
	margin: 0 0 15px;
	}

/* Widget Social Icons */
.widget_athemes_social_icons li {
	float: left;
	margin: 15px 10px 0 0;
	padding: 0;
	text-align: center;
	border: none;
	}
.widget_athemes_social_icons li a {
	display: block;
	}
.widget_athemes_social_icons li a [class^="ico-"]:before {
	width: 40px;
	margin: 0;
	color: #fff;
	font-size: 20px;
	line-height: 40px;
	background: #060608;
	}
.widget_athemes_social_icons li a:hover [class^="ico-"]:before {
	background: #ff2828;
	}

/* Widget Flickr */
.widget_athemes_flickr_stream .widget-flickr-stream {
	margin: 0 -6px;
	}
.widget_athemes_flickr_stream .flickr_badge_image {
	float: left;
	width: 55px;
	display: block;
	margin: 15px 6px 0 6px;
	border: 5px solid #e5e5e5;
	}
.widget_athemes_flickr_stream .flickr_badge_image img {
	display: block;
	}

/* Header Widgets */
.site-header .widget {
	float: right;
	clear: right;
	margin: 10px 0;
	text-align: right;
	}

/* SIDEBAR
----------------------------------------------- */
.site-sidebar {
	font-size: .9em;
	}

.site-sidebar .widget_search .search-form {
	margin: 15px 0;
	}
.site-sidebar .widget_search .search-field {
	float: left;
	width: 68%;
	margin: 0 10px 0 0;
	}
.site-sidebar .widget_search .search-submit {
	font-size: 1.3em;
	}

.site-sidebar .widget_archive select,
.site-sidebar .widget_categories select {
	width: 100%;
	height: 30px;
	margin: 15px 0 0;
	}

/* SITE EXTRA
----------------------------------------------- */
.site-extra {
	padding: 20px 0;
	color: #666;
	font-size: .9em;
	background: #060608;
	}
.site-extra .widget li a {
	color: #999;
	text-decoration: none;
	}
.site-extra .widget li a:hover {
	color: #ff2828;
	}
.site-extra .pad {
	margin: 0 -15px;
	}
.site-extra .widget-area {
	float: left;
	width: 25%;
	}
.extra-one .widget-area {
	width: 100%;
	}
.extra-two .widget-area {
	width: 50%;
	}
.extra-three .widget-area {
	width: 33.3%;
	}
.site-extra .widget {
	margin: 0 15px 30px;
	padding: 0;
	border: none;
	}
.site-extra .widget-title {
	color: #999;
	border-bottom-color: #444;
	}
.site-extra .widget li {
	border-bottom-color: #111;
	}

.site-extra .widget_athemes_social_icons li a [class^="ico-"]:before {
	width: 25px;
	line-height: 25px;
	background: none;
	}
.site-extra .widget_athemes_social_icons li a:hover [class^="ico-"]:before {
	color: #ff2828;
	}

/* FOOTER
----------------------------------------------- */
.site-footer {
	padding: 15px 0;
	color: #999;
	font-size: .9em;
	background: #16171b;
	}
.site-footer a {
	color: #fff;
	text-decoration: none;
	}
.site-footer a:hover {
	color: #ff2828;
	}
.site-info {
	float: left;
	}
.site-credit {
	float: right;
	}

/* RESPONSIVE SUPPORT
----------------------------------------------- */
@media screen and (max-width: 960px) {
	.container {
		width: 90%;
		}
	.site-content {
		margin-right: 40%;
		}
	.site-sidebar {
		width: 35%;
		margin-left: -35%;
		}
	.site-sidebar .widget_search .search-field {
		width: 95%;
		margin: 0 0 10px;
		}
	.site-extra .widget-area {
		width: 50%;
		}
	}
@media screen and (max-width: 758px) {
	.site-header .widget-area {
		display: none;
		}
	.site-header .site-branding {
		float: none;
		text-align: center;
		}
	.content-area {
		float: none;
		}
	.site-content {
		margin: 0;
		}
	.entry-thumbnail {
		float: none;
		margin: 0 auto 15px;
		}
	.entry-summary {
		margin-left: 0;
		}
	.site-sidebar {
		width: auto;
		float: none;
		margin: 20px 0 0;
		}
	.site-extra .widget-area {
		width: 100%;
		}
	}
@media screen and (max-width: 480px) {
	.site-footer {
		text-align: center;
		}
	.site-footer .site-info,
	.site-footer .site-credit {
		float: none;
		}
	}
@media screen and (max-width: 320px) {
	}
