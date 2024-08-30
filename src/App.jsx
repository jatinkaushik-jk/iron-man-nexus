import { useState } from "react";
import InitialLoader from "./components/InitialLoader.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Navbar from "./components/Navbar.jsx";
import StarkTechPage from "./components/StarkTechPage.jsx";
import TonyStarkPage from "./components/TonyStarkPage.jsx";
import ArcReactorPage from "./components/ArcReactorPage.jsx";
import MarkCollectionPage from "./components/MarkCollectionPage.jsx"
import MediaPage from "./components/MediaPage.jsx";
import Footer from "./components/Footer.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {

  const [showContent, setShowContent] = useState(false);

  return (
    <>

      {!showContent && <InitialLoader onCompleteFunction={setShowContent} />}
      {showContent && <>
        <Navbar />
        <main className="mt-[4.5rem]">
          <LandingPage />
          <TonyStarkPage />
          <StarkTechPage />
          <ArcReactorPage />
          <MarkCollectionPage />
          <MediaPage />
        </main>
        <Footer />
      </>}

    </>
  )
}

export default App;
