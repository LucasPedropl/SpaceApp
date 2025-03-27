import {styled} from 'styled-components'
import CampoTexto from '../CampoTexto'

const HeaderEstilizado = styled.header`
	padding: 30px;
	display: flex;
	justify-content: space-between;
	img {
		max-width: 212px;
	}
`;

const Cabecalho = () => {
    return(<HeaderEstilizado>
        <img src="/img/logo.png" alt="" />
        <CampoTexto/>
    </HeaderEstilizado>)
}

export default Cabecalho;