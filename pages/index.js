function Home() {
  return (
    <main>
      <h1>O que aprendi com a arquitetura do Notion</h1>

      <p>
        Acabei de assistir a um vídeo mostrando como o Notion lida com mais de 200 bilhões de blocos 
        (notas, páginas, tabelas…) sem travar. O que me chamou atenção foi a clareza arquitetural nas 
        escolhas que eles fizeram, e que fazem todo sentido pra quem já enfrentou dores de crescimento 
        exponencial.
      </p>

      <h2>O segredo?</h2>
      <p>
        Eles dividem os dados por <code>workspace_id</code> em múltiplos bancos Postgres shardados. 
        Assim, cada workspace só toca no que precisa.
      </p>
      <p>
        E mais importante: separam completamente as cargas transacionais (OLTP) das cargas analíticas 
        e de IA (OLAP), usando um data lake com Kafka, Hudi e Spark em S3.
      </p>

      <h2>Por que isso importa?</h2>
      <p>
        É muito comum vermos sistemas tentando fazer tudo no mesmo banco: servir request do cliente, 
        gerar relatório, treinar modelo… tudo junto. Isso até funciona no começo, mas vira gargalo rapidinho.
      </p>

      <h2>Boas práticas que você pode aplicar agora mesmo</h2>
      <ul>
        <li>Pense a modelagem já separando o que é interação do usuário vs dados para análise.</li>
        <li>Considere usar exportações incrementais (CDC, snapshotting, etc.) para manter um repositório analítico leve e desacoplado.</li>
        <li>Crie pipelines que reflitam essa separação de responsabilidades, isso traz clareza, performance e menor acoplamento.</li>
        <li>Escalar exige decisões arquiteturais simples, e disciplina para mantê-las.</li>
      </ul>

      <p>Fica a dica pra quem está construindo algo que precisa durar.</p>
    </main>
  );
}

export default Home;
