import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import styled from "styled-components";

interface LinkProps {
  name: string;
  label: string;
  active: boolean;
}

export const SidebarLink = (props: LinkProps) => {
  const { name, label, active } = props;

  return (
    <SidebarLinkContainer>
      {active === true ? <AiFillHome /> : <AiOutlineHome />}
      {/* <SidebarLinkTitle>{label}</SidebarLinkTitle> */}
    </SidebarLinkContainer>
  );
};

const SidebarLinkContainer = styled.div`
  font-size: ${p => p.theme.spacing.spacing48};
  color: ${p => p.theme.colors.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SidebarLinkTitle = styled.h2``;
