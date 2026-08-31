function Book() {
    return (
        <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX329_BO1,204,203,200_.jpg" alt="Book Cover" />
            <h2>Title: The Great Gatsby</h2>
            <h3>Author: F. Scott Fitzgerald</h3>
            <p>Price: $12.99</p>
        </div>
    )
}
function App() {
    return (
        <div>
            <h1>Book Store</h1>
            <Book />
        </div>
    )
}
const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);