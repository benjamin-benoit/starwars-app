import * as S from './layout';

interface Props {
  name: string;
}

const PersonCard = ({ name }: Props) => {
  return <S.Container>{name}</S.Container>;
};

export default PersonCard;
