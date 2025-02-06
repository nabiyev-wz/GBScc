import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePurchase = async () => {
    const telegramToken = "7636069952:AAFHHpUFBOrVIoo0A4ifXshGYmc4C44aMrM";
    const chatId = "6752355807";

    const totalQuantity = cart.reduce((acc, item) => {
      if (item.quantity && !isNaN(item.quantity) && item.quantity > 0) {
        return acc + item.quantity;
      }
      return acc;
    }, 0);

    const cartDetails = cart
      .map((item) => {
        const product = products.find((p) => p.id === item.id);
        const quantity = item.quantity || 0;
        const price = item.price || 0;
        const titleWords = product?.title.split(" ").slice(0, 2).join(" ");

        return `${titleWords} - ${quantity} ta - $${price.toFixed(2)}`;
      })
      .join("\n");

    const text = `
      Telefon raqam: ${phoneNumber}
      Xarid qilingan mahsulotlar soni: ${totalQuantity || "N/A"}
      Xarid qilingan mahsulotlar:
      ${cartDetails || "Hech qanday mahsulot yo'q"}
      Umumiy summa: $${Number.parseFloat(total).toFixed(2) || "0.00"}
    `;

    const apiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    try {
      const messageResponse = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (messageResponse.ok) {
        for (const item of cart) {
          const product = products.find((p) => p.id === item.id);
          if (product?.thumbnail) {
            const photoUrl = `https://api.telegram.org/bot${telegramToken}/sendPhoto`;
            await fetch(photoUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                chat_id: chatId,
                photo: product.thumbnail,
                caption: `${product.title} - $${item.price.toFixed(2)}`,
              }),
            });
          }
        }

        alert("Sotib olish muvaffaqiyatli amalga oshirildi!");
        clearCart();
        setPhoneNumber("");
      } else {
        alert("Sotib olishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Telegram API Error: ", error);
      alert("Sotib olishda xatolik yuz berdi.");
    }
  };

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Savatcha ({itemAmount})</div>
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> $ {Number.parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="font-semibold">
            Telefon raqamingiz
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Telefon raqamingizni kiriting"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-2 border rounded-md"
            required
          />
        </div>

        <button
          onClick={handlePurchase}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Sotib olish
        </button>

        <Link
          to={"Kontakt"}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link to={"/"} className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
