import React from 'react';
import {AnswerObject} from '../App';
import {Wrapper, ButtonWrapper} from './QuestionCard.styles';

type Props = { //이름이 Props일 필요는 없다.
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ // Specifing props
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
    }) => (
    <Wrapper>
        <p className="number">
            Question:{questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
        {answers.map((answer) => (
            <ButtonWrapper 
                key={answer}
                correct={userAnswer?.correctAnswer === answer}
                // optinal chaining
                userClicked={userAnswer?.answer === answer}
            >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
            </ButtonWrapper>
        ))}
        </div>
    </Wrapper>
);

export default QuestionCard;