Drupal Leaflet Permalink
========================

Integrates the permalink control plugin ([shramov/leaflet-plugins](https://github.com/shramov/leaflet-plugins)) with the Drupal leaflet module. 

Usage
-----

Add the `$map_definition[plugins][permalink]` key to your map definition, and set the value to either `TRUE` for default options on an array of settings to be passed to the constructor of the javascript plugin.

    function MYMODULE_leaflet_map_info() {
      return array(
        'Map Name' => array(
          'label' => 'Some Label',
          'description' => t('Some Description'),
          'settings' => array(
            // ...
          ),
          'layers' => array(
            // ...
          ),
          'plugins' => array(
            'permalink' => array(
              'position' => 'bottomleft',
              'useAnchor' => TRUE,
              'useLocation' => FALSE,
              'text' => 'Permalink',
            ),
          )
        ),
      );
    }
