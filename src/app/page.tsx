
import { auth } from "@/auth";
import HeroSection from "./components/HeroSection";
import Work from "./components/Work";

export default async function Home() {
  const user = await auth();
  console.log(user);

  return (

    <main> 
  {/* Hero Section */}
  <div className="hero-section m-10">
    <HeroSection />
  </div>
  
  {/* Work Section */}
  <div className="m-10">
    <Work />
  </div>
</main>


  );
}
