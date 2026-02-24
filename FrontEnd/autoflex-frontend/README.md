# 🛠️ AutoFlex - Frontend (Inventory & Production Manager)

Este é o módulo de interface do usuário para o sistema de gestão da **AutoFlex**. A aplicação permite o controle total de insumos, receitas de produtos e sugestão inteligente de produção baseada em valor bruto.

## 🚀 Tecnologias Utilizadas

* **React (Vite)**: Estrutura principal para uma interface rápida e reativa.
* **Redux Toolkit**: Gerenciamento de estado global (estoque e produtos).
* **Bootstrap 5**: Garantia de responsividade e layout industrial [RNF003].
* **Axios**: Integração com a API Quarkus.
* **Intl API**: Formatação de moeda para o padrão brasileiro (BRL).

## 📋 Funcionalidades Implementadas

* **Dashboard de Produção (RF008)**: Algoritmo que sugere a quantidade de produtos a produzir priorizando itens de maior valor.
* **Gestão de Matérias-Primas (RF006)**: CRUD completo para controle de estoque de insumos.
* **Associação Produto/Receita (RF007)**: Interface integrada para definir quais materiais compõem cada produto.

## 🔧 Como Executar

1.  **Instale as dependências**:
    ```bash
    npm install
    ```

2.  **Configure a URL da API**:
    Verifique se o arquivo de serviço (ex: `api.js`) está apontando para `http://localhost:8080`.

3.  **Inicie a aplicação**:
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador**:
    `http://localhost:5173`

## 🏗️ Estrutura de Pastas

* `/src/app`: Configuração da Store do Redux.
* `/src/features`: Slices e lógica de comunicação com o backend (CORS handles).
* `/src/components`: Componentes visuais (Dashboard, Cruds).
* `/src/assets`: Logos e identidades visuais da AutoFlex.

---
**Desenvolvido como parte do Teste Prático de Engenharia de Software.**

## 📊 Evidências de Sucesso

### Testes Automatizados (E2E)
A interface foi validada utilizando Cypress, cobrindo os seguintes pontos:
- [x] Renderização correta do Dashboard de Produção.
- [x] Validação do cálculo de Valor Bruto Estimado (**R$ 7.500,00**).
- [x] Verificação da lógica de sugestão (Produto: **Industrial Chair** | Quantidade: **50 un**).

> **Status:** 100% dos testes passando (Check verde no Cypress Runner).

### Backend e Persistência
- [x] Tabelas migradas com sucesso para Oracle DB via Hibernate.
- [x] API REST protegida contra erros de CORS para integração com React.
- [x] Testes de integração Quarkus finalizados com `BUILD SUCCESS`.