import styled from "@emotion/styled";

const Logo = ({path,...props}) => {
    return <img src={path} alt="Logo" {...props} />;
}

export default Logo
