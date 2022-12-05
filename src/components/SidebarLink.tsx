import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import styled from "styled-components";

interface LinkProps {
  name: string;
  label: string;
  active: boolean;
  onClickHandler: () => void;
}

export const SidebarLink = (props: LinkProps) => {
  const { name, label, active, onClickHandler } = props;

  return (
    <SidebarLinkContainer onClick={onClickHandler}>
      {active === true ? <AiFillHome /> : <AiOutlineHome />}
      {/* <SidebarLinkTitle>{label}</SidebarLinkTitle> */}
    </SidebarLinkContainer>
  );
};

const SidebarLinkContainer = styled.div`
  font-size: ${p => `clamp( ${p.theme.spacing.spacing24} , ${p.theme.spacing.spacing32} ,  ${p.theme.spacing.spacing32})`};
  color: ${p => p.theme.colors.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const SidebarLinkTitle = styled.h2``;
