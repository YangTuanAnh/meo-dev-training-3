import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import JumbotronCam from '../components/Jumbotron/JumbotronCam'
import JumbotronChamNgonTrinh from '../components/Jumbotron/JumbotronChamNgonTrinh'
import JumbotronTabs from '../components/Jumbotron/JumbotronTabs'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home()
{
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <JumbotronTabs />
      <JumbotronCam />
      <JumbotronChamNgonTrinh />
      <Footer />
    </div>
  )
}
