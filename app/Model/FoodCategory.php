<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FoodCategory extends Model
{
    protected $casts=[
        'location_id'=>'array'
    ];

}
