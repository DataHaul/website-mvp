import Image from 'next/image';
import { Button, Container } from '@mui/material';

const FeaturesSection = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row mt-8 mb-3">

        <div className="flex items-center justify-center bg-white p-8 rounded-md">
          <div className="grid grid-cols-2 gap-2">
            
            {[
              { src: "/images/feature1.webp", alt: "Data Analysis 1", text: "Predictive Analytics", width: "w-[320px]", height: "h-[240px]" },
              { src: "/images/feature2.webp", alt: "Data Analysis 2", text: "Digital Marketplace", width: "w-[280px]", height: "h-[180px]" },
              { src: "/images/feature3.webp", alt: "Data Analysis 3", text: "Sourcing Farm Inputs", width: "w-[390px]", height: "h-[180px]" },
              { src: "/images/feature4.webp", alt: "Data Analysis 4", text: "Community Forum", width: "w-[280px]", height: "h-[240px]" },
            ].map((image, index) => (
              <div className="relative group overflow-hidden" key={index}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={`${image.width} ${image.height} object-cover rounded-lg shadow-md`} 
                />
                
                <div className={` ${image.width} ${image.height} absolute inset-0 bg-gradient-to-t from-[black]/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <span className="text-white font-bold text-center absolute left-1 bottom-1">{image.text}</span>
                </div>
              </div>
            ))}
          </div>

          
          <div className="col-span-2 mt-4 ml-8 md:col-span-1">
          <h2 className="text-4xl font-bold">
    <span className="text-black">Leading the Way in </span>
    <span className="text-green-600">Data Logistics and Analytics</span>
  </h2>
            <h2 className='text-xl text-slate-950 mt-2'>
              At Datahaul, we specialize in transforming complex data into actionable insights. Our innovative solutions streamline data flow and empower businesses to make data-driven decisions effectively.
            </h2>

           
            <Button variant="contained"   sx={{ marginTop: '15px',
    backgroundColor: 'green', 
    color: 'white', 
    '&:hover': { 
      backgroundColor: 'darkgreen' 
    } 
  }}>
              Discover Our Solutions
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FeaturesSection;
