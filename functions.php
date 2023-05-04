<?php

require_once(get_theme_file_path('includes/helpers.php'));
require_once(get_theme_file_path('includes/api.php'));

/**
 * Setup Child Theme Styles
 */
add_action('wp_enqueue_scripts', function ()
{
    wp_enqueue_style('bef-style', bef_get_assets_url('dist/styles/main.css'), false, '1.0');
}, PHP_INT_MAX);


/**w
 * Setup Child Theme Palettes
 *
 * @param string $palettes registered palette json.
 *
 * @return string
 */
function bef_change_palette_defaults($palettes)
{
    $palettes = '{"palette":[{"color":"#2B6CB0","slug":"palette1","name":"Palette Color 1"},{"color":"#215387","slug":"palette2","name":"Palette Color 2"},{"color":"#1A202C","slug":"palette3","name":"Palette Color 3"},{"color":"#2D3748","slug":"palette4","name":"Palette Color 4"},{"color":"#4A5568","slug":"palette5","name":"Palette Color 5"},{"color":"#718096","slug":"palette6","name":"Palette Color 6"},{"color":"#EDF2F7","slug":"palette7","name":"Palette Color 7"},{"color":"#F7FAFC","slug":"palette8","name":"Palette Color 8"},{"color":"#ffffff","slug":"palette9","name":"Palette Color 9"}],"second-palette":[{"color":"#2B6CB0","slug":"palette1","name":"Palette Color 1"},{"color":"#215387","slug":"palette2","name":"Palette Color 2"},{"color":"#1A202C","slug":"palette3","name":"Palette Color 3"},{"color":"#2D3748","slug":"palette4","name":"Palette Color 4"},{"color":"#4A5568","slug":"palette5","name":"Palette Color 5"},{"color":"#718096","slug":"palette6","name":"Palette Color 6"},{"color":"#EDF2F7","slug":"palette7","name":"Palette Color 7"},{"color":"#F7FAFC","slug":"palette8","name":"Palette Color 8"},{"color":"#ffffff","slug":"palette9","name":"Palette Color 9"}],"third-palette":[{"color":"#2B6CB0","slug":"palette1","name":"Palette Color 1"},{"color":"#215387","slug":"palette2","name":"Palette Color 2"},{"color":"#1A202C","slug":"palette3","name":"Palette Color 3"},{"color":"#2D3748","slug":"palette4","name":"Palette Color 4"},{"color":"#4A5568","slug":"palette5","name":"Palette Color 5"},{"color":"#718096","slug":"palette6","name":"Palette Color 6"},{"color":"#EDF2F7","slug":"palette7","name":"Palette Color 7"},{"color":"#F7FAFC","slug":"palette8","name":"Palette Color 8"},{"color":"#ffffff","slug":"palette9","name":"Palette Color 9"}],"active":"palette"}';

    return $palettes;
}

add_filter('kadence_global_palette_defaults', 'bef_change_palette_defaults', 20);

/**
 * Setup Child Theme Defaults
 *
 * @param array $defaults registered option defaults with kadence theme.
 *
 * @return array
 */
