// index.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Ejemplo: Obligar a que el tipo de commit siempre sea en minúsculas
    'type-case': [2, 'always', 'lowercase'],
    // Ejemplo: Permitir únicamente ciertos tipos adaptados al proyecto
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nuevas funcionalidades
        'fix',      // Corrección de errores
        'docs',     // Documentación
        'style',    // Estilos, espacios, formateo
        'refactor', // Refactorización de código
        'test',     // Pruebas
        'chore',    // Tareas de mantenimiento
        'ci',       // Integración continua
        'locale'    // Opcional: para traducciones/internacionalización del proyecto
      ]
    ],
    // Ejemplo: Forzar a que la descripción del commit no termine en punto
    'subject-full-stop': [2, 'never', '.'],
  }
};
cc