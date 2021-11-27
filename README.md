# Processamento Gráfico - Projeto 3

Integrantes do grupo:
* Arthur Felipe
* Crismerlyn Paiva
* Matheus Volpon
* Miguel Braz
* Yu Han

## Objetivos e Requisitos
Criar e visualizar uma cena 3D, mapeando os conceitos estudados na disciplina. Para esta fase 4 do projeto, ainda tínhamos como responsabilidade incluir ao menos 3 movimentos (um deles dependendente do outro), definir ao menos duas câmeras (alterando uma de suas projeções) e definir uma interação que alterasse os movimentos e câmeras

## Especificações e Implementações
Todo o projeto foi construído a partir da biblioteca gráfica [three.js](https://threejs.org/) e as etapas de desenvolvimento dessa fase estão listadas abaixo:
* Aplicação de movimentos de rotação, escala e translação nos 5 objetos da fase 3 do projeto. Os mesmos foram feitos através de funções independentes que, posteriormente, são chamadas na função "animate()"
* Criação de controles de transformação do objeto "cilindro" através da ferramenta GUI (cubeFolder), para a possibilidade de interação em tempo de visualização
* Criação e adição do movimento orbital ao objeto "retangulo", utilizando-se da biblioteca matemática para aplicação de seno e cosseno
* Dando início à tarefa de visualização, foram criadas 3 pontos de vista específicos numa mesma tela através do objeto "views" e métodos "PointLight", "AmbienteLight" e "PerspectiveCamera". Esta ação teve como objetivo iniciar a implementação de 3 câmeras
* Neste meio tempo, as configurações de câmeras causaram a quebra dos códigos de movimento dos objetos (citados anteriormente no primeiro tópico). Após análise e respectiva remediação (separação em etapas de definição dos objetos, definição das visões e, por fim, inicialização da cena), o código foi ajustado para ser possível visualizar os movimentos corrigidos a partir de 3 pontos de vista diferentes

## Execução
Mesmo se utilizando de objetos criados manualmente a partir da biblioteca gráfica, o repositório com o projeto foi hospedado na Vercel, uma foram de hospedagem gratuita com o domínio (link) gerado automaticamente. Assim, para vizualizar o nosso projeto basta clicar no seguinte link: https://pg-parte4.vercel.app/

Fim :D
