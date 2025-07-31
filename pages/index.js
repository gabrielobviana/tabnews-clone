function Home() {
  return (
    <h1>
      Acabei de assistir a um vídeo mostrando como o Notion lida com mais de 200 bilhões de blocos 
      (notas, páginas, tabelas…) sem travar. O que me chamou atenção foi a clareza arquitetural nas 
      escolhas que eles fizeram, e que fazem todo sentido pra quem já enfrentou dores de crescimento 
      exponencial.

      O segredo?
      Eles dividem os dados por `workspace_id` em múltiplos bancos Postgres shardados. Assim, cada 
      workspace só toca no que precisa.

      E mais importante: separam completamente as cargas transacionais (OLTP) das cargas analíticas 
      e de IA (OLAP), usando um data lake com Kafka, Hudi e Spark em S3.

      Por que isso importa?
      É muito comum vermos sistemas tentando fazer tudo no mesmo banco: serve request do cliente, 
      gera relatório, treina modelo… tudo junto. Isso até funciona no começo, mas vira gargalo rapidinho.

      Boas práticas que você pode aplicar agora mesmo (sem precisar escalar até o nível do Notion):
      1. Pense a modelagem já separando o que é interação do usuário vs dados para análise.
      2. Considere usar exportações incrementais (CDC, snapshotting, etc.) para manter um repositório 
      analítico leve e desacoplado.
      3. Crie pipelines que reflitam essa separação de responsabilidades, isso traz clareza, performance 
      e menor acoplamento.
      4. Esse vídeo mostrou que escalar exige decisões arquiteturais simples, e principalmente,
      disciplina para mantê-las. E o Notion é um baita exemplo disso.

      Fica a dica pra quem está construindo algo que precisa durar.
    </h1>
  );
}

export default Home;