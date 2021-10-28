import Link from "next/link";
import styled from "@emotion/styled";

const NavLinkItem = styled.div`
    margin: ${(props) => (props.$title ? ".7rem 2rem .5rem 1rem" : " 1.2rem 1rem 0 1rem ")};
    font-size: ${(props) => (props.$title ? "1.4rem" : "1rem")};
    font-weight: ${(props) => (props.$title ? "bold" : "600")};
`;

const Nav = () => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
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
