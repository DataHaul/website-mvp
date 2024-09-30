import Image from 'next/image';


const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-50">
     
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-8 space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Empowering Agribusiness with Data-Driven Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Unlock the potential of your farm with predictive analytics, a digital marketplace, and a vibrant community forum. Optimize operations and enhance profitability.
        </p>
        
      </div>

     
      <div className="hidden md:block w-full md:w-1/2 h-full relative">
        <Image
          src="/images/DataHaul.png"
          alt="Farmers in the field"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      
    </section>
  );
};

export default HeroSection;
