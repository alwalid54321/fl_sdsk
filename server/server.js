const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = 3000;

    app.use(cors());
    app.use(express.json());

    const products = [
      {
        id: 1,
        name: 'A1',
        fob_sdpzu: 1200,
        cnf_aejea: 1800,
        cnf_inach1: 2100,
        cnf_cnahk: 1450,
        cnf_trmer: 1600,
        price_history: [
          { value: 1300, indicator: 'down' },
          { value: 1400, indicator: 'up' },
          { value: 1500, indicator: 'up' },
        ],
        last_update: '2 hours',
        forecast: 'up',
      },
      {
        id: 2,
        name: 'A2',
        fob_sdpzu: 1750,
        cnf_aejea: 1830,
        cnf_inach1: 2400,
        cnf_cnahk: 2380,
        cnf_trmer: 3100,
        price_history: [
          { value: 850, indicator: 'down' },
          { value: 900, indicator: 'up' },
          { value: 1100, indicator: 'up' },
        ],
        last_update: '6 hours',
        forecast: 'up',
      },
    ];

    const currencies = [
      {
        id: 1,
        name: 'UAE',
        unit: 'Dhr',
        flag: 'https://flagcdn.com/24x18/ae.png',
        central_bank: 709,
        parallel_market: 748,
        indicator: 'up',
      },
      {
        id: 2,
        name: 'USA',
        unit: 'Dollar',
        flag: 'https://flagcdn.com/24x18/us.png',
        central_bank: 2500,
        parallel_market: 2590,
        indicator: 'down',
      },
    ];

    app.get('/api/products', (req, res) => {
      res.json(products);
    });

    app.get('/api/currencies', (req, res) => {
      res.json(currencies);
    });

    app.post('/api/contact', (req, res) => {
      console.log('Contact form data:', req.body);
      res.json({ message: 'Contact form submitted successfully' });
    });

    app.post('/api/signup', (req, res) => {
      console.log('Sign up form data:', req.body);
      res.json({ message: 'Sign up form submitted successfully' });
    });

    app.post('/api/quotation', (req, res) => {
      console.log('Quotation form data:', req.body);
      res.json({ message: 'Quotation form submitted successfully' });
    });

    app.post('/api/sample', (req, res) => {
      console.log('Sample form data:', req.body);
      res.json({ message: 'Sample form submitted successfully' });
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
