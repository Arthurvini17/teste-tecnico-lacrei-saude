# 🌿 Lacrei Saúde — Desafio Técnico

Este projeto foi desenvolvido como parte de um **desafio técnico proposto pela Lacrei Saúde**, com o objetivo de criar uma **landing page responsiva e acessível**, promovendo a inclusão e o cuidado na saúde.

---

## 🚀 Visão Geral

A **Lacrei Saúde** é uma plataforma que busca garantir atendimento de saúde livre de discriminação para pessoas LGBTQIAPN+.  
O desafio consistiu em desenvolver uma **landing page moderna, funcional e responsiva**, refletindo os valores de acolhimento, acessibilidade e diversidade da marca.

---

## 🧠 Objetivo do Projeto

- Desenvolver uma landing page utilizando **Next.js** e **React**
- Criar componentes reutilizáveis e de fácil manutenção
- Garantir **responsividade** para diferentes tamanhos de tela
- Utilizar boas práticas de **acessibilidade e semântica**
- Aplicar um design limpo e alinhado à identidade visual da Lacrei Saúde

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **Next.js** — Framework React para construção de interfaces modernas
- 💅 **TailwindCSS** — Estilização rápida e responsiva
- 🧩 **Lucide React** — Ícones modernos e leves
- 🧠 **React Hooks** — Para gerenciamento de estado e lógica dos componentes

---

## Testes com Jest

Durante o desenvolvimento deste projeto, foi configurado o ambiente de testes utilizando Jest e Testing Library com o objetivo de validar os componentes React.

No entanto, o Next.js 15 (Turbopack) — atualmente utilizado neste projeto — não oferece suporte ao Babel, que é necessário para a execução dos testes com Jest.

⚠️ Motivo técnico

O Turbopack é o novo empacotador experimental do Next.js que substitui o Webpack, mas ainda não possui compatibilidade com Babel.
Como o Jest depende do Babel para transpilar os arquivos antes de executar os testes, o erro abaixo ocorre ao tentar rodá-los:

## Prints Lighthouse mobile + Notas e otimizações

- **Performance:** 82
- **Accessibility:** 95
- **Best Practices:** 100
- **SEO:** 98

<img width="1088" height="639" alt="Captura de tela 2025-10-21 095342" src="https://github.com/user-attachments/assets/aa6aa964-7e12-455f-ab94-a211fdbc8e81" />

<img width="1022" height="601" alt="Captura de tela 2025-10-21 095406" src="https://github.com/user-attachments/assets/50464bc3-cf6f-4b1b-adf7-1b8c2f597912" />

```bash
 desafio-tecnico-lacrei-saude.vercel.app
```
