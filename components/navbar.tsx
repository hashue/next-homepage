import Link from "next/link";
import styled from "@emotion/styled";

const NavLinkItem = styled.div`
    padding-top: 0.5rem;
    padding: ${(props) => (props.$title ? "1.5rem 2rem 1.5rem 1rem" : " 1.8rem 1rem 0 1rem ")};
    font-size: ${(props) => (props.$title ? "1.4rem" : "1rem")};
    font-weight: ${(props) => (props.$title ? "bold" : "600")};
`;

const Nav = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                backgroundColor: "#d9d0ab",
                width: "100vw",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1,
                paddingLeft: "30vw",
            }}
        >
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
