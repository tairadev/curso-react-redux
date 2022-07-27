import Link from 'next/link';
import Navegador from '../components/Navegador';

export default function Inicio() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh'
      }}>
      <Navegador destino='/estiloso' texto='Estiloso' />
      <Navegador destino='/exemplo' texto='Exemplo' cor='#9400d3' />
      <Navegador destino='/jsx' texto='JSX' cor='crimson' />
      <Navegador destino='/navegacao' texto='Navegação #01' cor='green' />
      <Navegador destino='/cliente/SP/123' texto='Navegação #02' cor='blue' />
      <Navegador destino='/estado' texto='Componente com estado' cor='red' />
      <Navegador
        destino='/integracao1'
        texto='Integração com API #01'
        cor='purple'
      />
    </div>
  );
}
