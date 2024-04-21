<?php

if (!defined("ABSPATH")) die;

/**
 * Plugin Name: Villasia Dashboard
 * Description: Villasia Dashboard plugin.
 * Version:     1.0
 * Text Domain: villasia-dashboard
 * Domain Path: /languages
 */


if (!class_exists('VillasiaDashboard')) {
    final class VillasiaDashboard
    {
        function __construct()
        {
            $this->defines();
            $this->hooks();
        }

        private function defines()
        {
            define('VILLASIADASHBOARD_PLUGIN_PATH', plugin_dir_path(__FILE__));
            define('VILLASIADASHBOARD_PLUGIN_URL', plugin_dir_url(__FILE__));
            define('VILLASIADASHBOARD_DASHBOARD_SLUG', 'villasia-dashboard');
        }

        private function hooks()
        {
            add_action('admin_menu', [$this, 'add_page']);
            add_action('admin_enqueue_scripts', [$this, 'styles']);
        }

        public function add_page()
        {
            add_menu_page(
                'Villasia Dashboard',
                'Villasia Dashboard',
                'manage_options',
                VILLASIADASHBOARD_DASHBOARD_SLUG,
                function () {
                    echo '<div id="root">asd</div>';
                }
            );
        }

        public function styles()
        {
            $screen = get_current_screen();

            if ('toplevel_page_' . VILLASIADASHBOARD_DASHBOARD_SLUG === $screen->base) {
                global $wp_styles;
                if ($wp_styles instanceof WP_Styles) {
                    $wp_styles->queue = array();
                }

                wp_enqueue_style('villasia-dashboard-wpreset', VILLASIADASHBOARD_PLUGIN_URL . '/wpreset.css');
            }
        }
    }

    $VillasiaDashboard = new VillasiaDashboard();
}
