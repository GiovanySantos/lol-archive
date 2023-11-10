import type { Champion } from '~/global/types';

interface IProps {
  champions: Champion[];
}

export const ChampionsTable = ({ champions }: IProps) => {
  return (
    <div>
      {champions.map((champion: Champion, index: number) => {
        return <div key={index}>{champion.name}</div>;
      })}
    </div>
  );
};
