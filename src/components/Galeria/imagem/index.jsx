import styled from 'styled-components'
import fotos from './fotos.json'

const Container = styled.div`
    display: flex;
    flex-direction: wrap;
    gap: 20px;
`
const FigureStyle = styled.figure``
const ImgGaleria = styled.img``
const FigcaptionGaleria = styled.figcaption``
const TituloGaleria = styled.h3``
const FooterGaleria = styled.footer``
const FonteGaleria = styled.p``
const ButtonFavoritos = styled.button``
const ButtonExpandira = styled.button``

const Imagem = () => {
    
    return (
		<Container>
			{fotos.map((foto) => (
				<FigureStyle key={foto.id}>
					<ImgGaleria src={foto.path} alt="" />
					<FigcaptionGaleria>
						<TituloGaleria>{foto.titulo}</TituloGaleria>
						<FooterGaleria>
							<FonteGaleria>{foto.fonte}</FonteGaleria>
							<ButtonFavoritos>Favorito</ButtonFavoritos>
							<ButtonExpandira>Expandir</ButtonExpandira>
						</FooterGaleria>
					</FigcaptionGaleria>
				</FigureStyle>
			))}
		</Container>
    );
}

export default Imagem;