'use client';
import { useState } from 'react';
import S from './styles.module.css';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <p className={S.label}>Search</p>
      <input
        className={S.input}
        id='search'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </div>
  );
}
