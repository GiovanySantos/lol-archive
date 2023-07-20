'use client';
import S from './styles.module.css';

export default function Main({ id }) {
  return (
    <main className={S.main}>
      <p>Search</p>
      <button onClick={() => console.log(id)}>
        Selecionar Personagem {id}
      </button>
    </main>
  );
}
