
"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import AddQuestionForm from './AddQuestionForm';

const AddQuestion = () => {
    const params = useParams();
    const { courseId, yearId, subjectId } = params;

    return (
        <div>
            <AddQuestionForm courseId={courseId} yearId={yearId} subjectId={subjectId} />
        </div>
    );
};

export default AddQuestion;
