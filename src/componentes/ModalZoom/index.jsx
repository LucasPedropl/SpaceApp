import styled from 'styled-components';
import Imagem from '../Galeria/Imagem';

const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

const DialogEstilizado = styled.dialog`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border: 0px;
	padding: 0px;
	width: 40%;
	background-color: transparent;
`;

const BotaoFechar = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	color: white;
	font-size: 2rem;
	cursor: pointer;
`;

const ModalZoom = ({ foto, onClose }) => {
	return (
		<>
			{foto && (
				<>
					<Overlay onClick={onClose} />
					<DialogEstilizado open={!!foto}>
						<BotaoFechar type="button" onClick={onClose}>
							x
						</BotaoFechar>
						<Imagem foto={foto} expandida={true} />
					</DialogEstilizado>
				</>
			)}
		</>
	);
};

export default ModalZoom;
