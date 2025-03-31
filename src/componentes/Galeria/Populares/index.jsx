import Titulo from '../../Titulo';
import { styled } from 'styled-components';

const Figure = styled.figure`
	max-width: 100%;
	margin: 0;
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
	cursor: pointer;
	img {
		border-radius: 10px;
	}
`;




const Populares = ({ fotoPopular }) => {
	if (!fotoPopular) {
		return null; 
	}

	return (
		<>
			<Figure id={`foto-${fotoPopular.id}`}>
				<img src={fotoPopular.path} alt={fotoPopular.alt} />
			</Figure>
            
		</>
	);
};

export default Populares;
