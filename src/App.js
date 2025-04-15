import React from 'react';

const App = () => {
    const cardsData = [
        { id: 24234095956, image: '/images/dragon.jpg', title: 'Dragon Основатель', link: 'https://t.me/Dragon010101' },
        { id: 51693143380, image: '/images/funtik.jpg', title: '中丫廾丁仈长 АДМИН', link: 'https://web.telegram.org/a/#6008153078' },
        { id: 41800602964, image: '/images/alex.jpg', title: 'Alex АДМИН', link: 'https://web.telegram.org/a/#389746882' },
    ];

    const additionalCard = {
        image: '/images/eragif.gif',
        title: 'Наш чат',
        link: 'https://t.me/eraSurvival',
    };

    const handleCopyId = (id) => {
        navigator.clipboard.writeText(id.toString()).then(() => {
            alert(`ID ${id} скопирован в буфер обмена!`);
        }).catch(() => {
            alert('Не удалось скопировать ID.');
        });
    };

    return (
        <div className="container">
            <h1>Наши контакты</h1>
            <div className="cards">
                {cardsData.map((card) => (
                    <div className="card" key={card.id}>
                        <img src={card.image} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>ID: {card.id}</p>
                        <div className="button-container">
                            <button className="copy-button" onClick={() => handleCopyId(card.id)}>
                                <i className="fas fa-copy"></i> Скопировать ID
                            </button>
                            <a href={card.link} target="_blank" rel="noopener noreferrer" className="telegram-button">
                                <i className="fab fa-telegram-plane"></i> Telegram
                            </a>
                        </div>
                    </div>
                ))}
                {/* Новая карточка без ID */}
                <div className="card">
                    <img src={additionalCard.image} alt={additionalCard.title} />
                    <h3>{additionalCard.title}</h3>
                    <div className="button-container">
                        <a href={additionalCard.link} target="_blank" rel="noopener noreferrer" className="telegram-button">
                            <i className="fab fa-telegram-plane"></i> Telegram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

