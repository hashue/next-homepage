import { NextPage } from "next";
import Nav from "../components/navbar";
import CircleLogo from "../components/logo";
import Footer from "../components/footer";
import { MyHistory, BioItem, Section } from "../components/history";

const Home: NextPage = () => {
    return (
        <div style={{ maxWidth: "700px", width: "50%", margin: "0 auto" }}>
            <Nav />
            <CircleLogo src="/images/logo.png" />

            <h1 style={{ fontSize: "2.6rem", textAlign: "center", margin: "6rem 0 1rem 0" }}>
                Hasu
            </h1>
            <p style={{ fontWeight: 400, fontSize: "1.25rem", textAlign: "center" }}>
                -Web developer-
            </p>

            <MyHistory
                section="About"
                description="
              2003年生れ。小学一年生のときにPCを初めて触り興味を持つ。 
            その後小学五年生のときにプログラミングに出会い学習を開始。
            現在はWeb制作を中心に学習中"
            />

            <MyHistory section="Biography" description="" />

            <BioItem year="2010" description="初めてPC(Windows2000)に触れる" />
            <BioItem year="2015" description="プログラミングに出会う" />
            <BioItem year="2019" description="学校法人角川ドワンゴ学園N高等学校に転入学" />
            <BioItem year="2019" description="ITパスポート試験 合格" />
            <BioItem
                year="2020"
                description="おおいたヒューマンフェスティバル webサイト開発メンバーとして参加"
            />
            <BioItem year="2020" description="サンシステム アルバイト入社" />

            <Section>Platform</Section>
            <ul>
                <li style={{ listStyle: "none", marginBottom: "1.3rem" }}>
                    <a href="https://github.com/hashue/">GitHub</a>
                </li>
                <li style={{ listStyle: "none", marginBottom: "1.3rem" }}>
                    <a href="https://twitter.com/83_hasu/">Twitter</a>
                </li>
                <li style={{ listStyle: "none", marginBottom: "1.3rem" }}>
                    <a href="https://zenn.dev/hasu_83">Zenn</a>
                </li>
                <li style={{ listStyle: "none", marginBottom: "1.3rem" }}>
                    <a href="https://qiita.com/7321hasu">Qiita</a>
                </li>
            </ul>
            <Footer />
        </div>
    );
};

export default Home;
