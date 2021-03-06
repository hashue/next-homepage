import { NextPage } from "next";
import CircleLogo from "../components/logo";
import { Section } from "../components/history";
import Footer from "../components/footer";
import Nav from "../components/navbar";
import WorkItem from "../components/work";

const Works: NextPage = () => {
  return (
    <div style={{ maxWidth: "700px", width: "50%", margin: "0 auto" }}>
      <Nav />
      <CircleLogo src="/images/logo.png" />
      <Section>Works</Section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "24px",
        }}
      >
        <WorkItem
          img="/images/timer.png"
          title="Focusaid"
          description="ポモドーロテクニック支援のためのタイマーアプリ
                                 Localstrageによるプリセット保存機能あり"
          url="https://hashue.github.io/Timer/"
        />
        <WorkItem
          img="/images/tuberlooper.png"
          title="TuberLooper"
          description="Youtube IFrame Player APIを用いたループ再生を実現するサイト"
          url="https://hashue.github.io/TuberLooper/"
        />
        <WorkItem
          img="/images/rusmo.png"
          title="rusmo"
          description="Rust製のメモ作成支援ツール"
          url="https://crates.io/crates/rusmo"
        />
        <WorkItem
          img="/images/old-portfolio.png"
          title="ポートフォリオ"
          description="旧ポートフォリオ"
          url="https://hasu-83.herokuapp.com"
        />
        <WorkItem
          img="/images/frourio-hp.png"
          title="フルーリオ株式会社HP"
          description="フルーリオ株式会社のコーポレートサイト デザインから開発まで全てを担当"
          url="https://frourio.co.jp"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Works;
