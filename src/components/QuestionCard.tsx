import React from 'react';
import {AnswerObject} from '../App';

type Props = { //이름이 Props일 필요는 없다.
    question: string;
    answers: string[];
    callback: any;
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
    <div>
        <p className="number">
            Question:{questionNr} / {totalQuestions}
        </p>
        {/* dangerouslySetInnerHTML은 브라우저 DOM에서 innerHTML을 사용하기 위한 React의 대체 방법입니다. 일반적으로 코드에서 HTML을 설정하는 것은 사이트 간 스크립팅 공격에 쉽게 노출될 수 있기 때문에 위험합니다. 따라서 React에서 직접 HTML을 설정할 수는 있지만, 위험하다는 것을 상기시키기 위해 dangerouslySetInnerHTML을 작성하고 __html 키로 객체를 전달해야 합니다.  */}
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;