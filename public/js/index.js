document.addEventListener('DOMContentLoaded', () => {

   const uploadButton = document.getElementById('import-pdf-button');
   const chooseDocument = document.getElementById('import-pdf');
   const textViewer = document.getElementById('text-viewer');

   //replaces input-file click(styling purposes)
   uploadButton.addEventListener('click', event => chooseDocument.click());

   //handles document selection
   chooseDocument.addEventListener('change', async event => {

      //will be triggered only if a document indeed selected
      if (chooseDocument.files[0]) {
         // const fileReader = new FileReader();

         try {
            //does not emit a signal once being done loading - idk why
            // fileReader.addEventListener('loadend', async event => {
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