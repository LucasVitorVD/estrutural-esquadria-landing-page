# Projeto: novo site da Estrutural Esquadrias

Este arquivo é o contexto do projeto. Leia tudo antes de começar e consulte sempre que houver dúvida de escopo, tom ou design. Os materiais de design (inspirações, logo e outros) estão no arquivo `.pen` do projeto; leia esse arquivo antes de decidir cores, fontes e estilo. Fotos e imagens soltas, quando existirem, ficam na pasta `/assets` (ou na indicada pelo desenvolvedor).

## 1. Quem é o cliente

- **Empresa:** Estrutural Esquadrias, Brasília-DF. Atua desde 2017.
- **O que faz:** projeta, fabrica e instala esquadrias de alumínio sob medida, vidros temperados, fachadas (pele de vidro e ACM), portas e janelas, brise (camarão em ripado), portões, boxes e claraboias.
- **Público:** construtoras, arquitetos, engenheiros e proprietários de obras residenciais e comerciais no DF e entorno.
- **Diferenciais reais (usar no texto):** fábrica própria, showroom, estoque a pronta entrega, projeto sob demanda com instalação por equipe própria.
- **Site atual:** estruturalesquadriasdf.com.br (WordPress com tema pronto, de 2017, com conteúdo de modelo, certificado HTTPS vencido, poucas informações). O site novo substitui o atual.

### Dados de contato (confirmar com a empresa antes de publicar)
- Showroom: SIA Trecho 3/4 Lotes 625/695, Loja 34, Shopping SIA Center Mall, Brasília-DF
- Fábrica: endereço a confirmar (há um mapa no site atual, perto da Via Marginal / DF-095)
- Telefone/WhatsApp: (61) 98215-3370
- E-mail: contato@estruturalesquadriasdf.com.br
- Horário: segunda a sexta, 8h às 17h30

## 2. Objetivo do site

1. Levar o visitante ao contato com um consultor (WhatsApp, telefone) e à visita ao showroom. **Não haverá formulário nem fluxo de orçamento online**: a empresa fecha negócio presencialmente, porque isso passa mais confiança ao cliente.
2. Aparecer melhor no Google para buscas locais (Brasília e DF).
3. Passar a solidez de uma fábrica com showroom, com visual moderno.
4. Ser fácil de manter. No lançamento o conteúdo é estático (ver seção 5); o painel de edição para a equipe só será implementado bem depois, com o site pronto.

## 3. Sentimento e direção de design

**Palavras-chave:** moderno, minimalista, sólido, confiável, limpo, arquitetônico, premium sem ser frio.

Referências (estão no arquivo `.pen` do projeto, junto com as inspirações e o logo):
- Landing page de construtora (layout com topo em foto grande, cards de cantos arredondados, bloco escuro para depoimentos, contato limpo no final).
- florense.com/en: fotos grandes e limpas, muito espaço em branco, interface quase invisível.
**Usar só como inspiração de estrutura e nível de acabamento. Não copiar layout, textos ou imagens de ninguém.**

Princípios:
- **A foto é a protagonista.** Primeira tela com foto grande de obra, frase curta e um botão de ação ("Fale com um consultor" ou "Venha conhecer o showroom").
- **Muito espaço em branco**, poucos elementos por seção, textos curtos.
- **Poucas cores:** base branca e cinza-claro, texto escuro, azul-marinho do logo como cor principal e vermelho do logo só como destaque de ação (botões de ação). Não usar laranja, azul-claro nem turquesa do site antigo.
- **Tipografia:** no máximo duas famílias, ambas sem serifa. Sugestão inicial: Manrope (títulos, peso leve a médio, tamanhos grandes) e Inter (texto). Pode propor outra dupla se justificar.
- **Componentes:** cards com cantos suavemente arredondados, sombras discretas, bloco escuro para depoimentos, ícones simples de linha.
- **Mobile-first:** a maior parte do tráfego virá do celular. Botão fixo de WhatsApp e telefone clicável (`tel:`).
- **Acessibilidade:** contraste mínimo AA, foco visível no teclado, alt em todas as imagens, tamanho de toque confortável.
- As cores exatas devem ser extraídas do logo no arquivo `.pen` (não chutar hexadecimais). Se o logo tiver pouca resolução, avisar.

