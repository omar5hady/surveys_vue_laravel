<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SurveyQuestion extends Model
{
    protected $fillable = ['question', 'data', 'type', 'survey_id', 'description'];

    public function survey(){
        return $this->belongsTo(Survey::class);
    }
}
