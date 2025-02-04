-- Initialisation des tables
-- Initialisation des tables
INSERT INTO Country(id, code, name)
VALUES (1, 'FR', 'France'), -- Les clés sont déclarées auto-générées
       (2, 'UK', 'United Kingdom'),
       (3, 'US', 'United States of America');
-- Si on fixe les clés auto-générées, il faut réinitialiser le compteur
-- Attention, cette commande n'est pas standard SQL
-- ici la syntaxe pour PostgreSQL
ALTER SEQUENCE country_id_seq RESTART WITH 4;