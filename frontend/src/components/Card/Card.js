import S from './styles.module.css';

export default function Card() {
  return (
    <card className={S.card}>
      <div className={S.border}>
        <div className={S.image}>
          Imagem
          <p className={S.name}>Nome</p>
        </div>
      </div>
    </card>
  );
}
