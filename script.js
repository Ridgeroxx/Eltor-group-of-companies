document.addEventListener("DOMContentLoaded", function() {
    const testimonialContainer = document.querySelector(".testimonial-container");
    const navigationDots = document.querySelector(".navigation-dots");
    const testimonials = document.querySelectorAll(".testimonial");
    const dotCount = testimonials.length;
    let activeIndex = 0;

    // Create navigation dots
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) {
            dot.classList.add("active-dot");
        }
        dot.setAttribute("data-index", i);
        navigationDots.appendChild(dot);
    }

    // Event listener for navigation dots
    navigationDots.addEventListener("click", function(event) {
        const dotIndex = parseInt(event.target.getAttribute("data-index"));
        scrollToTestimonial(dotIndex);
    });

    // Start auto-scrolling after 3 seconds
    const intervalId = setInterval(scrollNextTestimonial, 3000);

    // Function to scroll to the next testimonial
    function scrollNextTestimonial() {
        activeIndex = (activeIndex + 1) % dotCount;
        scrollToTestimonial(activeIndex);
    }

    // Function to scroll to a specific testimonial
    function scrollToTestimonial(index) {
        testimonialContainer.scroll({
            left: testimonials[index].offsetLeft,
            behavior: "smooth"
        });
        setActiveDot(index);
    }

    // Function to set active dot
    function setActiveDot(index) {
        document.querySelector(".active-dot").classList.remove("active-dot");
        navigationDots.children[index].classList.add("active-dot");
    }

    
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        const cartCount = document.getElementById('cart-count');
        const cartPopup = document.getElementById('cart-popup');
        const closeCartPopup = document.getElementById('close-cart-popup');
        const cartContent = document.querySelector('.cart-content');
        const emptyCartMessage = document.getElementById('empty-cart-message');

        let cartItems = [];

        // Function to update cart count
        function updateCartCount() {
            cartCount.textContent = cartItems.length;
        }

        // Function to update cart popup
        function updateCartPopup() {
            cartContent.innerHTML = '';
            if (cartItems.length === 0) {
                emptyCartMessage.style.display = 'block';
            } else {
                emptyCartMessage.style.display = 'none';
                cartItems.forEach(item => {
                    const cartItemElement = document.createElement('div');
                    cartItemElement.classList.add('cart-item');
                    cartItemElement.innerHTML = `
                        <img src="${item.image}" alt="${item.title}">
                        <div>
                            <h4>${item.title}</h4>
                            <p>Price: ${item.price}</p>
                            <button class="remove-from-cart-btn" data-title="${item.title}">Remove</button>
                        </div>
                    `;
                    cartContent.appendChild(cartItemElement);
                });
            }
        }

        // Function to handle adding item to cart
function addToCart(title, price, image) {
    const itemIndex = cartItems.findIndex(item => item.title === title);
    if (itemIndex !== -1) {
        // Item already exists, increase quantity
        cartItems[itemIndex].quantity++;
    } else {
        // Add new item to cart
        cartItems.push({ title, price, image, quantity: 1 });
    }
    updateCartCount();
}

        // Add event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Get the book details
        const bookCard = this.closest(".book-card");
        const bookTitle = bookCard.querySelector("h3").innerText;
        const bookPrice = bookCard.querySelector(".price").innerText;
        const bookImage = bookCard.querySelector("img").src; // Get the image source

        // Create a new cart item
        const cartItem = {
            title: bookTitle,
            price: bookPrice,
            image: bookImage // Pass the image source to addToCart
        };

        // Add the item to the cart
        addToCart(cartItem);

        // Show the cart modal
        showCartModal();

        // Show a confirmation message or update the UI as needed
        alert("Item added to cart: " + bookTitle);
    });
});


        // Event listener for cart icon click
        document.getElementById('cart-icon').addEventListener('click', function() {
            updateCartPopup();
            cartPopup.style.display = 'block';
        });

        // Event listener for close cart popup button
        closeCartPopup.addEventListener('click', function() {
            cartPopup.style.display = 'none';
        });

        // Event delegation for remove from cart buttons
        cartContent.addEventListener('click', function(event) {
            if (event.target.classList.contains('remove-from-cart-btn')) {
                const title = event.target.getAttribute('data-title');
                const itemIndex = cartItems.findIndex(item => item.title === title);
                if (itemIndex !== -1) {
                    cartItems.splice(itemIndex, 1);
                    updateCartCount();
                    updateCartPopup();
                }
            }
        });

        // Add event listener for cart icon click
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            updateCartPopup();
            cartPopup.style.display = 'block';
        });
    } else {
        console.error("Cart icon element not found.");
    }

    // Function to update cart popup
    function updateCartPopup() {
        
    }
    });

    const images = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg', './images/img4.jpg', './images/img5.jpg'];
    const slideshowImage = document.getElementById('slideshow-image');
    let index = 0;

    function nextSlide() {
        // Fade out the current image
        slideshowImage.style.opacity = 0;

        // Increment index and wrap around if necessary
        index = (index + 1) % images.length;

        // Set the next image source after a short delay
        setTimeout(() => {
            slideshowImage.src = images[index];
        }, 500); // Adjust the delay as needed

        // Fade in the next image after a short delay
        setTimeout(() => {
            slideshowImage.style.opacity = 1;
        }, 1000); // Adjust the delay as needed

        // Repeat the process after a delay of 5 seconds (5000 milliseconds)
        setTimeout(nextSlide, 5000); // Adjust the delay as needed
    }

    // Start the slideshow
    nextSlide();

    function showCartModal() {
        const cartModal = document.getElementById("cart-popup");
        cartModal.style.display = "block";
    }
    
    // Get the overlay element
const overlay = document.querySelector('.overlay');

// Add event listener to close the cart modal when clicking outside the modal
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        closeCart();
    }
});
