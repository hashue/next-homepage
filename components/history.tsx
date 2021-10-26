import styled from "@emotion/styled";

const BioDate = styled.span`
font-weight: bold;
margin-right: 1.2rem;
`

const Section = styled.h3`
text-decoration: underline;
text-underline-offset: 6px;
text-decoration-thickness: 4px;
margin: 2rem 0;
`

const MyHistory = ({section, description}) =>{
return(
    <div>
        <Section>{section}</Section>
        <p>{description}</p>
    </div>
)
}

const BioItem = ({year,description}) =>{
return(
<div style={{marginBottom:"1.3rem"}}>
<BioDate>{year}</BioDate>
{description}
</div>
)
}

export {MyHistory,BioItem,Section};
