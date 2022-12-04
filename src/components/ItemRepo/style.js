import styled from "styled-components";

export const ItemContainer = styled.div `
    width: 80%;
    height: auto;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
    }

    a:link, a:visited {
        color: #00FFFF;
    }

    a.remove {
        color: #ff0000;
        background-color: #fafafa95;
        border-radius: 10px;
        display: flex;
        width: fit-content;
        margin: 20px 0;
        padding: 0.1rem;
    }

    a:hover {
        color: #fff;
    }

    hr {
        color: #fafafa60;
        margin: 20px 0;
    }
`