import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarUserContainer>
        <SidebarUserImg
          src="https://plus.unsplash.com/premium_photo-1663054609755-5be53e6d599a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </SidebarUserContainer>
      <Divider />
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  height: 100%;
  width: 7.5%;
  padding: ${(p) => `${p.theme.spacing.spacing16} 0`};

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${(p) => p.theme.colors.primary};
`;

// User profile information

const SidebarUserContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: min(80%, 75px);
  aspect-ratio : 1 / 1;
  cursor: pointer;

  border-radius: ${(p) => p.theme.borderRadius.rounded3xl};
  border: ${(p) => `1px solid ${p.theme.colors.secondary}`};
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 75px;
    height: 75px;
    background: ${(p) => p.theme.colors.primary};
    border-radius: ${(p) => p.theme.borderRadius.rounded3xl};
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
  height: 100%;
  transition: 0.5s ease all;
  object-fit: cover;
`;

// Divider
const Divider = styled.hr`
  height: 1px;
  width: 80%;
  border: none;
  margin: ${p => p.theme.spacing.spacing24};
  background-color: ${p => p.theme.colors.secondaryDarker};
`;

// Navigation links
