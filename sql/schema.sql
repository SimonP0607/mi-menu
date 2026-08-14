DROP TABLE IF EXISTS platos;
DROP TABLE IF EXISTS chefs;

CREATE TABLE chefs (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  especialidad VARCHAR(100) NOT NULL
);

CREATE TABLE platos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio NUMERIC(10, 2) NOT NULL,
  disponibles INTEGER NOT NULL,
  categoria VARCHAR(50),
  chef_id INTEGER REFERENCES chefs(id)
);

INSERT INTO chefs (nombre, especialidad) VALUES
  ('Laura Mendez', 'Comida rapida'),
  ('Marco Rossi', 'Cocina italiana'),
  ('Ana Torres', 'Cocina saludable');

INSERT INTO platos (nombre, descripcion, precio, disponibles, categoria, chef_id) VALUES
  ('Hamburguesa clasica', 'Carne de res, queso cheddar, lechuga, tomate y pan artesanal.', 8.50, 12, 'Plato fuerte', 1),
  ('Pizza margarita', 'Salsa de tomate, mozzarella fresca y hojas de albahaca.', 10.00, 5, 'Plato fuerte', 2),
  ('Pasta Alfredo', 'Fetuccini en salsa cremosa de mantequilla y queso parmesano.', 9.75, 0, 'Plato fuerte', 2),
  ('Ensalada Cesar', 'Lechuga romana, crutones, parmesano y aderezo Cesar.', 6.25, 8, 'Entrada', 3);
