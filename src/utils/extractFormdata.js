export const extractFormData = (formData) => {
    const data = {};
    formData.foreach((value, key) => {
        data[key] = value;
    });

    return data;
}