import Link from "next/link";

const NavLinkItem = ({ href, link_word, ...props }: any) => {
    return (
        <Link href={href} {...props}>
            {link_word}
        </Link>
    );
};

const Nav = () => {
    return (
        <div className="flex justify-start w-full">
            <NavLinkItem
                href="/"
                link_word="Hasu"
                style={{ paddingRight: "15rem" }}
                className="md:pr-60"
            />
            <NavLinkItem href="/works" link_word="Works" />
        </div>
    );
};

export default Nav;
