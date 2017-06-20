<?php
/**
 * Copyright © 2015 PlazaThemes.com. All rights reserved.

 * @author PlazaThemes Team <contact@plazathemes.com>
 */

namespace Plazathemes\Producttab\Model\Config\Source;

/**
 * Used in creating options for commetns config value selection
 *
 */
class ProductType implements \Magento\Framework\Option\ArrayInterface
{
    /**
     * Options getter
     *
     * @return array
     */
    public function toOptionArray()
    {
        return [
            ['value' => 0, 'label' => __('New Products')],
            ['value' => 1, 'label' => __('OnSale')],
            ['value' => 2, 'label' => __('Feature Products')],
            ['value' => 3, 'label' => __('Random Products')],
            ['value' => 4, 'label' => __('Most View Products')],
        ];
    }

    /**
     * Get options in "key-value" format
     *
     * @return array
     */
    public function toArray()
    {
        $array = [];
        foreach($this->toOptionArray() as $item) {
            $array[$item['value']] = $item['label'];
        }
        return $array;
    }
}
