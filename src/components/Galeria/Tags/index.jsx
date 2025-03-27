import styled from 'styled-components';
import tags from './tags.json';

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 15px;
`;
const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 20px;
	gap: 30px;
`;

const TagButonEstilizado = styled.button`
	font-size: 24px;
	color: #ffffff;
	background: rgba(217, 217, 217, 0.3);
	border-radius: 10px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	padding: 12px;
	box-sizing: border-box;
	border: 2px solid transparent;
	&:hover {
		border-color: #c98cf1;
	}
`;

const TituloEstilizado = styled.h3`
	color: #d9d9d9;
	font-size: 24px;
	margin: 0;
`;

const Tags = () => {
	return (
		<Container>
			<TituloEstilizado>Busque por tags:</TituloEstilizado>
			<ButtonsContainer>
				{tags.map((tag) => (
					<TagButonEstilizado key={tag.id}>{tag.titulo}</TagButonEstilizado>
				))}
			</ButtonsContainer>
		</Container>
	);
};

export default Tags;
