import styled from "@emotion/styled";
import Image from "next/image";

const Logo = ({ path, ...props }) => {
    return <img src={path} alt="Logo" {...props} />;
};

export default Logo;
