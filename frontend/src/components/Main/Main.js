import S from './styles.module.css';
import Card from '../Card';
import Search from '../Search';

export default function Main() {
  return (
    <main className={S.main}>
      <div className={S.search}>
        <Search />
      </div>
      <div>
        <Card />
      </div>
    </main>
  );
}
