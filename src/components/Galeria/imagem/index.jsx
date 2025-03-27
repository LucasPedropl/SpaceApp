import styled from 'styled-components'
import fotos from './fotos.json'

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

        {fotos.map((foto) => (
            <FigureStyle>
			<ImgGaleria src="" alt="" />
			<FigcaptionGaleria>
				<TituloGaleria>titulo</TituloGaleria>
				<FooterGaleria>
					<FonteGaleria>Fonte</FonteGaleria>
					<ButtonFavoritos>Favorito</ButtonFavoritos>
					<ButtonExpandira>Expandir</ButtonExpandira>
				</FooterGaleria>
			</FigcaptionGaleria>
		</FigureStyle>
        ))}

		
    );
}

export default Imagem;