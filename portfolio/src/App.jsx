import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        
        <LogoSection />
        <div className="h-[200px] w-full bg-black relative z-10"/>
        <ShowcaseSection />
         
         
        <FeatureCards />
        
        <ExperienceSection />
    </>
  )
}

export default App