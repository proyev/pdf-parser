async function importPDF(file) {
    const formData = new FormData();

    formData.append('pdf', file);

    const res = await fetch('/upload', {
        method: 'POST',
        body: formData});
    if (res.ok) {
        const result = await res.json();
        return result.text;
    } else throw new Error(res.status + res.statusText);
}