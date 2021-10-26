import Link from "next/link";
import styled from "@emotion/styled";

const NavLinkItem = styled.div`
    margin: ${props => props.$title ? ".4rem  0 2rem" : " 1.5rem 0 0 0 "};
    flex: 1 0 auto;
    font-size: ${props => props.$title ? "2.3rem" : "1.4rem"};
    font-weight: ${props => props.$title ? "bold" : "600"};
`;

const Nav = () => {
    return (
        <div style={{display:"flex", justifyContent:"flex-start", width:"100%"}}>
            <NavLinkItem $title>
                <Link href="/">Hasu</Link>
            </NavLinkItem>
            <NavLinkItem>
                <Link href="/works">Works</Link>
            </NavLinkItem>
        </div>
    );
};

export default Nav;
