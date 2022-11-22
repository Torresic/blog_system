import styled from "styled-components";

export const Home = () => {
    return (
        <MyTitle>Hello theme</MyTitle>
    )
}

const MyTitle = styled.h1`
  color: ${(p) => p.theme.colors.black};
`;
