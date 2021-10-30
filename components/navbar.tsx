import Link from "next/link";
import styled from "@emotion/styled";

type NavLinkItemProps = {
    name?: boolean;
};

const NavLinkItem = styled.div<NavLinkItemProps>`
    padding-top: 0.5rem;
    padding: ${(props) => (props.name ? "1.5rem 2rem 1.5rem 1rem" : " 1.8rem 1rem 0 1rem ")};
    font-size: ${(props) => (props.name ? "1.4rem" : "1rem")};
    font-weight: ${(props) => (props.name ? "bold" : "600")};
`;

NavLinkItem.defaultProps = {
    name: false,
};

const Nav = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                backgroundColor: "#faf7eb",
                width: "100vw",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1,
                paddingLeft: "30vw",
            }}
        >
            <NavLinkItem name>
                <Link href="/">Hasu</Link>
            </NavLinkItem>
            <NavLinkItem>
                <Link href="/works">Works</Link>
            </NavLinkItem>
        </div>
    );
};

export default Nav;
