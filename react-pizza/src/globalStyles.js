import { createGlobalStyle } from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Water+Brush&display=swap');
</style>

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Water Brush', cursive;
}
`