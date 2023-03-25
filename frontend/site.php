<?php
$site = $args['site'];

$site_id   = get_object_vars($site)[ 'blog_id' ];
$site_name = get_blog_details($site_id)->blogname;
$site_option = get_blog_option($site_id, 'site_options');

$screenshot = bef_data_get($site_option, 'screenshot.url');
?>

<div>
    <img src="<?= $screenshot; ?>" alt="">
    <b>Site ID</b>: <?= $site_id; ?> <br>
    <b>Site Name</b>: <?= $site_name; ?> <br>
    <b>Site Url</b>: https://<?= $site->domain . $site->path ; ?> <br>
</div>