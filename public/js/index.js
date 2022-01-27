document.addEventListener('DOMContentLoaded', () => {

   const uploadButton = document.getElementById('import-pdf-button');
   const chooseDocument = document.getElementById('import-pdf');

   uploadButton.addEventListener('click', (event) => chooseDocument.click());

});