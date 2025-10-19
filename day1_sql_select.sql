-- 🧠 Day 1 - SQL Basics
-- Topic: SELECT * FROM students

-- Step 1: Create a sample table
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    score INTEGER
);

-- Step 2: Insert sample data
INSERT INTO students (id, name, score) VALUES
(1, 'Victoria', 95),
(2, 'James', 88),
(3, 'Grace', 76),
(4, 'John', 82);

-- Step 3: Select all data
SELECT * FROM students;

-- Step 4: Select specific columns
SELECT name, score FROM students;

-- Step 5: Filter results (WHERE)
SELECT * FROM students WHERE score > 80;

