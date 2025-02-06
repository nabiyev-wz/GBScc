import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
    const features = [
        {
            title: "Foydalanish oson",
            description: "Kod yozishni bilish kerak emas, va kodni tahrirlash uchun vaqt sarflanmaydi.",
        },
        {
            title: "Faqat bir martalik to'lov",
            description: "Bir martalik to'lov, doimiy to'lovsiz mavzuni do'konga joylashtirish.",
        },
        {
            title: "Hayot davomida bepul yangilanish",
            description: "Do'koningiz hayotingiz davomida bepul va muntazam yangilanishlarni oladi.",
        },
        {
            title: "Tezlik testi va tasdiqlangan",
            description: "Elexy xaridorlaringiz uchun tezroq xarid qilish tajribasini ta'minlaydi.",
        },
        {
            title: "Narsalarni sotadigan dizayn",
            description: "Onlayn do'kon yaratish va o'z mahsulotlaringizni sotish juda oson.",
        },
        {
            title: "Dunyoviy darajadagi qo'llab-quvvatlash",
            description: "Biz sifatli va ishonchli mijozlarga xizmat ko'rsatish bilan mashhurmiz.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="w-full bg-white">
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="carousel-item">
                        <img src="https://green-leaf.uz/wp-content/uploads/slide.jpg" alt="Green Life 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://green-leaf.uz/wp-content/uploads/slide3.jpg" alt="Green Life 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://green-leaf.uz/wp-content/uploads/slide4.jpg" alt="Green Life 3" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://green-leaf.uz/wp-content/uploads/slide2.jpg" alt="Green Life 4" />
                    </div>
                </Slider>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#2e8b57]">
                        Nima uchun Greenleaf siz uchun eng yaxshi <span className="text-blue-600">tanlov</span>
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border shadow-sm rounded-lg p-6 hover:bg-[#2e8b57] hover:text-white transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 flex items-center justify-start">
                                <i className="fas fa-check-circle mr-2 text-gray-600 hover:text-white"></i>
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 hover:text-white">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .carousel-container {
                    margin: 20px;
                    margin-top: 150px;
                }

                .carousel-item {
                    position: relative;
                    text-align: center;
                }

                .carousel-item img {
                    width: 1240px;
                    height: 350px;
                    object-fit: cover;
                    border-radius: 10px;
                }

                .slick-prev,
                .slick-next {
                    z-index: 2;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 0;
                }

                .slick-prev {
                    left: 10px;
                }

                .slick-next {
                    right: 10px;
                }

                .slick-prev:before,
                .slick-next:before {
                    font-size: 24px;
                    color: #2e8b57;
                }

                .slick-prev:before {
                    content: "←";
                }

                .slick-next:before {
                    content: "→";
                }

                .video-container {
                    margin-top: 40px;
                    text-align: center;
                }

                .embed-responsive {
                    position: relative;
                    padding-bottom: 56.25%;
                    height: 0;
                    overflow: hidden;
                    max-width: 100%;
                    background: #000;
                }

                .embed-responsive iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </section>
    );
}
