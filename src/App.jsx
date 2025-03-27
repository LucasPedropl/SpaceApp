import styled from 'styled-components';
import EstiloGlobais from './components/EstilosGlobais';
import Cabecalho from './components/Cabecalho';
import BarraLateral from './components/BarraLateral';
import Banner from './components/Banner';
import bannerBackground from './assets/banner.png';
import Galeria from './components/Galeria';

const FundoGradiente = styled.div`
	background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
	width: 100%;
	min-height: 100vh;
`;

const AppContainer = styled.div`
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;

    padding-right: 30px;
`

const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const App = () => {
	return (
		<>
			<FundoGradiente>
				<EstiloGlobais />
				<AppContainer>
					<Cabecalho />
					<MainContainer>
						<BarraLateral />
						<ConteudoGaleria>
							<Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage={bannerBackground} />
							<Galeria/>
						</ConteudoGaleria>
					</MainContainer>
				</AppContainer>
			</FundoGradiente>
		</>
	);
}

export default App;
