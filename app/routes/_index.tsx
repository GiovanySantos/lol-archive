import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { ChampionsTable } from '~/components/champions-table';
import type { Champion } from '~/global/types';

export const loader = async () => {
  const championsResponseData: Champion[] = [];
  const jsonData = json({ championsResponseData });
  console.log(jsonData);

  return championsResponseData;
};

export const meta: MetaFunction = () => {
  return [
    { title: 'League of Legends Champion Archive' },
    {
      name: 'description',
      content:
        'Welcome to my experiment of remix with a lol champion data example',
    },
  ];
};

export default function Index() {
  const champions: Champion[] = useLoaderData<typeof loader>();
  return (
    <div>
      <ChampionsTable champions={champions} />
    </div>
  );
}
