import { styled } from 'styled-components';
import Titulo from '../Titulo';
import Tags from './Tags';
import Populares from './Populares';
import Imagem from './Imagem';

const GaleriaContainer = styled.div`
	display: flex;
	gap: 24px;
`;

const SecaoFluida = styled.section`
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const ImagensContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	margin-right: 24px;

	flex-grow: 0;
`;
const PopularesContainer = styled.section`
	display: flex;
	flex-direction: column;

	flex-grow: 1;
	padding: 0;
`;

const VerMais = styled.button`
	background-color: transparent;
	color: #fff;
	border: 3px solid;
	border-color: #c98cf1;
	padding: 12px 20px;
	font-size: 20px;
	border-radius: 10px;
	cursor: pointer;
	width: 100%;
	margin-top: 16px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, fotosPopulares = [], aoAlternarFavorito, setTag }) => {
	return (
		<>
			<Tags setTag={setTag} />
			<GaleriaContainer>
				<SecaoFluida>
					<div>
						<Titulo>Navegue pela galeria</Titulo>
						<ImagensContainer>
							{fotos.map((foto) => (
								<Imagem aoZoomSolicitado={aoFotoSelecionada} key={foto.id} foto={foto} aoAlternarFavorito={aoAlternarFavorito} />
							))}
						</ImagensContainer>
					</div>
					<PopularesContainer>
						<Titulo $alinhamento="center">Populares</Titulo>
						<div>
							{fotosPopulares.map((fotoPopular) => (
								<Populares key={fotoPopular.id} fotoPopular={fotoPopular} />
							))}
							<VerMais>Ver Mais</VerMais>
						</div>
					</PopularesContainer>
				</SecaoFluida>
			</GaleriaContainer>
		</>
	);
};

export default Galeria;
