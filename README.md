# Processamento Gráfico - Projeto 3

Integrantes do grupo:
* Arthur Felipe
* Crismerlyn Paiva
* Matheus Volpon
* Miguel Braz
* Yu Han

## Objetivos e Requisitos
Criar e visualizar uma cena 3D, mapeando os conceitos estudados na disciplina.
* Visualização de pelo menos 1 objeto 3D por membro do grupo, redimensionando e posicionando cada objeto individualmente no ambiente virtual;
* Definição de pelo menos uma câmera.

## Especificações e Implementações
Todo o projeto foi construído a partir da biblioteca gráfica [three.js](https://threejs.org/) e as etapas de construção estão listadas abaixo:
* Criação da cena, com adição de uma câmera e configuração de iluminação;
* Foram criados objetos gráficos tridimensionais a partir dos métodos Geometry (TorusKnotGeometry, TetrahedronGeometry, SphereGeometry, BoxGeometry e LatheGeometry), utilizando-se parâmetros para custimzar cada objeto (cor, número de vértices, número de arestas, entre outros);
* Inserção dos objetos na cena e transformação (translação em eixos, rotação e escala) dos mesmos;
* Renderização dos objetos em conjunto com a cena.

## Execução
Visto que o projeto se utiliza de objetos criados manualmente a partir da biblioteca gráfica, não é necessário executar um servidor local no diretório do projeto. Para visualizar nosso projeto, siga os passos a baixo:
* clone o repositório, seja baixando o ```.zip``` (e descompactando-o) ou através de ```git clone```;
* abra o arquivo ```index.html``` em seu navegador, por meio de duplo clique sobre ele ou arrastando-o até a janela do navegador.

## Próximos Passos
* Incluir pelo menos três movimentos, sendo pelo menos um deles dependente de outro;
* Definir pelo menos duas câmeras;
* Alterar a projeção de uma das câmeras;
* Definir interações que alteram câmeras e movimentos.