## 4. Estrutura do site

### Páginas
1. **Home:** topo com foto + chamada + botão de ação; faixa de pronta entrega; 3 a 6 serviços em cards; **CTA intermediário** (faixa curta convidando a falar com um consultor ou visitar o showroom); obras recentes; números e diferenciais (desde 2017, fábrica, showroom); **equipe** (cards com foto, nome, cargo e botão de WhatsApp de cada consultor); depoimentos; showroom e fábrica com mapas; **CTA final** em bloco de destaque (visite o showroom, WhatsApp e telefone).
2. **Serviços (uma página por serviço, até 8):** esquadrias de alumínio, vidros temperados, fachadas pele de vidro e ACM, portas e janelas, portões, brises, claraboias e boxes (lista final a confirmar com a empresa). Cada uma com texto próprio, fotos, perguntas frequentes curtas e CTA no final da página (falar com um consultor / visitar o showroom).
3. **Obras:** grade de fotos grandes, filtro por tipo de serviço, página de detalhe de cada obra. Entram até 12 obras no lançamento; as demais entram depois, quando houver painel de edição.
4. **Quem somos:** história, fábrica, showroom, diferenciais, com dados reais, e seção **Equipe** com foto de cada pessoa, nome, cargo e contato (só com foto e autorização da pessoa; sem foto, não exibir o card em vez de usar avatar genérico). Termina com CTA.
5. **Contato / Visite o showroom:** WhatsApp, telefone, e-mail, horário, endereço com mapas (showroom e fábrica) e botão "Como chegar". Sem formulário de orçamento.
6. **Apoio:** tipos de pintura, linhas de esquadrias, tipos de vidro (conteúdo que já existe no site atual, reorganizado), política de privacidade e política de cookies.

### Funcionalidades
- Botão de WhatsApp com mensagem pré-preenchida conforme a página visitada.
- **Sem formulário de orçamento** (a empresa prefere atendimento presencial, que gera mais confiança). Qualquer interação extra precisa ser pensada com o desenvolvedor antes. Ideias para avaliar, sem implementar por conta própria: botão "Agendar visita ao showroom" que abre o WhatsApp com mensagem pronta; botão "Fale com este consultor" em cada card da equipe; "Como chegar" com link para o Google Maps; botão de ligar (`tel:`).
- Cada CTA de WhatsApp usa mensagem pré-preenchida conforme a página.
- Aviso de cookies com opções de aceitar e recusar (o atual só tem "Aceitar todos").
- **Conteúdo estático no lançamento.** Painel de edição (CMS) fica para uma fase posterior, depois que o site estiver pronto e publicado; não implementar agora (ver seção 5).

## 5. Stack e requisitos técnicos

- **Next.js** (App Router, TypeScript), geração estática sempre que possível.
- **Estilo:** Tailwind CSS ou CSS Modules, a critério do desenvolvedor; usar variáveis para cores e fontes.
- **Imagens:** `next/image`, formatos modernos, tamanhos responsivos; fontes via `next/font`.
- **Conteúdo estático agora, CMS só depois.** Nesta fase **não implementar CMS, painel nem login**. Obras, serviços, equipe e depoimentos ficam em arquivos no repositório (JSON ou MDX em `content/`), com tipos TypeScript e um único ponto de leitura dos dados, para que um CMS possa ser plugado mais tarde sem refazer os componentes. A escolha do CMS (opção gratuita, sem restrição de uso comercial; candidatos como Sanity ou alternativas de código aberto, a verificar) é decisão futura e **deve ser perguntada ao desenvolvedor**.
- **Hospedagem:** plataforma com plano gratuito (ex.: Cloudflare Pages ou similar), conta no nome da empresa.
- **Meta de desempenho:** Lighthouse alto em mobile (performance, acessibilidade, SEO e boas práticas).

