import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
     
        <div className="flex items-center space-x-3">
          <Image src="/images/Logo.webp" alt="DataHaul Logo" width={50} height={30} />
          <Link href="/" className="text-2xl font-bold text-green-500 hover:underline">
            DataHaul
          </Link>
        </div>

       
        <div className="text-center">
          <p>
            Contact us at:{" "}
            <a href="mailto:info@datahaulinc.com" className="text-green-400 hover:underline">
              info@datahaulinc.com
            </a>
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a href="tel:+233123456789" className="text-green-400 hover:underline">
              +233 279 614 874
            </a>
          </p>
          
        </div>

        {/* Copyright */}
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} DataHaul. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
