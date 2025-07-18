**Relke QA Challenge – Automatización con Playwright**

Este repositorio contiene la automatización de la prueba técnica para **Relke**, desarrollada con **Playwright** y **TypeScript**.  
El objetivo fue automatizar el flujo de creación de una **Nota de Venta**, incluyendo login, navegación y validaciones de campos.

---
**Requisitos previos**

1. **Node.js 18+**  
   - Descargar desde [https://nodejs.org](https://nodejs.org) (LTS recomendado).  
   - Durante la instalación, marcar **"Add to PATH"**.

2. Verificar instalación de Node y npm 
   Abrir **CMD** o **PowerShell**:
   node -v    *Debe mostrar v18 o superior
   npm -v     *Debe mostrar versión de npm
   

3. Clonar el repositorio

   git clone https://github.com/tu_usuario/relke-qa-respuesta.git
   cd relke-qa-respuesta
   

4. Instalar dependencias del proyecto**  npm install

---

**Ejecución de los tests**

Para ejecutar los tests automatizados:

1. Modo Headless (rápido, sin abrir navegador) : npx playwright test

2. Modo Headed (con navegador visible) : **npx playwright test --headed** , en mi caso ocupe esta manera 

---

**Flujo Automatizado

El test principal se encuentra en: tests/nota_de_venta.spec.ts

### **Validaciones cubiertas:**
1. Login con credenciales de prueba (`qa_junior@relke.cl` / `Demo123456!`).
2. Navegación:`Ventas → Notas de Venta`.
3. Creación de Nota de Venta con selección de:
   - Documento tributario.
   - Sucursal **"Casa Matriz"** y bodega **"Principal"**.
   - Cliente **"FALABELLA"**.
   - Contacto y canal de venta **"Web"**.
   - Moneda **"Pesos"**.
   - Producto y cantidad.
4. Mensajes en consola (`console.log`) y `test.step`** para confirmar cada etapa.

---

**Problemas y Soluciones

-Selectores Dinámicos: Algunos campos usan IDs dinámicos (`product_id`, `quantity`). Se resolvió con selectores como:  
  **const productoSelector = '[id^="select2-sales_note_e_document_products_attributes_"][id$="_product_id-container"]';**  

-Errores de Timeout:Se ajustaron tiempos de espera con `waitForSelector` y `waitForLoadState('networkidle')`.
-`npx` no reconocido en local:**  
- Solución: reinstalar Node.js y agregar al PATH.
- Migración a GitHub:Cambié el remoto de Bitbucket a GitHub para entregar el trabajo.
- GitHub Actions:Flujo CI con **`upload-artifact@v4`** para subir reportes HTML.

---

**Log de Aprendizaje

1. Adapté mis conocimientos previos en **Java + Cucumber + Eclipse** para Playwright con TypeScript.
2. Descubrí que los errores frecuentes eran por **selectores dinámicos**, lo resolví tras consultar la IA.
3. Mejoré el debugging con **`test.step` y console.log** para validar cada fase.
4. Solucioné errores de configuración de **Node.js/npx** en local.
5. Configuré correctamente el CI en GitHub y finalicé la prueba a tiempo con éxito.

---

**Autor
Sergio Mellado  
Estudiante de Ingeniería en Informática – QA Automation Enthusiast
