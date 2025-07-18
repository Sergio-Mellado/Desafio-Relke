import { test, expect } from '@playwright/test';

test('Login y navegación inicial a Nota de Venta', async ({ page }) => {
  await page.goto('/');

  await test.step('Paso 1: Login', async () => {
    await page.getByPlaceholder('Correo Electrónico').fill('qa_junior@relke.cl');
    await page.getByPlaceholder('Contraseña').fill('Demo123456!');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await expect(page.locator('.navbar-brand')).toBeVisible({ timeout: 10000 });
    console.log('Paso 1: Login Completado');
  });

  await test.step('Paso 2: Navegación a Notas de Venta', async () => {
    await page.click('.navbar-brand');
    await page.waitForLoadState('networkidle');
    await page.getByRole('link', { name: 'Ventas ' }).click();
    await page.getByRole('link', { name: 'Notas de venta' }).click();
    await page.waitForSelector('#btn-new-invoice', { timeout: 10000 });
    await expect(page.locator('#btn-new-invoice')).toBeVisible();
    console.log('Paso 2: Navegación a Notas de Venta completada');
  });

  await test.step('Paso 3: Crear Nota de Venta', async () => {
    await page.click('#btn-new-invoice');
    await page.click('text=Nota de venta'); 
    await page.waitForSelector('#select2-sales_note_branch_id-container', { timeout: 10000 });
    console.log('Paso 3: Página de Nota de Venta cargada');
  });

  await test.step('Paso 4: Selección Documento Tributario', async () => {
    await page.click('#select2-sales_note_type_document_sii-container'); 
    await page.fill('.select2-search__field', 'BOLETA ELECTRÓNICA'); 
    await page.keyboard.press('Enter');
    console.log('Paso 4: Documento Tributario "Boleta Electrónica" seleccionado');
  });

await test.step('Paso 5: Selección Sucursal y Bodega', async () => {
  await page.click('#select2-sales_note_branch_id-container');
  await page.waitForSelector('.select2-search__field', { timeout: 5000 });
  await page.fill('.select2-search__field', 'Casa matriz');
  await page.keyboard.press('Enter');
  console.log('Paso 5: Sucursal "Casa Matriz" seleccionada');

  await page.click('#select2-sales_note_ware_house_id-container');
  await page.waitForSelector('.select2-search__field', { timeout: 5000 });
  await page.fill('.select2-search__field', 'Principal');
  await page.keyboard.press('Enter');
  console.log('Paso 6: Bodega seleccionada "Principal"');
});

  await test.step('Paso 6: Seleccionar Cliente', async () => {
    await page.click('#select2-sales_note_customer_id-container');
    await page.fill('.select2-search__field', 'FALABELLA');
    await page.waitForSelector('.select2-results__option', { timeout: 5000 }); 
    await page.keyboard.press('Enter');
    console.log('Paso 7: Cliente seleccionado "FALABELLA"');
  });

  await test.step('Paso 7: Agregar Contacto y Canal', async () => {
    await page.click('#sales_note_contact');
    await page.fill('#sales_note_contact', 'Correoprueba@correo.cl');
    console.log('Paso 8: Agregar Contacto');

    await page.click('#select2-sales_note_channel_id-container'); 
    await page.fill('.select2-search__field', 'Web');              
    await page.keyboard.press('Enter'); 
    console.log('Paso 9: Canal de Venta "Web" seleccionado');
  });

  await test.step('Paso 8: Moneda', async () => {
    await page.click('#select2-sales_note_currency-container'); 
    await page.fill('.select2-search__field', 'Pesos');    
    await page.keyboard.press('Enter');
    console.log('Paso 10: Moneda "Pesos" seleccionada');
  });

  await test.step('Paso 9: Agregar Producto', async () => {
    const productoSelector = '[id^="select2-sales_note_e_document_products_attributes_"][id$="_product_id-container"]';
    await page.waitForSelector(productoSelector, { timeout: 10000 });
    await page.click(productoSelector);
    await page.fill('.select2-search__field', 'Licencia Win10 xp 2017');
    await page.keyboard.press('Enter');
    console.log('Paso 11: Producto agregado con éxito');
  });

  await test.step('Paso 10: Cantidad', async () => {
    const cantidadSelector = '[id^="sales_note_e_document_products_attributes_"][id$="_quantity"]';
    await page.waitForSelector(cantidadSelector, { timeout: 5000 });
    await page.fill(cantidadSelector, '1');
    await page.keyboard.press('Enter');
    console.log('Paso 12: Cantidad de Producto agregada con éxito');
    
  });

});
