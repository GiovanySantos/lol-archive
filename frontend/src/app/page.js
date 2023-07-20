import styles from './page.module.css';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main id='1' />
      <Main id='2' />
      <Main id='3' />
      <Footer />
    </div>
  );
}
