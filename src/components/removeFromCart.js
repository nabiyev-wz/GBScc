// Savatdagi mahsulotni o'chirish uchun funksiya
export const removeFromCart = (cart, setCart) => {
    return (index) => {
        const updatedCart = cart.filter((_, i) => i !== index); // index orqali o'chirish
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Savatni saqlash
    };
};