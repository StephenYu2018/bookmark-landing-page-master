import { useState } from "react";
import ArrowIcon from "./ArrowIcon";

class QuestionAnswerDictionary {
  public question: string;
  public answer: string;

  constructor(question: string, answer: string) {
    this.question = question;
    this.answer = answer;
  }
}

const answeredQuestions: QuestionAnswerDictionary[] = [
  new QuestionAnswerDictionary(
    'What is Bookmark?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt' + 
      'justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare' +
      ' mattis.'
  ),
  new QuestionAnswerDictionary(
    'How can I request a new browser?',
    'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ' +
      'ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros ' +
      'aliquet convallis ultricies. Mauris augue massa, ultricies non' +
      'ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis' +
      'ultricies. Mauris augue massa, ultricies non ligula. Suspendisse ' +
      'imperdiet.'
  ),
  new QuestionAnswerDictionary(
    'Is there a mobile app?',
    'Sed consectetur quam id neque fermentum accumsan. Praesent luctus' +
      'vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula' +
      'quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin' +
      'ex et ultricies bibendum.'
  ),
  new QuestionAnswerDictionary(
    'What about other Chromium browsers?',
    'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat' +
      'mi, at euismod dui. Aliquam vitae neque eget nisl gravida' +
      'pellentesque non ut velit.'
  ),
];

export default function AnsweredQuestions() {
  const [shownAnswerIndex, setShownAnswerIndex] = useState(-1);

  function isAnswerShown(questionIndex: number) {
    return questionIndex === shownAnswerIndex;
  }

  return (
    <ul className="flex flex-col items-center md:mt-[3.625rem]">
      {answeredQuestions.map((dict, index) =>
        <li key={dict.question}
          className="border-b border-b-grayish-blue/25 md:first:border-t
            md:first:border-t-grayish-blue/25 w-full min-[604px]:w-[33.75rem]"
          onClick={isAnswerShown(index) ?
            () => setShownAnswerIndex(-1) :
            () => setShownAnswerIndex(index)}
        >
          <p
            className={`font-rubik font-normal text-[0.9375rem]/[1.667]
              text-very-dark-blue hover:text-soft-red/90 pt-5 flex flex-row
              justify-between items-center
              ${isAnswerShown(index) ? 'pb-7' : 'pb-5'}`}
          >
            {dict.question}
            <ArrowIcon styles={isAnswerShown(index) ?
              { svg: 'rotate-180', stroke: 'stroke-soft-red/90' } :
              { svg: '', stroke: '' }}
            />
          </p>
          <p
            className={`font-rubik font-normal text-[0.9375rem]/[1.667] 
            text-very-dark-blue/[0.7] pb-5
            ${isAnswerShown(index) ? 'block' : 'hidden'}`}
          >  
            {dict.answer}
          </p>
        </li>
      )}
    </ul>
  );
}