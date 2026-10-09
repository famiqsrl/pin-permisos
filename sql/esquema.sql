-- Tablas de roles y permisos de la PIN (MySQL). Idempotente: se puede correr
-- en cada deploy; si una tabla ya existe no la toca.
--
-- Va antes de sincronizar.sql. Lo puede correr cualquier consumidor (backend-pin
-- con app:permissions:sync, backend-go con permisos.Sincronizar o mysql a mano).

CREATE TABLE IF NOT EXISTS permissions (
    id INT AUTO_INCREMENT NOT NULL,
    slug VARCHAR(80) NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(40) NOT NULL,
    active TINYINT(1) DEFAULT 1 NOT NULL,
    `order` INT DEFAULT 0 NOT NULL,
    created_at DATETIME DEFAULT NULL,
    updated_at DATETIME DEFAULT NULL,
    UNIQUE INDEX uniq_permissions_slug (slug),
    INDEX idx_permissions_type (type),
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT NOT NULL,
    slug VARCHAR(60) NOT NULL,
    name VARCHAR(80) NOT NULL,
    description VARCHAR(255) DEFAULT NULL,
    legacy_role VARCHAR(60) DEFAULT NULL,
    `system` VARCHAR(20) DEFAULT 'pin' NOT NULL,
    active TINYINT(1) DEFAULT 1 NOT NULL,
    `order` INT DEFAULT 0 NOT NULL,
    created_at DATETIME DEFAULT NULL,
    updated_at DATETIME DEFAULT NULL,
    UNIQUE INDEX uniq_roles_slug (slug),
    INDEX idx_roles_system (`system`),
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS role_has_permissions (
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    INDEX idx_rhp_permission (permission_id),
    PRIMARY KEY (role_id, permission_id),
    CONSTRAINT fk_rhp_role FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE,
    CONSTRAINT fk_rhp_permission FOREIGN KEY (permission_id) REFERENCES permissions (id) ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB;

-- Sin CASCADE en el rol: borrar un rol asignado tiene que fallar.
CREATE TABLE IF NOT EXISTS model_has_roles (
    role_id INT NOT NULL,
    model_type VARCHAR(40) NOT NULL,
    model_id INT NOT NULL,
    INDEX idx_mhr_model (model_type, model_id),
    PRIMARY KEY (role_id, model_type, model_id),
    CONSTRAINT fk_mhr_role FOREIGN KEY (role_id) REFERENCES roles (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS model_has_permissions (
    permission_id INT NOT NULL,
    model_type VARCHAR(40) NOT NULL,
    model_id INT NOT NULL,
    INDEX idx_mhp_model (model_type, model_id),
    PRIMARY KEY (permission_id, model_type, model_id),
    CONSTRAINT fk_mhp_permission FOREIGN KEY (permission_id) REFERENCES permissions (id) ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB;
