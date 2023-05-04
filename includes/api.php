<?php

add_action('wp_ajax_bef_get_sites', 'bef_get_sites');
add_action('wp_ajax_nopriv_bef_get_sites', 'bef_get_sites');

/**
 * https://wpcio.com/wp-admin/admin-ajax.php?action=bef_get_sites
 * @return void
 */
function bef_get_sites()
{

    $sites = get_sites();
    unset($sites[ 0 ]);

    $data = [];

    foreach ($sites as $site) {
        $site_id = get_object_vars($site)[ 'blog_id' ];

        $data[] = [
            'site_id'         => get_object_vars($site)[ 'blog_id' ],
            'status'          => get_object_vars($site)[ 'blog_id' ],
            'site_name'       => get_blog_details($site_id)->blogname,
            'site_option'     => get_blog_option($site_id, 'site_options'),
            'screenshot'      => trailingslashit(wp_upload_dir()[ 'baseurl' ]) . 'sites/' . $site_id . '/sites-export/screenshot.jpg',
            'screenshot_file' => trailingslashit(wp_upload_dir()[ 'basedir' ]) . 'sites/' . $site_id . '/sites-export/screenshot.jpg',
            'site_url'        => 'https://' . $site->domain . $site->path,
        ];
    }

    wp_send_json($data);

}