function bef_change_option_defaults($defaults)
{
    $new_defaults = '{"custom_logo":201,"logo_layout":{"include":{"mobile":"","tablet":"","desktop":"logo_only"},"layout":{"mobile":"","tablet":"","desktop":"standard"},"flag":true},"header_html_wpautop":false,"header_top_height":{"size":{"mobile":"","tablet":"","desktop":39},"unit":{"mobile":"px","tablet":"px","desktop":"px"},"flag":true},"header_top_background":{"desktop":{"color":"palette7"},"flag":false},"header_desktop_items":{"top":{"top_left":["html"],"top_left_center":[],"top_center":[],"top_right_center":[],"top_right":["contact"]},"main":{"main_left":["logo"],"main_left_center":[],"main_center":[],"main_right_center":[],"main_right":["navigation"]},"bottom":{"bottom_left":[],"bottom_left_center":[],"bottom_center":[],"bottom_right_center":[],"bottom_right":[]},"flag":false},"header_html_content":"\u5e2e\u60a8\u5feb\u901f\u5f00\u59cb\u4e92\u8054\u7f51\u8425\u9500\u3002","header_html_typography":{"size":{"desktop":14},"lineHeight":{"desktop":""},"family":"inherit","google":false,"weight":"","variant":"","color":"palette5","sizeType":"px","lineType":"-","letterSpacing":{"desktop":""},"spacingType":"em","style":"normal","transform":"","fallback":"","flag":true},"header_main_bottom_border":{"desktop":{"width":1,"unit":"px","style":"solid","color":"palette7"},"flag":false},"header_main_height":{"size":{"mobile":"","tablet":"","desktop":110},"unit":{"mobile":"px","tablet":"px","desktop":"px"},"flag":true},"logo_width":{"size":{"mobile":"","tablet":"","desktop":215},"unit":{"mobile":"px","tablet":"px","desktop":"px"},"flag":true},"boxed_spacing":{"size":{"mobile":1.5,"tablet":2,"desktop":2},"unit":{"mobile":"rem","tablet":"rem","desktop":"rem"},"flag":false},"page_content_style":"unboxed","post_archive_title_align":{"mobile":"","tablet":"","desktop":"left","flag":false},"post_archive_content_style":"boxed","header_contact_items":{"items":[{"id":"phone","enabled":true,"source":"icon","url":"","imageid":"","width":24,"link":"","icon":"phoneAlt2","label":"+86 15638895393"},{"id":"email","enabled":true,"source":"icon","url":"","imageid":"","width":24,"link":"","icon":"emailAlt","label":"amos@wpcio.com"}],"flag":true},"header_contact_color":{"color":"palette5","hover":""},"footer_items":{"top":{"top_1":[],"top_2":[],"top_3":[],"top_4":[],"top_5":[]},"middle":{"middle_1":["footer-widget1"],"middle_2":["footer-widget2"],"middle_3":["footer-widget3"],"middle_4":[],"middle_5":[]},"bottom":{"bottom_1":["footer-html"],"bottom_2":[],"bottom_3":[],"bottom_4":[],"bottom_5":[]},"flag":true},"footer_bottom_widget_title":{"size":{"desktop":""},"lineHeight":{"desktop":""},"family":"inherit","google":false,"weight":"","variant":"","color":"palette9","sizeType":"px","lineType":"-","letterSpacing":{"desktop":""},"spacingType":"em","style":"normal","transform":"","fallback":"","flag":true},"footer_bottom_widget_content":{"size":{"desktop":""},"lineHeight":{"desktop":""},"family":"inherit","google":false,"weight":"","variant":"","color":"palette9","sizeType":"px","lineType":"-","letterSpacing":{"desktop":""},"spacingType":"em","style":"normal","transform":"","fallback":"","flag":true},"footer_bottom_link_colors":{"color":"palette9","hover":"palette8"},"footer_middle_column_spacing":{"size":{"mobile":"","tablet":"","desktop":32},"unit":{"mobile":"px","tablet":"px","desktop":"px"},"flag":false},"footer_middle_widget_spacing":{"size":{"mobile":"","tablet":"","desktop":32},"unit":{"mobile":"px","tablet":"px","desktop":"px"},"flag":false},"footer_middle_top_spacing":{"size":{"mobile":"","tablet":"","desktop":32},"unit":{"mobile":"px","tablet":"px","desktop":"px"},"flag":false},"footer_middle_bottom_spacing":{"size":{"mobile":"","tablet":"","desktop":32},"unit":{"mobile":"px","tablet":"px","desktop":"px"},"flag":false},"footer_middle_widget_title":{"size":{"desktop":""},"lineHeight":{"desktop":""},"family":"inherit","google":false,"weight":"","variant":"","color":"palette9","sizeType":"px","lineType":"-","letterSpacing":{"desktop":""},"spacingType":"em","style":"normal","transform":"","fallback":"","flag":true},"footer_middle_widget_content":{"size":{"desktop":""},"lineHeight":{"desktop":""},"family":"inherit","google":false,"weight":"","variant":"","color":"palette9","sizeType":"px","lineType":"-","letterSpacing":{"desktop":""},"spacingType":"em","style":"normal","transform":"","fallback":"","flag":true},"footer_middle_link_colors":{"color":"palette9","hover":"palette8"},"footer_middle_background":{"desktop":{"color":"palette4"},"flag":true},"footer_html_margin":{"size":[0,0,0,0],"unit":"px","locked":false,"flag":true},"footer_bottom_top_spacing":{"size":{"mobile":"","tablet":"","desktop":16},"unit":{"mobile":"px","tablet":"px","desktop":"px"},"flag":true},"footer_bottom_bottom_spacing":{"size":{"mobile":"","tablet":"","desktop":16},"unit":{"mobile":"px","tablet":"px","desktop":"px"},"flag":false},"footer_bottom_background":{"desktop":{"color":"#262f40"},"flag":false},"footer_html_content":"{copyright} {year} {site-title}","load_fonts_local":true,"enable_preload":true}';
    $new_defaults = json_decode($new_defaults, true);

    return wp_parse_args($new_defaults, $defaults);
}

add_filter('kadence_theme_options_defaults', 'bef_change_option_defaults', 20);


add_shortcode('bef_sub_sites', function ()
{
    $sites = get_sites();
    unset($sites[ 0 ]);

    ob_start();
    foreach ($sites as $site) {
        get_template_part('parts/site', '', ['site' => $site]);
    }

    return ob_get_clean();
});


