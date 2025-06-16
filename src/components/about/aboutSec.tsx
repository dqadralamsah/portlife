'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  useEffect(() => {
    gsap.fromTo(
      '.aboutD1',
      { y: 100 },
      {
        y: 0,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.wraper1',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.aboutD2',
      { y: 300 },
      {
        y: 0,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.wraper2',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  });

  return (
    <>
      <section
        id="about"
        className="aboutSec w-full h-dvh flex items-center justify-center px-12 bg-amber-500"
      >
        <div className=" aboutD flex flex-col gap-4 ">
          <div className=" wraper1 overflow-hidden">
            <h1 className=" aboutD1 text-5xl text-orange-700 font-bold ">About</h1>
          </div>
          <div className=" wraper2 overflow-hidden">
            <p className=" aboutD2 text-3xl text-justify text-orange-700">
              Perkenalkan Nama saya Dicky Qadr Alamsah, akrab dipanggil Dicky. Saya merupakan
              mahasiswa semester akhir di Universitas Esa Unggul, Fakultas Ilmu Komputer, Program
              Studi Teknik Informatika (IPK 3.72/4.00). Saya memiliki minat dalam bidang UI/UX
              Design dan Front-End Web Development.
            </p>
          </div>
          <div className=" wraper1 overflow-hidden">
            <h1 className=" aboutD1 text-5xl text-orange-700 font-bold ">Kegiatan Terakhir</h1>
          </div>
          <div className=" wraper2 overflow-hidden">
            <p className=" aboutD2 text-3xl text-justify text-orange-700">
              Dua tahun kebelakang saya telah mengikuti pelatihan Studi Independen yaitu program
              kampus merdeka di Dicoding Indonesia dalam bidang pengembangan web, dan juga saya
              sempat magang di salah satu PT sebagai divisi IT Support.
            </p>
          </div>
          <div className=" wraper1 overflow-hidden">
            <h1 className=" aboutD1 text-5xl text-orange-700 font-bold ">Ada Lagi???</h1>
          </div>
          <div className=" wraper2 overflow-hidden">
            <p className=" aboutD2 text-3xl text-justify text-orange-700">
              Selain itu saya juga aktif berkontribusi dalam berbagai kegiatan organisasi kampus,
              contohnya seperti oganisasi Himpunan Mahasiswa Jurusan dan Badan Eksekutif Mahasiswa.
              Saya memiliki kepribadian Individu yang mau belajar, mudah beradaptasi, serta memiliki
              tekad kuat untuk terus berkembang dan mengasah keterampilan di dunia teknologi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <div>
          <h1>Last Activity</h1>
          <p>
            Dua tahun kebelakang saya telah mengikuti pelatihan Studi Independen yaitu program
            kampus merdeka di Dicoding Indonesia dalam bidang pengembangan web, dan juga saya sempat
            magang di salah satu PT sebagai divisi IT Support.
          </p>
        </div>
        <div>
          <h1>Ada Lagi???</h1>
          <p>
            Selain itu saya juga aktif berkontribusi dalam berbagai kegiatan organisasi kampus,
            contohnya seperti oganisasi Himpunan Mahasiswa Jurusan dan Badan Eksekutif Mahasiswa.
            Saya memiliki kepribadian Individu yang mau belajar, mudah beradaptasi, serta memiliki
            tekad kuat untuk terus berkembang dan mengasah keterampilan di dunia teknologi.
          </p>
        </div> */
}