### SEO (prioridade do projeto)
- `title` e `description` próprios por página, um único `h1` por página, hierarquia de títulos correta.
- URLs limpas e em português (ex.: `/servicos/esquadrias-de-aluminio`, `/obras/...`).
- `sitemap.xml` e `robots.txt`; dados estruturados (JSON-LD) `LocalBusiness` com showroom e fábrica, horário e telefone; `Product`/`Service` onde fizer sentido.
- Open Graph e imagem de compartilhamento para WhatsApp e redes.
- Texto próprio focado em buscas locais ("esquadria de alumínio sob medida em Brasília", "vidro temperado em Brasília", "fachada de vidro DF").
- Todas as imagens com `alt` descritivo.
- **Redirecionamentos 301** das URLs antigas para as novas (o site atual tem, por exemplo, `/quem-somos/`); levantar a lista de URLs antigas antes de publicar.
- Ninguém controla o ranking: não escrever promessas de posição no Google no conteúdo.

## 6. Conteúdo

- Idioma: português do Brasil, tom profissional e direto, frases curtas.
- **Nunca inventar** dados, números, depoimentos, nomes de clientes ou obras. Usar placeholders claramente marcados (`[A CONFIRMAR]`) quando faltar informação.
- A frase "maior fábrica de esquadrias do Centro-Oeste" do site antigo **não deve ser usada** sem comprovação.
- O site antigo tem apenas 2 depoimentos e eles têm erros de digitação; usar só com revisão e autorização.
- A seção de equipe do site antigo mostra logos de parceiros em vez de pessoas; no novo, mostrar a equipe com foto real de cada pessoa, nome e cargo, só com autorização.
- Fotos reais de obras e do showroom, fornecidas pela empresa; o estilo minimalista depende de boas fotos, então sinalizar quando uma imagem estiver fraca (escura, torta ou desorganizada) em vez de escondê-la com efeitos.

## 7. Limites do projeto (não fazer)

- Não mexer em DNS, domínio nem e-mail (Registro.br e Locaweb ficam como estão); a troca de apontamento é feita pelo desenvolvedor em etapa própria.
- Não coletar nem guardar dados pessoais dos visitantes (sem formulários nem cadastro); o contato acontece por WhatsApp, telefone e visita.
- Não incluir rastreadores (analytics, pixels) que rodem antes do consentimento de cookies.
- Escopo é só o site: sem folders, impressos, redes sociais, anúncios nem gestão de e-mails.

## 8. Como trabalhar neste projeto

1. Antes de codar, leia o arquivo `.pen` (e `/assets`, se houver), proponha uma paleta e uma dupla de fontes extraídas do logo e das referências, e espere aprovação do desenvolvedor.
2. Comece por: layout base (cabeçalho, rodapé, tema), Home, uma página de serviço, Obras e Contato; depois replique as demais páginas de serviço.
3. Faça commits pequenos e descritivos. Rode lint e build antes de dizer que algo está pronto.
4. Em caso de dúvida de conteúdo ou de decisão de negócio, pergunte em vez de supor.
5. Ao final de cada etapa, resuma o que foi feito e o que depende da empresa (fotos, textos, acessos).

## 9. Ainda em aberto

- Endereço exato da fábrica e lista final de serviços.
- Fotos e depoimentos disponíveis.
- Escolha da hospedagem (conferir termos de uso comercial). O painel de edição é uma fase futura, depois do site pronto.
- Quais pessoas aparecerão na seção Equipe e quem tira as fotos (padrão de enquadramento e fundo).
- Qual CTA principal usar (WhatsApp, visita ao showroom ou ambos).
- Lista de URLs antigas para redirecionar.
- Se o certificado vencido e a hospedagem atual estão no mesmo plano do e-mail (Locaweb).
