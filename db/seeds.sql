INSERT INTO department (name) --ID is included automatically and increments by one--
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id) --ID is included automatically and increments by one--
VALUES
('Sales Lead', 100000, 4),
('Salesrep', 80000, 4),
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1),
('Account Manager', 160000, 2),
('Accountant', 125000, 2),
('Legal Team Lead', 250000, 3),
('Lawyer', 190000, 3);

INSERT INTO emplyee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, null)
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 3, null),
('Kevin', 'Tupik', 4, 3),
('Kunal', 'Singh', 5, null),
('Malia', 'Brown', 6, 5),
('Sarah', 'Lourd', 7, null),
('Tom', 'Allen', 8, 7);
