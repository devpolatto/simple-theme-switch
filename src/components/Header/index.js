import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, Description } from './style';

function Header(props) {

    const { colors, title } = useContext(ThemeContext);

  return (
    <div>
        <Container>
            <h1>Theme Switch</h1>
            <Switch 
                onChange={props.toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor={colors.switchIcon.offColor}
                onColor={colors.switchIcon.onColor}
            />
        </Container> 
        <Description>
            <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja 
            de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não 
            só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
            inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de 
            Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica 
            como Aldus PageMaker.
            </p>
        </Description>
    </div>
   
  );
}

export default Header;