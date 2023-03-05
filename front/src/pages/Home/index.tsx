import { DefaultLayout } from "../../layouts/Default";
import { Hero } from "../../components/Hero/Hero";
import { Showcase } from "../../components/Showcase/Showcase";

export default function Home() {
  return(
    <DefaultLayout>
      <Hero />
      <Showcase></Showcase>
    </DefaultLayout>
  )
}