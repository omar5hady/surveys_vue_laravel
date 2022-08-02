<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SurveyQuestionAnswer extends Model
{
    protected $fillable = ['survey_question_id', 'survey_answer_id', 'answer'];
}
