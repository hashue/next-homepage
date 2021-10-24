import { NextPage } from "next";
import Nav from "../components/navbar";
const Home: NextPage = () => {
    return (
        <div
            className="flex justify-center"
            style={{ maxWidth: "770px", width: "770px", margin: "0 auto" }}
        >
            <Nav />
        </div>
    );
};

export default Home;
