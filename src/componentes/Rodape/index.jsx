import styled from 'styled-components';

const RodapeEstilizado = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #04244f;
	color: white;
	height: 80px;
	padding-left: 30px;
	padding-right: 30px;
    margin-top: 24px;

	.redes {
		display: flex;
		gap: 32px;
		justify-content: center;
		align-items: center;
		a {
			text-decoration: none;
			display: flex;
		}
	}

	.autor {
		/* Estilos para a seção do autor */
	}
`;

const Rodape = () => {
	return (
		<RodapeEstilizado>
			<div className="redes">
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
					<img src="/imagens/sociais/facebook.svg" alt="Facebook" width="24" height="24" />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
					<img src="/imagens/sociais/instagram.svg" alt="Instagram" width="24" height="24" />
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
					<img src="/imagens/sociais/twitter.svg" alt="Twitter" width="24" height="24" />
				</a>
			</div>
			<div className="autor">Desenvolvido por Pedro Mota</div>
		</RodapeEstilizado>
	);
};

export default Rodape;
