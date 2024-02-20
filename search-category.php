<?php 

/*
    Plugin Name: HSG Search Category
    Plugin URI: https://www.archenia.com/
    Description: Beta versión
    Version: 1.2.0
    Author: nikocrow - nicolás castro
    Author: https://www.archenia.com/
    Text Domain: homeserviceguide.pro
*/

if(!defined('ABSPATH')) die();
// REGISTER API STYLES  
function search_categories_styles(){
    wp_enqueue_style('search_category_styles', plugins_url('search-category.css',__FILE__));
}
add_action('wp_enqueue_scripts','search_categories_styles');

// shows conection from API on wordpress backend
function search_category_admin(){
    echo '<h1>API CONTROL PANEL</h1>';
    echo '<h3 style="color:red;">please use this shortcute: [search-category] </h3>';
}

//FUNCTIONLALITY
function search_categories() {
 ?>

 <div class="dropdown-container">
        <div class='search-boxSB'>
            <input type='text' class="search-input" style=" background-image: url('<?php echo plugin_dir_url( __FILE__ ).'/icons/search-categories-icon.svg'?>');
             background-repeat:no-repeat; background-size: 3.5rem; background-position:center left;"
             name='categories'  id='search-categories-input'  placeholder='Type here the service you need' autocomplete='off'>
                <div class='autocom-boxSB' id="search-autocomplete-list">
                    <!-- here list are inserted from javascript -->
                </div>
        </div>
    </div>

<?php wp_enqueue_script('search-behaviour', plugin_dir_url( __FILE__ )  . '/js/search-categories-app.js', array(), '1.0.0', true);
      wp_enqueue_script('auto-complete-categories', plugin_dir_url( __FILE__ )  . '/js/autocomplete-categories.js', array(), '1.0.0', true);
    
}

add_shortcode( 'search-category', 'search_categories');






/**
 * Register a custom menu page to view the information queried.
 */
function search_launch() {
	add_menu_page(
        'HSG Search Category',
        'manage_options',
        'HSG',
        'search_category_admin',
        'dashicons-admin-links',
         19,
	);
}


add_action( 'admin_menu', 'search_launch' );