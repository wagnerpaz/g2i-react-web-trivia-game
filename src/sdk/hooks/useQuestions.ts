import { useEffect, useState } from 'react';

export default function useQuestions(): Return {
   const [questions, setQuestions] = useState<Question[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      console.log(process.env.REACT_APP_API_URL);
      fetch(process.env.REACT_APP_API_URL as string)
         .then(response => response.json())
         .then(data => {
            console.log(data.results);
            setQuestions(data.results);
            setLoading(false);
         })
         .catch(error => {
            setLoading(false);
         });
   }, []);

   return {questions, loading};
}

interface Return {
   questions: Question[];
   loading: boolean;
}

export interface Question {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: boolean,
    incorrect_answers: boolean[]
}