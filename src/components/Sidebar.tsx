import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarUserContainer>
        <SidebarUserImg
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          alt=""
        />
      </SidebarUserContainer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  height: 100%;
  width: 7.5%;
  padding: ${(p) => `${p.theme.spacing.spacing16} 0`};

  display: flex;
  justify-content: center;

  background: ${(p) => p.theme.colors.primary};
`;

const SidebarUserContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 75px;
  height: 75px;
  cursor: pointer;

  border-radius: ${(p) => p.theme.borderRadius.rounded3xl};
  border: ${(p) => `1px solid ${p.theme.colors.secondary}`};
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: ${p => p.theme.colors.primary};
    opacity: 0;
    transition: 0.5s ease all;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover::after {
    opacity: 0.2;
  }
`;

const SidebarUserImg = styled.img`
  transition: 0.5s ease all;
  object-fit: cover;
`;
