const products = [
    {
        name: "Smart TV",
        price: 999.99,
        description: "Experience the future of entertainment with our Smart TV.",
        vendor: "Samsung",
        rating: 4.8,
        category: "Electronics",
        image: "assets/tv.jpg"
    },
    {
        name: "Gaming Laptop",
        price: 1499.99,
        description: "Unleash your gaming potential with our powerful laptop.",
        vendor: "Dell",
        rating: 4.9,
        category: "Electronics",
        image: "assets/laptop.webp"
    },
    {
        name: "Fitness Watch",
        price: 199.99,
        description: "Track your fitness goals with our advanced smartwatch.",
        vendor: "Fitbit",
        rating: 4.7,
        category: "Wearables",
        image: "assets/fitness watch.jpeg"
    },
    {
        name: "Wireless Headphones",
        price: 99.99,
        description: "Immerse yourself in sound with our wireless headphones.",
        vendor: "Sony",
        rating: 4.6,
        category: "Electronics",
        image: "assets/Wireless Headphones.jpeg"
    },
    {
        name: "Smart Speaker",
        price: 49.99,
        description: "Control your home with our smart speaker.",
        vendor: "Amazon",
        rating: 4.5,
        category: "Electronics",
        image: "assets/Smart Speaker.jpg"
    },
    {
        name: "Gaming Console",
        price: 399.99,
        description: "Experience the ultimate gaming experience with our console.",
        vendor: "PlayStation",
        rating: 4.8,
        category: "Electronics",
        image: "assets/console.webp"
    },
    {
        name: "Power Bank",
        price: 29.99,
        description: "Keep your devices charged on the go with our power bank.",
        vendor: "Anker",
        rating: 4.7,
        category: "Electronics",
        image: "assets/Power Bank.jpeg"
    },
    {
        name: "Fitness Bike",
        price: 499.99,
        description: "Get fit in the comfort of your own home with our exercise bike.",
        vendor: "Peloton",
        rating: 4.9,
        category: "Fitness",
        image: "assets/Fitness Bike.jpeg"
    },
    {
        name: "Gaming controller",
        price: 79.99,
        description: "Welcome to Night City, choom!",
        vendor: "Microsoft",
        rating: 4.8,
        category: "Fitness",
        image: "assets/controller.jpg"
    },
    {
        name: "Coffee Maker",
        price: 99.99,
        description: "Start your day off right with our advanced coffee maker.",
        vendor: "Keurig",
        rating: 4.7,
        category: "Kitchen",
        image: "assets/Coffee Maker.jpeg"
    },
    {
        name: "Slow Cooker",
        price: 79.99,
        description: "Cook delicious meals with ease using our slow cooker.",
        vendor: "Crock-Pot",
        rating: 4.6,
        category: "Kitchen",
        image: "assets/Slow Cooker.jpeg"
    },
    {
        name: "Blender",
        price: 49.99,
        description: "Blend your favorite smoothies with our powerful blender.",
        vendor: "Blendtec",
        rating: 4.5,
        category: "Kitchen",
        image: "assets/Blender.jpeg"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        description: "Bake like a pro with our stand mixer.",
        vendor: "KitchenAid",
        rating: 4.8,
        category: "Kitchen",
        image: "assets/Stand Mixer.jpeg"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Ensure cart exists in local storage
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="Product Image">
            <div class="product-info">
                <div class="text">
                    <h3>${product.name}</h3>
                    <p>Category: ${product.category}</p>
                    <p>Rating: ${product.rating}/5</p>    
                </div>
                <button class="add-to-cart" data-product="${product.name}">Add to Cart</button>
                <button class="show-button">Show Details</button>
            </div>
        `;
        productList.appendChild(productCard);
    });

    // Initial cart display
    updateCartDisplay();

    // Add event listener for "Add to Cart" buttons
    productList.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productName = e.target.getAttribute('data-product');
            addToCart(productName);
        }
    });
});

document.querySelector('.cartbtn').addEventListener('click', function() {
    const cartContainer = document.querySelector('.cart-container');
    if (cartContainer.style.display === 'flex') {
        cartContainer.style.display = 'none';
    } else {
        cartContainer.style.display = 'flex';
    }
});

// Add this function to add a product to the cart
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`Added ${productName} to cart`);
    updateCartDisplay()
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = ''; // Clear existing items
    
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    cart.forEach((productName, index) => {
        const product = products.find(p => p.name === productName);
        
        let remover = document.createElement('button')
        remover.className = "remove-item";
        remover.innerText = 'x'
        
        if (product) {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-info">
                    <h4>${product.name}</h4>
                    <p>Category: ${product.category}</p>
                    <p>Rating: ${product.rating}/5</p>
                </div>
                    `;
                    remover.addEventListener('click', (e)=> {
                        let cartt = cart.filter((item, i) => {
                            return i !== index
                        })
                        localStorage.setItem('cart', JSON.stringify(cartt))
                        cartItem.remove()
                    })
                    cartItem.appendChild(remover);
                    cartItems.appendChild(cartItem);
                }
    });

}



// Update cart display when storage changes
window.addEventListener('storage', function(e) {
    if (e.key === 'cart') {
        updateCartDisplay();
    }
});

document.querySelector('.clearall').addEventListener('click', function() {
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartDisplay();
});

let username = localStorage.getItem('LogedIn')

if (username) {
    document.querySelector('.signanchor').style.display = 'none';
    document.querySelector('.username').style.display = 'inline';
    document.querySelector('.username').textContent = username;
}

