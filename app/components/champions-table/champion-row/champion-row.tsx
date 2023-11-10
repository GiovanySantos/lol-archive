import type { Champion } from '~/global/types';

interface IProps {
  champion: Champion;
}

export const ChampionRow = ({ champion }: IProps) => {
  return (
    <div>
      <p>{champion.name}</p>
    </div>
  );
};
