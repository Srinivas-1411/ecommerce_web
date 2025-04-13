
addtocart
const product = [
    {
        id: 0,
        image: 'red_side.webp',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'men-pant.avif',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'men-shoe.avif',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'blackshirt.avif',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 4,
        image: 'shoe.webp',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 5,
        image: 'kid_boy.webp',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 6,
        image: 'kid_girl.webp',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 7,
        image: 'women_oversize.webp',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 8,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 9,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 10,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 11,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 12,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
    function displaycart() {
        let j = 0, total = 0;
        document.getElementById("count").innerHTML = cart.length;
        if (cart.length == 0) {
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "$ " + 0 + ".00";
        } else {
            document.getElementById("cartItem").innerHTML = cart.map((items) => {
                var { image, title, price } = items;
                total = total + price;
                document.getElementById("total").innerHTML = "$ " + total + ".00";
                return (
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
                );
            }).join('');
    
            // Add the "Buy Now" button
            document.getElementById('cartItem').innerHTML += `
                <button id="buyNow" onclick="buyNow()">Buy Now</button>
            `;
        }
    }
    
    // New function to handle the buy now action
    function buyNow() {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to the cart before buying.");
            return;
        }
        
        // Here you can add the logic for processing the purchase
        // For example, you could redirect to a payment page or display a success message
        alert("Thank you for your purchase! Total amount: $" + document.getElementById("total").innerText);
        
        // Clear the cart after purchase
        cart = [];
        displaycart();
    }
    
}

