import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-5">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div className="flex flex-col justify-center h-full">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Welcome to my <span className="text-red-600">G</span>
            <span className="text-blue-600">D</span>
            <span className="text-yellow-500">S</span>
            <span className="text-green-600">C </span>
            <span className="block text-gray-800">project !</span>
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            I developed a Real-Time Stock Dashboard application that displays live data (as stock data) fetched from an API, enabling users to monitor market trends and make informed trading decisions. The app features a Buy Stocks page for purchasing stocks based on dynamic data and a Profile page to track user investments. Utilizing Socket.IO for real-time updates, this project highlights my skills in creating a responsive and interactive web application using Next.Js and Tailwind CSS.
          </p>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Link 
              href="/dashboard" 
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Dynamic Dashboard
              <svg 
                className="shrink-0 size-4" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
            <Link 
              href="/buystocks" 
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800 focus:bg-neutral-800"
            >
              Buy Stocks 
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center items-center hidden md:block">
          <Image 
            className="w-5/6 rounded-md" 
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" 
            alt="Google Logo" 
            width={150} 
            height={150} 
            priority // Optional: add this for optimization
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
