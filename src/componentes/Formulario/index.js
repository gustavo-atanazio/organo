import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrar({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    valor={nome} 
                    aoAlterar={valor => setNome(valor)} 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                />
                <CampoTexto
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)} 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                />
                <CampoTexto
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                />
                <ListaSuspensa
                    valor={time}
                    aoAlterar={valor => setTime(valor)} 
                    obrigatorio={true} 
                    label='Times' 
                    itens={props.times}
                />
                <Botao>Criar card</Botao>
            </form>

            <form onSubmit={evento => {
                evento.preventDefault();
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto 
                    valor={nomeTime} 
                    aoAlterar={valor => setNomeTime(valor)} 
                    obrigatorio 
                    label='Nome' 
                    placeholder='Digite o nome do time'
                />
                <CampoTexto
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)} 
                    obrigatorio 
                    label='Cor' 
                    placeholder='Digite a cor do time'
                />
                <Botao>Criar novo time</Botao>
            </form>
        </section>
    )
}

export default Formulario;
