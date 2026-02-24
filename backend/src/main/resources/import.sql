-- Inserindo Matérias-Primas (IDs manuais para facilitar o teste)
INSERT INTO raw_materials (id, name, stockQuantity) VALUES (1, 'Steel', 100.0);
INSERT INTO raw_materials (id, name, stockQuantity) VALUES (2, 'Plastic', 50.0);

-- Inserindo um Produto (Industrial Chair - Preço 150.0)
INSERT INTO products (id, name, price) VALUES (10, 'Industrial Chair', 150.0);

-- Associando a receita: A cadeira precisa de 2 unidades de Steel (ID 1)
INSERT INTO product_components (id, product_id, rawMaterial_id, requiredQuantity) VALUES (100, 10, 1, 2.0);

-- Opcional: Ajustar a sequência para evitar erros em novos cadastros manuais
ALTER SEQUENCE hibernate_sequence RESTART WITH 1000;