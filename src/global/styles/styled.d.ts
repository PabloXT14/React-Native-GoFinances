import 'styled-components';

import theme from './theme';

// Acessando modulo do styled-components
declare module 'styled-components' {
    type ThemeType = typeof theme // criando tipagem do nosso tema

    export interface DefaultTheme extends ThemeType { }// setando tipagem do nosso tema para o modulo do styled-components
}