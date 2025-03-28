import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from './Tags';
import Populares from './Populares';
import Imagens from './imagem';

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = () => {
    return (
		<>
			<Tags />
			<GaleriaContainer>
				<SecaoFluida>
					<Titulo>Navegue pela galeria</Titulo>
					<Imagens/>
				</SecaoFluida>
                <Populares/>
			</GaleriaContainer>
		</>
    );
}

export default Galeria;