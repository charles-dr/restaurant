<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $casts=[
        'order_content'=>'array'

    ];
}
