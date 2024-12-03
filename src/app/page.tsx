'use client'
import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Location } from '../components/Location'
import { StoreLinks } from '../components/StoreLinks'
import { Reviews } from '../components/Reviews'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Location />
        <StoreLinks />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
} 