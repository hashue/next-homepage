import Image from "next/image";
const WorkItem = ({ img, title, description, url }) => {
    return (
        <div
            style={{
                boxSizing: "border-box",
                height: "300px",
                marginBottom: "3rem",
            }}
        >
            <a href={url}>
                <WorkImage img={img} />
                <h2 style={{ textAlign: "center", margin: "1.2rem 0" }}>{title}</h2>
                <p>{description}</p>
            </a>
        </div>
    );
};

const WorkImage = ({ img }) => {
    return <img style={{ width: "100%", height: "170px", borderRadius: "8px" }} src={img} />;
};

export default WorkItem;
