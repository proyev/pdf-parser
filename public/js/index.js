document.addEventListener('DOMContentLoaded', () => {

   const uploadButton = document.getElementById('import-pdf-button');
   const chooseDocument = document.getElementById('import-pdf');
   const textViewer = document.getElementById('text-viewer');

   const fileReader = new FileReader();

   uploadButton.addEventListener('click', event => chooseDocument.click());
   chooseDocument.addEventListener('change', async event => {

      if (chooseDocument.files[0]) {
         try {
            //does not emit a signal once being done loading - idk why
            // fileReader.addEventListener('loadend', event => {
               console.log('File loaded');
               try {
                   textViewer.value = await importPDF(chooseDocument.files[0]);
               } catch(err) {
                  alert(err);
               }
            // });
         } catch (err) {
            alert(err);
         }
      }
   });
});