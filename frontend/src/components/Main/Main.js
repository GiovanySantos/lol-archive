'use client';
import { useState } from 'react';
import S from './styles.module.css';

export default function Main() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <main className={S.main}>
      <div className={S.search}>
        <p>Search</p>
        <input
          id='search'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
    </main>
  );
}
