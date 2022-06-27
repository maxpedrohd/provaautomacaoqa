Feature: Acessar ecommerce e adicionar produto ao carrinho

    Scenario: CT-001 Acessar ecommerce e adicionar produto ao carrinho
        Given Eu acesso o site LeroyMerlin
        When Selecionar um produto
        When Clicar em comprar
        Then Verifico que o produto estar no carrinho