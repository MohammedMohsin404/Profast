import Banner from "./components/Banner";
import Brands from "./components/Brands";
import CustomersReviews from "./components/CustomersReviews";
import Faq from "./components/Faq";


import Merchant from "./components/Merchant";
import Services from "./components/Services";
import Supports from "./components/Supports";
import Works from "./components/Works";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 100
const SLIDES = [
  {
    "id": 1,
    "desc": "This product exceeded my expectations. Fast delivery and great customer service!",
    "name": "Amina Rahman",
    "designation": "Software Engineer",
    "avatar": "https://i.pravatar.cc/150?img=1"
  },
  {
    "id": 2,
    "desc": "Absolutely love it! I’ll definitely be purchasing again.",
    "name": "John Smith",
    "designation": "Marketing Specialist",
    "avatar": "https://i.pravatar.cc/150?img=2"
  },
  {
    "id": 3,
    "desc": "High quality and great value for money.",
    "name": "Fatima Khan",
    "designation": "UI/UX Designer",
    "avatar": "https://i.pravatar.cc/150?img=3"
  },
  {
    "id": 4,
    "desc": "Customer support was super helpful and responsive.",
    "name": "David Lee",
    "designation": "Project Manager",
    "avatar": "https://i.pravatar.cc/150?img=4"
  },
  {
    "id": 5,
    "desc": "I’m very satisfied. The product works exactly as described.",
    "name": "Sara Alam",
    "designation": "Product Designer",
    "avatar": "https://i.pravatar.cc/150?img=5"
  },
  {
    "id": 6,
    "desc": "Easy to use, stylish, and reliable.",
    "name": "Liam Johnson",
    "designation": "Content Creator",
    "avatar": "https://i.pravatar.cc/150?img=6"
  },
  {
    "id": 7,
    "desc": "Excellent service and fast delivery. Will recommend to others.",
    "name": "Nadia Sultana",
    "designation": "Entrepreneur",
    "avatar": "https://i.pravatar.cc/150?img=7"
  },
  {
    "id": 8,
    "desc": "User-friendly and beautifully designed.",
    "name": "Robert Green",
    "designation": "Business Analyst",
    "avatar": "https://i.pravatar.cc/150?img=8"
  },
  {
    "id": 9,
    "desc": "My experience has been nothing short of amazing.",
    "name": "Mehedi Hasan",
    "designation": "DevOps Engineer",
    "avatar": "https://i.pravatar.cc/150?img=9"
  },
  {
    "id": 10,
    "desc": "Truly impressed by the build quality and attention to detail.",
    "name": "Sana Chowdhury",
    "designation": "Data Scientist",
    "avatar": "https://i.pravatar.cc/150?img=10"
  },
  {
    "id": 11,
    "desc": "Fantastic! It’s exactly what I was looking for.",
    "name": "Emily Davis",
    "designation": "Web Developer",
    "avatar": "https://i.pravatar.cc/150?img=11"
  },
  {
    "id": 12,
    "desc": "Very professional and responsive team behind the product.",
    "name": "Arif Mahmud",
    "designation": "QA Engineer",
    "avatar": "https://i.pravatar.cc/150?img=12"
  },
  {
    "id": 13,
    "desc": "Affordable, effective, and just right for my needs.",
    "name": "Rachel Thomas",
    "designation": "Social Media Manager",
    "avatar": "https://i.pravatar.cc/150?img=13"
  },
  {
    "id": 14,
    "desc": "Saves me time every day. Can’t recommend it enough!",
    "name": "Shakib Al Noor",
    "designation": "IT Consultant",
    "avatar": "https://i.pravatar.cc/150?img=14"
  },
  {
    "id": 15,
    "desc": "Five stars from me. Seamless and efficient!",
    "name": "Jessica Brown",
    "designation": "Operations Manager",
    "avatar": "https://i.pravatar.cc/150?img=15"
  },
  {
    "id": 16,
    "desc": "Intuitive design and fast performance.",
    "name": "Kamal Uddin",
    "designation": "System Administrator",
    "avatar": "https://i.pravatar.cc/150?img=16"
  },
  {
    "id": 17,
    "desc": "Very happy with the purchase. Will recommend to others.",
    "name": "Sadia Akter",
    "designation": "HR Manager",
    "avatar": "https://i.pravatar.cc/150?img=17"
  },
  {
    "id": 18,
    "desc": "Support team was extremely helpful during onboarding.",
    "name": "Oliver Martin",
    "designation": "Product Manager",
    "avatar": "https://i.pravatar.cc/150?img=18"
  },
  {
    "id": 19,
    "desc": "Simple yet powerful. Love the experience so far.",
    "name": "Anika Jahan",
    "designation": "Graphic Designer",
    "avatar": "https://i.pravatar.cc/150?img=19"
  },
  {
    "id": 20,
    "desc": "Reliable and exactly what my team needed.",
    "name": "Mohammad Hossain",
    "designation": "Frontend Developer",
    "avatar": "https://i.pravatar.cc/150?img=20"
  }
]

const faqs = [
  {
    "id": 1,
    "title": "How does this posture corrector work?",
    "description": "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
  },
  {
    "id": 2,
    "title": "Is it suitable for all ages and body types?",
    "description": "Yes, the posture corrector is designed with adjustable straps to fit various body types and is suitable for both adults and teens."
  },
  {
    "id": 3,
    "title": "Does it really help with back pain and posture improvement?",
    "description": "Many users report noticeable improvements in posture and reduced back pain within weeks of consistent use."
  },
  {
    "id": 4,
    "title": "Does it have smart features like vibration alerts?",
    "description": "Some models include smart sensors that vibrate gently when poor posture is detected, helping you stay aware and aligned."
  },
  {
    "id": 5,
    "title": "How will I be notified when the product is back in stock?",
    "description": "You can sign up for restock alerts using your email or phone number on the product page, and we’ll notify you as soon as it's available."
  },
  {
    "id": 6,
    "title": "Can I wear it under my clothes?",
    "description": "Yes, the posture corrector is lightweight and discreet enough to wear comfortably under most clothing."
  },
  {
    "id": 7,
    "title": "How long should I wear it each day?",
    "description": "We recommend starting with 15–30 minutes a day and gradually increasing use as your posture improves."
  },
  {
    "id": 8,
    "title": "Is it washable?",
    "description": "Yes, the posture corrector is made from breathable, washable fabric. Hand washing is recommended for best results."
  },
  {
    "id": 9,
    "title": "Does it come in different sizes?",
    "description": "Our product is designed to be one-size-fits-most with adjustable features to accommodate a wide range of body types."
  },
  {
    "id": 10,
    "title": "Is there a warranty or money-back guarantee?",
    "description": "Yes, we offer a 30-day money-back guarantee. If you’re not satisfied, you can return it for a full refund."
  }
]



export default function Home() {
  return (
    <>
      <Banner />
    <Works/>
    <Services/>
    <Brands/>
    <Supports/>
    <Merchant/>
    <CustomersReviews slides={SLIDES} options={OPTIONS}/>
    <Faq faqs={faqs}/>
  

    
    </>
  );
}
