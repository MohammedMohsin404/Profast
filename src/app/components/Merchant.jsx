import Image from "next/image";

// import merchant from "/be-a-merchant-bg.png"

// import locationMerchant from "/location-merchant.png"
const Merchant = () => {
    return (
        <section className='mt-15'>
            <div className={`flex justify-between bg-[#03373D] rounded-3xl p-20`}>

                <div className=" space-y-8 w-3/6">
                    <h3 className=" font-bold text-4xl text-white">Merchant and Customer Satisfaction is Our First Priority</h3>
                    <p className="text-base text-[#DADADA]">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                   <div className="space-x-4"> <button className="btn bg-[#CAEB66] btn-xl rounded-3xl btn-outline">Become a Merchant</button>
                    <button className="btn btn-xl bg-transparent text-[#CAEB66] rounded-3xl btn-outline">Earn with Profast Courier</button></div>
                </div>
                <div className=" ">
                   
                    <Image
                    alt="Location Merchant"
                src="/location-merchant.png"
                width="530" height="300" /> 
                </div>
            </div>
        </section>
    );
};

export default Merchant;