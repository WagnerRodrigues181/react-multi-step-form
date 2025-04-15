import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

type ThanksProps = {
  data: {
    name: string;
    review: string;
    comment: string;
  };
};

type emojiObject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  very_satisfied: ReactElement;
};

const emojiData: emojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

import "./Thanks.css";
import { ReactElement } from "react";

const Thanks = ({ data }: ThanksProps) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, e em breve você receberá um cupom de
        10% de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação, clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação, {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação em relação ao produto:</span>
        {emojiData[data.review as keyof typeof emojiData]}{" "}
        {/*Nestre trecho, estou dizendo que texto dele (data.review) será uma das chaves do emojiData.*/}
      </p>
      <p className="review-data">
        <span>Comentário:</span> {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
