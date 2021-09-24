import { useEffect, useState } from 'react';

export default function useQuestions(): Return {
   const [questions, setQuestions] = useState<Question[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error>();

   useEffect(() => {
      fetch(process.env.REACT_APP_API_URL as string)
         .then(response => response.json())
         .then(data => {
            setQuestions(data.results.map((q: Record<string, any>) => (
               {
                  ...q,
                  correct_answer: q.correct_answer === 'True',
                  incorrect_answers: q.incorrect_answers.map((ia: string) => ia === 'True')
               }))
            );
            setLoading(false);
         })
         .catch(error => {
            setError(error);
            setLoading(false);
         });
   }, []);

   return {questions, loading, error};
}

interface Return {
   questions: Question[];
   loading: boolean;
   error: Error | undefined;
}

export interface Question {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: boolean,
    incorrect_answers: boolean[]
}