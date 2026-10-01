-- Contrato de resolución de permisos de la PIN.
--
-- Devuelve los slugs de los permisos efectivos de un sujeto (por ahora siempre
-- model_type = 'user', model_id = usuario.id). Cualquier servicio que resuelva
-- permisos por su cuenta tiene que usar exactamente esta regla:
--
--   permisos efectivos = permisos directos del sujeto
--                      ∪ permisos de sus roles activos
--   y de esos, solo los permisos activos.
--
-- Para varios sujetos (por ejemplo, el usuario más sus grupos), se repite cada
-- rama con un OR de pares (model_type, model_id).
--
-- Las tablas las crea y mantiene backend-pin (migraciones Doctrine). Este
-- archivo no es una migración.

SELECT DISTINCT p.slug
FROM permissions p
WHERE p.active = 1
  AND p.id IN (
      SELECT mhp.permission_id
      FROM model_has_permissions mhp
      WHERE mhp.model_type = :model_type
        AND mhp.model_id = :model_id

      UNION

      SELECT rhp.permission_id
      FROM model_has_roles mhr
      JOIN roles r ON r.id = mhr.role_id AND r.active = 1
      JOIN role_has_permissions rhp ON rhp.role_id = r.id
      WHERE mhr.model_type = :model_type
        AND mhr.model_id = :model_id
  )
ORDER BY p.slug;
