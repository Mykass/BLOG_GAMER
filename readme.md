# 🎮 Mykas Games — Portal de Notícias Gamer Automatizado

Mykas Games é um **portal editorial de notícias sobre games** desenvolvido como projeto de portfólio, com foco em **arquitetura moderna, automação controlada e boas práticas de frontend, backend e SEO**.

O projeto simula um site real de notícias gamer, onde a **IA atua apenas como apoio editorial**, gerando conteúdos que seguem regras rígidas e são publicados automaticamente em horários definidos, enquanto toda a **estrutura, curadoria, performance e experiência do usuário** são controladas manualmente.

---

## 🔎 Visão Geral do Projeto

- Portal de notícias gamer
- Conteúdo jornalístico automatizado
- Estrutura preparada para SEO
- Frontend estático (GitHub Pages)
- Backend serverless
- Banco de dados e storage em nuvem
- Arquitetura desacoplada e escalável

Este projeto foi pensado para **funcionar como um produto real**, não apenas como uma demonstração técnica.

---

## 💡 Idealização

A ideia surgiu da necessidade de unir:

- Automação inteligente com IA  
- Controle editorial e estrutural humano  
- Baixo custo de infraestrutura  
- Alta escalabilidade  
- Boas práticas de SEO e performance  

O objetivo **não** era criar um site “feito por IA”, mas sim um **portal profissional**, onde a IA atua como **ferramenta**, não como núcleo do sistema.

---

## 🧠 Papel da Inteligência Artificial

A IA é utilizada exclusivamente para:

- Gerar textos jornalísticos originais
- Criar títulos, resumos e conteúdo estruturado
- Sugerir descrições visuais (image_query)

A IA **não**:
- Controla layout
- Controla SEO
- Controla banco de dados
- Controla publicação manual

Todo o restante é engenharia tradicional.

---

## ⚙️ Arquitetura do Sistema

Frontend (GitHub Pages)
↓
Cloudflare Workers (API)
↓
Supabase (Database + Storage)
↓
IA (OpenAI - apenas conteúdo)


### Por que essa arquitetura?
- Totalmente serverless
- Baixo custo
- Escalável
- Fácil manutenção
- Ideal para portfólio profissional

---

## 🖥️ Frontend

- HTML5 semântico
- CSS moderno
- JavaScript puro (Vanilla JS)
- Renderização dinâmica de posts
- Lazy loading de imagens
- Estrutura pronta para SEO

### Funcionalidades:
- Listagem de notícias
- Página individual por post
- Renderização dinâmica via API
- Imagens exclusivas por notícia

---

## 🌐 Backend (API)

- Desenvolvido com **Cloudflare Workers**
- API REST simples e eficiente
- Controle de geração diária de posts
- Integração com Supabase
- Integração com IA

### Endpoints principais:
- `GET /posts`
- `POST /generate-daily-posts`

---

## 🗄️ Banco de Dados e Storage

Utiliza **Supabase**:

### Banco de dados
Tabela `posts` contendo:
- title
- excerpt
- content
- category
- tags
- image (URL)
- date
- views
- is_trending

### Storage
- Bucket de imagens
- Cada notícia possui imagem exclusiva
- URLs públicas e persistentes

---

## 🖼️ Sistema de Imagens

- Cada notícia recebe uma imagem exclusiva
- As imagens são relacionadas diretamente ao post
- URLs estáveis (não temporárias)
- SEO-friendly
- Performance otimizada

---

## 🚀 SEO e Performance

O projeto foi estruturado para:

- Titles dinâmicos por página
- Meta description dinâmica
- HTML semântico
- Apenas um `<h1>` por página
- URLs limpas
- Imagens com `alt`
- Lazy loading
- Baixo JavaScript bloqueante

Resultado:
- Indexável
- Leve
- Pronto para Google Search Console

---


## 🛠️ Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- Cloudflare Workers
- REST API

### Banco de Dados
- Supabase (PostgreSQL)
- Supabase Storage

### IA
- OpenAI API (recomendação e post do conteudo)

### Deploy
- GitHub Pages
- Cloudflare

---

## 📈 Projeção do Projeto

Este projeto pode evoluir facilmente para:

- Portal monetizado
- CMS com painel administrativo
- Cache avançado
- SSR/SSG
- CDN de imagens
- Publicação manual + automática
- Integração com redes sociais

---

## 🧩 Objetivo do Projeto

Este projeto foi desenvolvido como:

- Portfólio profissional
- Demonstração de arquitetura moderna
- Prova de domínio em frontend, backend e integração de serviços
- Exemplo real de uso responsável de IA

---

## 👤 Autor

**Mykael Davi**  
Analista e Desenvolvedor de Sistemas  
Foco em Frontend, UI/UX e Arquitetura Web  

---

## ⚠️ Observação

Este projeto **não depende de frameworks**, demonstrando domínio da base da web e capacidade de construir soluções escaláveis com baixo overhead.

---

📌 *Projeto pronto para apresentação profissional, revisão técnica e expansão futura.*
