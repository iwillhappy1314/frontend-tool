<?php
/**
 * Template Name: Template List
 * Template Post Type: post, page, product
 * The main single item template file.
 *
 * @package kadence
 */

namespace Kadence;

if ( ! defined('ABSPATH')) {
    exit;
}

get_header();

$sites = get_sites();
unset($sites[ 0 ]);

?>

    <div class="content-container site-container my-6 lg:my-12">

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
            <?php
            foreach ($sites as $site) {
                get_template_part('parts/site', '', ['site' => $site]);
            }
            ?>
        </div>
    </div>

    <?php

get_footer();
