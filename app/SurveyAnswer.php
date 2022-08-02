<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SurveyAnswer extends Model
{
    public const CREATED_AT = null;
    public const UPDATED_AT = null;

    protected $fillable = ['survey_id', 'start_date', 'end_date'];

    public function survey()
    {
        return $this->belongsTo(Survey::class);
    }
}
