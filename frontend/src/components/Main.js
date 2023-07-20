'use client';

export default function Main({ id }) {
  return (
    <main>
      <p>Search</p>
      <button onClick={() => console.log(id)}>
        Selecionar Personagem {id}
      </button>
    </main>
  );
}
