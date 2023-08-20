import Image from "next/image";
import "./page.css";

const Page = () => {
  return (
    <main className="main">
      <section className="shapes">
        <div className="shapes-container">
          <div className="shape-1" />
          <div className="shape-2" />
          <div className="shape-3" />
          <hr className="line line-1" />
          <hr className="line line-2" />
          <hr className="line line-3" />
          <hr className="line line-4" />
        </div>
      </section>
      <section className="content">
        <div></div>

        <h1>
          Comming <b>Soon</b>
        </h1>

        <div className="powered-by">
          Powered by{" "}
          <a href="https://stellaria.app" target="_blank">
            <Image
              src="/images/logo-stellaria.png"
              alt="Nebula Logo"
              width={90}
              height={20}
            />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Page;
