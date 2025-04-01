import { styled } from 'styled-components';
import EstilosGlobais from './componentes/EstilosGlobais';
import Cabecalho from './componentes/Cabecalho';
import BarraLateral from './componentes/BarraLateral';
import Banner from './componentes/Banner';
import bannerBackground from './assets/banner.png';
import Galeria from './componentes/Galeria';
import FotosPopulares from './populares.json';
import fotos from './fotos.json';
import { useState, useEffect } from 'react';
import ModalZoom from './componentes/ModalZoom';
import Populares from './componentes/Galeria/Populares';
import Rodape from './componentes/Rodape';

const FundoGradiente = styled.div`
	background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
	width: 100%;
	min-height: 100vh;
`;

const AppContainer = styled.div`
	width: 1440px;
	margin: 0 auto;
	max-width: 100%;
`;

const MainContainer = styled.main`
	display: flex;
	gap: 24px;
`;

const ConteudoGaleria = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const App = () => {
	const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
	const [fotoSelecionada, setFotoSelecionada] = useState(null);
	const [fotosPopulares] = useState(FotosPopulares);
	const [filtro, setFiltro] = useState('');
	const [tag, setTag] = useState(0);
	const aoAlternarFavorito = (foto) => {
		if (foto.id === fotoSelecionada?.id) {
			setFotoSelecionada({
				...fotoSelecionada,
				favorita: !fotoSelecionada.favorita,
			});
		}
		setFotosDaGaleria(
			fotosDaGaleria.map((fotosDaGaleria) => {
				return {
					...fotosDaGaleria,
					favorita: fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita,
				};
			})
		);
	};
	const fecharModal = () => setFotoSelecionada(null);
	useEffect(() => {
		const fotosFiltradas = fotos.filter((foto) => {
			const filtrPorTag = !tag || foto.tagId === tag;
			const filtroPorTitulo = !filtro || (typeof foto.titulo === 'string' && foto.titulo.toLowerCase().includes(filtro.toLowerCase()));
			return filtrPorTag && filtroPorTitulo;
		});
		setFotosDaGaleria(fotosFiltradas);
	}, [filtro, tag]);

	return (
		<FundoGradiente>
			<EstilosGlobais />
			<AppContainer>
				<Cabecalho filtro={filtro} setFiltro={setFiltro} />
				<MainContainer>
					<BarraLateral />
					<ConteudoGaleria>
						<Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage={bannerBackground} />
						<Galeria aoFotoSelecionada={(foto) => setFotoSelecionada(foto)} fotos={fotosDaGaleria} fotosPopulares={fotosPopulares} aoAlternarFavorito={aoAlternarFavorito} setTag={setTag} />

						<Populares />
					</ConteudoGaleria>
				</MainContainer>
			</AppContainer>
			<ModalZoom foto={fotoSelecionada} onClose={fecharModal} aoAlternarFavorito={aoAlternarFavorito} />
			<Rodape />
		</FundoGradiente>
	);
};

export default App;
