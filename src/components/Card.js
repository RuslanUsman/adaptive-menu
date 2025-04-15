import React from 'react';
import './styles.css';


const Card = ({ image, title, link }) => {
    return (
        <div style={{
            backgroundColor: '#1a1a2e',
            borderRadius: '10px',
            padding: '20px',
            margin: '15px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            width: '300px',
        }}>
            <img src={image} alt={title} style={{
                maxWidth: '100%',
                borderRadius: '5px',
            }} />
            <h3>{title}</h3>
            <a href={link} style={{
                display: 'inline-block',
                padding: '10px 20px',
                marginTop: '10px',
                borderRadius: '5px',
                backgroundColor: '#0f3460',
                color: '#fff',
                textDecoration: 'none',
            }}>Telegram</a>
        </div>
    );
};

export default Card;
