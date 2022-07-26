import styles from '../styles/Estiloso.module.scss';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Estiloso() {
  return (
    <Layout titulo='Exemplo de CSS Modularizado'>
      <div className={styles.roxo}>
        <h1>Estiloso usando CSS módulos</h1>
      </div>
    </Layout>
  );
}
