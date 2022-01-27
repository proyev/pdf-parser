function importPDF(file) {
    const formData = new FormData();

    formData.append('pdf', file);
    return fetch('/upload', {
        method: 'POST',
        body: formData
    }).then(res => {
        if (res.ok) {
            return res.text();
        } else {
            throw new Error(res.status + res.statusText);
        }
    }).catch(err => alert(err.message));
}