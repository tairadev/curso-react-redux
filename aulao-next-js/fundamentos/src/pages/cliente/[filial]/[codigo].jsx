import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ClienteProCodigo() {
  const router = useRouter();

  return (
    <Layout titulo='Navegação dinâmica'>
      <p>Filial: {router.query.filial}</p>
      <p>Código: {router.query.codigo}</p>
    </Layout>
  );
}
