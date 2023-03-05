import styled from "styled-components"

export const Flashcards = () => {
  return (
    <>
      {/* <ContainerFlashcard>
        <p>Pergunta 1</p>
        <img src="./assets/seta_play.png" alt="seta play"></img>
      </ContainerFlashcard> */}

      {/* <PerguntaFlashcard>
        <p>O que é JSX?</p>
        <img src="./assets/seta_virar.png"></img>
      </PerguntaFlashcard> */}

      {/* <RespostaFlashcard>
        <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
        <div className="button">
          <button className="vermelho">Não lembrei</button>
          <button className="laranja">Quase não lembrei</button>
          <button className="verde">Zap!</button>
        </div>
      </RespostaFlashcard> */}

      <ResultadoFlashcard>
        <p className="vermelho">Pergunta 1</p>
        <img src="./assets/icone_erro.png" alt="icone erro"></img>
      </ResultadoFlashcard>
    </>

  )
}

const ContainerFlashcard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  width: 300px;
  height: 65px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  p {
    font-family: 'Recursive', sans-serif; 
    font-weight: 700;
    font-size: 16px;
    color: #333333;
  }

  img {
    width: 20px;
    height: 23px;
  }
`

const PerguntaFlashcard = styled.div`
  display: flex;
  flex-direction: column;
  width: 299px;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px;
  position: relative;

  p {
    font-family: 'Recursive', sans-serif; 
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }

  img {
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 1;
  }
`

const RespostaFlashcard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 299px;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px;

  p {
    font-family: 'Recursive', sans-serif; 
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }

  button {
    width: 85px;
    height: 38px;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    font-family: 'Recursive', sans-serif; 
    font-weight: 400;
    font-size: 12px;
  }

  .vermelho {
    background-color: #FF3030;
  }

  .laranja {
    background-color: #FF922E;
  }

  .verde {
    background-color: #2FBE34;
  }
`

const ResultadoFlashcard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  width: 300px;
  height: 65px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  p {
    font-family: 'Recursive', sans-serif; 
    font-weight: 700;
    font-size: 16px;
    text-decoration: line-through;
  }

  .vermelho {
    color: #FF3030;
  }

  .laranja {
    color: #FF922E;
  }

  .verde {
    color: #2FBE34;
  }

`