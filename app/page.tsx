
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";
import { FloatingNav } from "@/components/ui/Floating-navbar";



import { navItems } from "@/data";


export default function Home() {
  return (
   <>
<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
<div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems}/>
    <Hero/>
    <Grid/>
   <RecentProjects/>
  {/* <SVGMaskEffectDemo/> */}
  <TextRevealCardPreview/>
  <Footer/>
   </div>

   </main>
  
   </>
  );
}
  