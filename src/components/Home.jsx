import React, { useState, useEffect } from 'react';

    function Home() {
      const [products, setProducts] = useState([]);
      const [currencies, setCurrencies] = useState([]);

      useEffect(() => {
        fetch('/api/products')
          .then(res => res.json())
          .then(data => setProducts(data));

        fetch('/api/currencies')
          .then(res => res.json())
          .then(data => setCurrencies(data));
      }, []);

      return (
        <div>
          <h2>Home</h2>
          <input type="text" placeholder="Tracking #" />
          <button>Track order</button>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>FOB SDPZU</th>
                <th>CNF AEJEA</th>
                <th>CNF INACH1</th>
                <th>CNF CNAHK</th>
                <th>CNF TRMER</th>
                <th>Price</th>
                <th>Last update</th>
                <th>Forecast</th>
                <th>Request a</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.fob_sdpzu}</td>
                  <td>{product.cnf_aejea}</td>
                  <td>{product.cnf_inach1}</td>
                  <td>{product.cnf_cnahk}</td>
                  <td>{product.cnf_trmer}</td>
                  <td>
                    {product.price_history.map((price, index) => (
                      <React.Fragment key={index}>
                        {price.value} <span style={{ color: price.indicator === 'up' ? 'green' : 'red' }}>{price.indicator === 'up' ? '^' : 'V'}</span><br />
                      </React.Fragment>
                    ))}
                  </td>
                  <td>{product.last_update}</td>
                  <td><span style={{ color: product.forecast === 'up' ? 'green' : 'red' }}>{product.forecast === 'up' ? '^' : 'V'}</span></td>
                  <td>
                    <button>Quotation</button>
                    <button>Sample</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="currency-table">
            <thead>
              <tr>
                <th></th>
                <th>Central Bank</th>
                <th>Parallel Market</th>
                <th>Indicator</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map(currency => (
                <tr key={currency.id}>
                  <td><img src={currency.flag} alt={`${currency.name} Flag`} /> {currency.name}, {currency.unit}</td>
                  <td>{currency.central_bank}</td>
                  <td>{currency.parallel_market}</td>
                  <td><span style={{ color: currency.indicator === 'up' ? 'green' : 'red' }}>{currency.indicator === 'up' ? '^' : 'V'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    export default Home;
