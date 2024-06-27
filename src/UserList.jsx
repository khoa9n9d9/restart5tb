import React, { useState, useEffect } from 'react';
import './UserList.css'; // Import CSS file

const UserList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://192.168.12.110:2030/api/Products'
                );
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="user-list-container">
            <h1>Product List retsrt 5tb</h1>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.content}</td>
                            <td><img src={product.image1} alt={product.name} className="product-image" /></td>
                            <td>${product.price}</td>
                            <td><a href={product.url} className="product-link" target="_blank" rel="noopener noreferrer">View Product</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
