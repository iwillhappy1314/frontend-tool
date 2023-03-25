<?php

use Spatie\Browsershot\Browsershot;
use Spatie\Browsershot\Exceptions\CouldNotTakeBrowsershot;

class Bef_Screenshot_Job
{
    function __construct()
    {
        add_action('wprs_after_export_site', [$this, 'add_job'], 10);
        add_action('bef_generate_screenshot', [$this, 'do_job']);
    }

    /**
     * 添加客户时，添加任务计划
     *
     * @param $site_id
     */
    function add_job($site_id): void
    {
        wp_schedule_event(current_time('timestamp'), 'daily', 'bef_generate_screenshot', ['site_id' => $site_id]);
    }


    /**
     * 执行任务计划
     *
     * @param $site_id
     */
    function do_job($site_id): void
    {
        $site     = get_site($site_id);
        $site_url = "https://" . $site->domain . $site->path;

        $save_path = trailingslashit(wp_upload_dir()[ 'basedir' ]) . 'screenshot/';
        if (is_dir($save_path)) {
            wp_mkdir_p($save_path);
        }

        try {
            Browsershot::url($site_url)->save($save_path);
        } catch (CouldNotTakeBrowsershot $e) {
            error_log(var_export($e->getMessage(), true));
        }
    }

}

