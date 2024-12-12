// FLICKITY SLIDER
const elem = document.querySelector('.image-slider');
const flkty = new Flickity(elem, {
    cellAlign: 'center', 
    contain: true,       
    wrapAround: true,    
    autoPlay: 3000,      
    pageDots: true,      
    prevNextButtons: true 
});

// FORM
document.addEventListener('DOMContentLoaded', () => {
    const validation = new JustValidate('#catering-form');

    validation
        .addField('#name', [
            { rule: 'required', errorMessage: 'Full name is required' },
            { rule: 'minLength', value: 3, errorMessage: 'Name must be at least 3 characters' },
        ])
        .addField('#email', [
            { rule: 'required', errorMessage: 'Email address is required' },
            { rule: 'email', errorMessage: 'Email is not valid' },
        ])
        .addField('#phone', [
            { rule: 'required', errorMessage: 'Phone number is required' },
            { rule: 'minLength', value: 10, errorMessage: 'Phone number must be at least 10 digits' },
        ])
        .addField('#date', [
            { rule: 'required', errorMessage: 'Event date is required' },
        ])
        .addField('#details', [
            { rule: 'required', errorMessage: 'Event details are required' },
            { rule: 'minLength', value: 10, errorMessage: 'Details must be at least 10 characters' },
        ])
        .onSuccess((event) => {
            alert('Form submitted successfully!');
        });
});