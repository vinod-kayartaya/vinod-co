import React, { useState } from 'react';

const FileUpload = ({ onError, onSuccess }) => {
    const [file, setFile] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            onError('');
        } else {
            setFile(null);
            onError('Please select an image file (png or jpeg)');
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();

        if (file) {
            let formData = new FormData();
            formData.append('file', file);

            fetch('http://localhost:4000/upload-image', {
                method: 'POST',
                body: formData,
            })
                .then((resp) => resp.json())
                .then(onSuccess)
                .catch((error) => {
                    onError(error.message);
                });
        }
    };

    return (
        <form>
            <input type='file' onChange={handleChange} />
            <button type='submit' onClick={handleUpload}>
                Upload
            </button>
        </form>
    );
};

export default FileUpload;
