import Colaborador from '../Colaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.5')}}>
            <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} type='color' className='input-cor'/>
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador
                    corDeFundo={time.cor}
                    key={colaborador.nome}
                    id={colaborador.id} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    aoDeletar={aoDeletar}
                />)}
            </div>
        </section>
    )
}

export default Time;
