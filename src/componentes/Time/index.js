import Colaborador from '../Colaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.5')}}>
            <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.nome)} type='color' className='input-cor'/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    corDeFundo={props.cor}
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    aoDeletar={props.aoDeletar}
                />)}
            </div>
        </section>
    )
}

export default Time;
