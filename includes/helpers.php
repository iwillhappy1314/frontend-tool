<?php

function bef_get_assets_url(string $path, string $manifest_directory = 'frontend'): string
{
    static $manifest;
    static $manifest_path;

    if ( ! $manifest_path) {
        $manifest_path = get_theme_file_path($manifest_directory . '/mix-manifest.json');
    }

    // Bailout if manifest could not be found
    if ( ! file_exists($manifest_path)) {
        return get_theme_file_uri($path);
    }

    if ( ! $manifest) {
        // @codingStandardsIgnoreLine
        $manifest = json_decode(file_get_contents($manifest_path), true);
    }

    // Remove manifest directory from path
    $path = str_replace($manifest_directory, '', $path);
    // Make sure there’s a leading slash
    $path = '/' . ltrim($path, '/');

    // Bailout with default theme path if file could not be found in manifest
    if ( ! array_key_exists($path, $manifest)) {
        return get_theme_file_uri($path);
    }

    // Get file URL from manifest file
    $path = $manifest[ $path ];
    // Make sure there’s no leading slash
    $path = ltrim($path, '/');

    return get_theme_file_uri(trailingslashit($manifest_directory) . $path);
}


/**
 * 获取指定值的默认值
 *
 * @param mixed $value
 *
 * @return mixed
 */
function bef_value($value)
{
    return $value instanceof \Closure ? $value() : $value;
}


/**
 * 使用点注释获取数据
 *
 * @param array  $array
 * @param string $key
 * @param mixed  $default
 *
 * @return mixed
 */
function bef_data_get($array, $key, $default = null)
{
    if (is_null($key)) {
        return $array;
    }

    if (isset($array[ $key ])) {
        return $array[ $key ];
    }

    foreach (explode('.', $key) as $segment) {
        if ( ! is_array($array) || ! array_key_exists($segment, $array)) {
            return bef_value($default);
        }

        $array = $array[ $segment ];
    }

    return $array;
}
