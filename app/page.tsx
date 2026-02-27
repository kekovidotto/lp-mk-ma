"use client";

import {
  Brush,
  Camera,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  PlayCircle,
  Plus,
  Sparkles,
} from "lucide-react";
import { Spline_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button"; // Shadcn Button

// Configuração da Fonte
const spline = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline",
  weight: ["300", "400", "500", "600", "700"],
});

export default function LandingPage() {
  return (
    <div
      className={`bg-background-dark flex min-h-screen w-full flex-col overflow-x-hidden text-slate-100 antialiased ${spline.className}`}
    >
      {/* --- Floating WhatsApp Button --- */}
      <Link
        href="#"
        className="group fixed right-8 bottom-8 z-[60] flex items-center justify-center"
      >
        <div className="bg-vellari-green absolute inset-0 animate-pulse rounded-full opacity-40 blur-xl transition-opacity group-hover:opacity-70"></div>
        <div className="bg-vellari-green relative flex items-center justify-center rounded-full p-4 shadow-2xl transition-transform hover:scale-110 active:scale-95">
          <span className="border-vellari-green absolute top-0 right-0 h-3 w-3 animate-ping rounded-full border-2 bg-white"></span>
          <MessageCircle className="h-7 w-7 text-white" fill="currentColor" />
        </div>
      </Link>

      {/* --- Header --- */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-transparent bg-black/90 px-6 py-6 backdrop-blur-md transition-all duration-300 md:px-20">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-black tracking-tighter uppercase italic">
            Logo
          </h2>
        </div>
        <div className="hidden md:block">
          <p className="text-[10px] tracking-[0.2em] text-slate-400 uppercase">
            Design de Impacto &{" "}
            <span className="font-bold text-white">Produção Visual.</span>
          </p>
        </div>
        <Button className="glow-pill px-8 py-6 text-xs font-bold tracking-widest uppercase transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] active:scale-95">
          Orçamento
        </Button>
      </header>

      <main className="w-full flex-1">
        {/* --- Hero Section --- */}
        <section className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-24 text-center md:py-32">
          <div className="mb-8 rounded-full border border-slate-800 px-4 py-1">
            <span className="text-[10px] tracking-widest text-slate-400 uppercase">
              Conteúdo | Fotografia | Branding
            </span>
          </div>

          <h1 className="mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight text-white md:text-7xl">
            Elevando sua Presença Visual com Estratégia e Arte.
          </h1>

          <p className="mb-12 max-w-2xl text-lg text-slate-400 md:text-xl">
            Somos uma boutique de{" "}
            <span className="font-bold text-white">produção criativa</span>{" "}
            dedicada a transformar marcas através de narrativas visuais
            sofisticadas e autênticas.
          </p>

          <div className="group relative">
            {/* Decorative Icons replacing Material Symbols */}
            <Sparkles className="animate-float absolute -top-6 -left-8 h-8 w-8 scale-75 text-zinc-600 opacity-50" />
            <Plus className="absolute -right-8 -bottom-4 h-8 w-8 scale-50 animate-pulse text-zinc-500 opacity-40" />
            <Sparkles
              className="animate-float absolute top-4 -right-12 h-8 w-8 scale-90 text-zinc-700 opacity-30"
              style={{ animationDelay: "1s" }}
            />

            <Button className="glow-pill rounded-full bg-white px-12 py-8 text-sm font-bold tracking-widest text-black uppercase transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Solicitar Proposta
            </Button>
          </div>
        </section>

        {/* --- Process Section --- */}
        <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24 md:px-20">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Nosso Processo Criativo
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Unimos sensibilidade artística e rigor técnico em{" "}
              <span className="font-bold text-white">três etapas</span>{" "}
              fundamentais para garantir a excelência da sua marca.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                id: "1",
                title: "Imersão",
                desc: "Entendemos profundamente a essência do seu negócio, seus valores e objetivos para traçar o melhor caminho criativo.",
              },
              {
                id: "2",
                title: "Produção",
                desc: "Execução técnica de alto nível, onde a arte ganha forma através de lentes, design e narrativas estrategicamente construídas.",
              },
              {
                id: "3",
                title: "Entrega",
                desc: "Finalização e entrega de ativos visuais prontos para posicionar sua marca no topo do mercado com máxima qualidade.",
              },
            ].map((item) => (
              <div key={item.id} className="group relative">
                <span className="text-outline absolute -top-12 -left-4 text-8xl font-black opacity-50 transition-opacity select-none group-hover:opacity-80 md:text-9xl">
                  {item.id}
                </span>
                <div className="relative pt-8">
                  <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Services Section (Sticky Layout) --- */}
        <section className="bg-black px-6 py-24 md:px-20">
          <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
            <div className="sticky top-32">
              <h2 className="mb-8 text-4xl leading-tight font-bold md:text-6xl">
                Excelência visual para marcas que buscam distinção.
              </h2>
              <p className="text-lg text-slate-400">
                Desenvolvemos soluções estéticas que não apenas atraem o olhar,
                mas comunicam valor e autoridade instantaneamente.
              </p>
            </div>

            <div className="space-y-6">
              {/* Card 1 */}
              <div className="group bg-card-bg border-card-border relative overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:border-zinc-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute top-1/2 right-8 translate-x-4 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-xl"></div>
                    <PlayCircle className="relative z-10 h-12 w-12 fill-white/20 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h4 className="mb-4 text-xl font-bold transition-colors group-hover:text-white">
                    Marketing de Conteúdo & Vídeos
                  </h4>
                  <p className="max-w-[80%] text-slate-400">
                    Transformando ideias em narrativas visuais de alto impacto
                    que conectam sua marca ao público ideal através de vídeos e
                    conteúdo estratégico.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-card-bg border-card-border group rounded-2xl border p-8 transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="mb-4 text-xl font-bold transition-colors group-hover:text-white">
                      Fotografia Profissional
                    </h4>
                    <p className="text-slate-400">
                      Capturando a essência do seu negócio através da lente, com
                      foco em retratos corporativos, produtos e ambientação
                      premium.
                    </p>
                  </div>
                  <Camera className="h-8 w-8 text-zinc-700 transition-colors group-hover:text-zinc-400" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-card-bg border-card-border group rounded-2xl border p-8 transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-1">
                    <h4 className="mb-4 text-xl font-bold transition-colors group-hover:text-white">
                      Design de Marcas
                    </h4>
                    <p className="mb-6 text-slate-400">
                      Criando identidades visuais únicas e memoráveis que
                      traduzem a personalidade da sua empresa.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 rounded-lg border border-zinc-800 px-3 py-1.5 text-[10px] tracking-wider text-zinc-500 uppercase transition-colors group-hover:border-zinc-700">
                        <span className="opacity-60">Conceito</span>
                        <div className="h-[1px] w-8 bg-zinc-800 group-hover:bg-zinc-600"></div>
                        <span className="font-bold text-white">
                          Entrega Final
                        </span>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="h-6 w-6 rounded-full border border-black bg-zinc-800"></div>
                        <div className="h-6 w-6 rounded-full border border-black bg-white"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden items-center justify-center px-4 md:flex">
                    <Brush className="h-8 w-8 text-zinc-700 transition-colors group-hover:text-zinc-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Portfolio Section --- */}
        <section className="overflow-hidden border-t border-zinc-900 bg-black py-24">
          <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between px-6">
            <div className="max-w-xl">
              <h2 className="mb-4 text-4xl font-bold">Portfolio Criativo</h2>
              <p className="text-slate-400">
                Uma curadoria de produções que elevam o padrão visual de nossos
                clientes.{" "}
                <span className="font-bold text-white">
                  Veja a arte em movimento.
                </span>
              </p>
            </div>
          </div>

          <div className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-8 md:px-20">
            {[
              {
                title: "Vídeo & Movimento",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3cUNd8_0xN-NcTOrNTNp3As2fuJtGko_yDKh-EEdy-L8vgYTIDaTe6hRMeYNtRnWECTzBf73rI93TVPwJXS3PBYIiGyLCOLuKp_jTyfaflBnRtVVGucQACwltGUkDUWLeTDDWYMDBS-MWfExTjTbAV8waoYDZHIa_fr0Bz7rN-5LaotiMtoSLakHgvlYjSI81FkXG7QfzgELNPTet_1C4uQ_-xE4Q4VbzqTJ9tGxy7S9oHH-B-BH5DVH_-sUoIZsI0RwFUHu5Fhg",
              },
              {
                title: "Still & Produto",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF3ekBY_YE09y-Q5hFjnWml8Kg7sPnRzY-6myX6dZI4Wm0Ux4bFNYyJ8EOuKy43MtGTs3Z6DqwtJo1-JrvCEvTQcZnxHPyHywQvZieWWsSA8yz5YU5qcZSbZK1JSRjX0OZtA5z14ArWAScsTuslF0kmdgji06ETNK1hAeY0aZn_p5xntJUUtHdaV97QQGnB5yOSqeIQP2cOEwwjnwsNuO_aeOLB2s5bJQEWQd9RdEzyHomcENuEEavSeTSZ5BRIHNG2mlhjH8T7BA",
              },
              {
                title: "Identidade Visual",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk3qfDJPg9fOr4Q_v67UcWJ7kZqs4Mmxmq28SpMmx1TBWhyHKUKsXkAnQ6i1Py5rq_6tzAWXTAG4_W3ZCGhvGHpAS1opod24RSrPgpJhwtsUxLfekAtryXD8T5mnFwPOSOZzOHO-2Ng9PWCLpFc18chx4K857n00UJSf1l20pvrdnPYoEtWfN9ETyRG0XJnX3gkM9wvtolTtaMHMjUSmAVr_3Px6kROYe0D-51TqW3iaD6NM6WFmG1VRArf6IdlPJN7mfuXNyhtis",
              },
              {
                title: "Social Content",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3cUNd8_0xN-NcTOrNTNp3As2fuJtGko_yDKh-EEdy-L8vgYTIDaTe6hRMeYNtRnWECTzBf73rI93TVPwJXS3PBYIiGyLCOLuKp_jTyfaflBnRtVVGucQACwltGUkDUWLeTDDWYMDBS-MWfExTjTbAV8waoYDZHIa_fr0Bz7rN-5LaotiMtoSLakHgvlYjSI81FkXG7QfzgELNPTet_1C4uQ_-xE4Q4VbzqTJ9tGxy7S9oHH-B-BH5DVH_-sUoIZsI0RwFUHu5Fhg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] min-w-[300px] cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:min-w-[400px]"
              >
                <img
                  alt={item.title}
                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  src={item.src}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-8 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="bg-black px-6 py-24 md:px-20">
          <div className="bg-vellari-offwhite mx-auto max-w-4xl rounded-[2rem] p-12 text-center text-black shadow-[0_0_60px_rgba(255,255,255,0.05)] md:p-20">
            <div className="mb-8 flex justify-center">
              <div className="bg-vellari-green group relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full shadow-lg shadow-green-500/20">
                <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"></div>
                <MessageCircle className="relative z-10 h-10 w-10 text-white" />
              </div>
            </div>

            <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
              Ainda está com dúvidas?
            </h2>
            <p className="mb-12 text-lg text-zinc-600 md:text-xl">
              Entre em contato para falar com um dos nossos especialistas.
            </p>

            <Button className="bg-vellari-green hover:bg-vellari-green/90 h-auto rounded-2xl px-10 py-8 text-base font-bold tracking-widest text-white uppercase shadow-xl shadow-green-600/30 transition-all hover:scale-105 hover:shadow-green-500/50">
              Atendimento via WhatsApp
            </Button>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-zinc-900 bg-black px-6 py-20 text-white md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="col-span-1">
              <h2 className="mb-6 text-4xl font-black tracking-tighter italic">
                Logo
              </h2>
              <p className="text-sm leading-relaxed text-zinc-500">
                Copyright © 2026 Todos
                <br />
                os direitos reservados.
              </p>
            </div>

            <div>
              <h4 className="mb-8 text-lg font-bold">Contato</h4>
              <ul className="space-y-4">
                <li className="group flex cursor-pointer items-center gap-3 text-zinc-400 transition-colors hover:text-white">
                  <MessageCircle className="group-hover:text-vellari-green h-5 w-5 text-zinc-500 transition-colors" />
                  <span className="text-sm">(11) 99161-2836</span>
                </li>
                <li className="group flex cursor-pointer items-center gap-3 text-zinc-400 transition-colors hover:text-white">
                  <Mail className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-white" />
                  <span className="text-sm break-all">contato@agencia.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-8 text-lg font-bold">Siga-nos</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                  >
                    <Instagram className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-white" />
                    <span className="text-sm">Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                  >
                    <Facebook className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-white" />
                    <span className="text-sm">Facebook</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-8 text-lg font-bold">Políticas</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Políticas de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
