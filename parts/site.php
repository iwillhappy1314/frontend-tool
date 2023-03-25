<?php
$site = $args[ 'site' ];

$site_id     = get_object_vars($site)[ 'blog_id' ];
$site_name   = get_blog_details($site_id)->blogname;
$site_option = get_blog_option($site_id, 'site_options');

$screenshot_file = '';
$screenshot      = bef_data_get($site_option, 'screenshot.url');

if ( ! $screenshot) {
    $screenshot      = trailingslashit(wp_upload_dir()[ 'baseurl' ]) . 'sites/' . $site_id . '/sites-export/screenshot.jpg';
    $screenshot_file = trailingslashit(wp_upload_dir()[ 'basedir' ]) . 'sites/' . $site_id . '/sites-export/screenshot.jpg';
}

$site_url = 'https://' . $site->domain . $site->path;
?>

<?php if ($screenshot && file_exists($screenshot_file)) : ?>

    <div>
        <div class="shadow">
            <div class="c-browser" data-url="">
                <div class="card-image">
                    <a target=_blank href="<?= $site_url; ?>">
                        <img src="<?= $screenshot; ?>" alt="<?= $site_name; ?> Screenshot">
                    </a>
                </div>
            </div>

            <div class="px-3 py-2 text-center">
                <a class="no-underline text-gray-800" target=_blank href="<?= $site_url; ?>"><?= $site_name; ?></a>
            </div>
        </div>

    </div>

<?php endif; ?>
