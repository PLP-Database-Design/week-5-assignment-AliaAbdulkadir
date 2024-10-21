const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001; 

// Question 1 goes here
const patients = [
    { patient_id: 1, first_name: '', last_name: '', date_of_birth: '1990-01-01' },
    { patient_id: 2, first_name: '', last_name: '', date_of_birth: '1985-05-10' },
    { patient_id: 3, first_name: '', last_name: '', date_of_birth: '1975-07-15' }
];

// GET endpoint to retrieve all patients
app.get('/patients', (req, res) => {
    // Respond with the array of patients
    res.json(patients);
});



// Question 2 goes here

const providers = [
    { provider_id: 1, first_name: '', last_name: '', provider_specialty: 'Cardiology' },
    { provider_id: 2, first_name: '', last_name: '', provider_specialty: 'Dermatology' },
    { provider_id: 3, first_name: '', last_name: '', provider_specialty: 'Pediatrics' }
];

// GET endpoint to retrieve all providers
app.get('/providers', (req, res) => {
    // Respond with the array of providers
    res.json(providers);
});


// Question 3 goes here


const patients = [
    { patient_id: 1, first_name: '', last_name: '', date_of_birth: '1990-01-01' },
    { patient_id: 2, first_name: '', last_name: '', date_of_birth: '1985-06-15' },
    { patient_id: 3, first_name: '', last_name: '', date_of_birth: '2000-12-20' }
];

// GET endpoint to retrieve patients by their first name
app.get('/patients', (req, res) => {
    const firstName = req.query.first_name; // Extract first_name from query parameter

    if (!firstName) {
        return res.status(400).json({ message: 'Please provide a first name' });
    }

    // Filter patients by first name (case-insensitive)
    const filteredPatients = patients.filter(patient =>
        patient.first_name.toLowerCase() === firstName.toLowerCase()
    );

    // If no patients found, return a message
    if (filteredPatients.length === 0) {
        return res.status(404).json({ message: `No patients found with first name ${firstName}` });
    }

    // Return the filtered list of patients
    res.json(filteredPatients);
});





// Question 4 goes here

const providers = [
    { provider_id: 1, first_name: '', last_name: '', provider_specialty: 'Cardiology' },
    { provider_id: 2, first_name: '', last_name: '', provider_specialty: 'Dermatology' },
    { provider_id: 3, first_name: '', last_name: '', provider_specialty: 'Cardiology' },
    { provider_id: 4, first_name: '', last_name: '', provider_specialty: 'Pediatrics' }
];

// GET endpoint to retrieve providers by their specialty
app.get('/providers', (req, res) => {
    const specialty = req.query.specialty; // Get specialty from query parameter

    if (!specialty) {
        return res.status(400).json({ message: 'Please provide a specialty' });
    }

    // Filter providers by their specialty (case-insensitive)
    const filteredProviders = providers.filter(provider =>
        provider.provider_specialty.toLowerCase() === specialty.toLowerCase()
    );

    // If no providers found, return a message
    if (filteredProviders.length === 0) {
        return res.status(404).json({ message: `No providers found with specialty ${specialty}` });
    }

    // Return the filtered list of providers
    res.json(filteredProviders);
});


// listen to the server

app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
});