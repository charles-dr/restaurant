<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FoodMenu extends Model
{
    protected $casts=[
        'location_ids'=>'array'
    ];
}
