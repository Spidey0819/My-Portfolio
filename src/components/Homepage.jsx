import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/about');
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-radial from-gray-800 to-black">
            {/* Background with animation */}
            <div
                className="absolute inset-0 z-0 bg-[url('/api/placeholder/1280/720')] bg-center bg-cover bg-no-repeat filter brightness-40
        animate-[zoom_15s_infinite_alternate] scale-100 hover:scale-110 transition-transform duration-15000"
                style={{
                    animation: 'zoom 15s infinite alternate',
                    '@keyframes zoom': {
                        from: { transform: 'scale(1)' },
                        to: { transform: 'scale(1.1)' }
                    }
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
                {/* Logo/Name with animation */}
                <div
                    className="text-5xl md:text-6xl font-bangers text-[#e62429]
          animate-[fadeIn_2s_ease-in] shadow-lg"
                    style={{ textShadow: '2px 2px 5px #000' }}
                >
                    Hi, I'm Dhruv Goswami
                </div>

                {/* Subtitle */}
                <div className="text-2xl md:text-3xl font-bangers text-[#fdd835] mt-4">
                    Welcome to my Universe
                </div>

                {/* Button */}
                <button
                    onClick={handleExplore}
                    className="mt-8 px-8 py-4 text-xl font-bangers text-white bg-[#e62429]
          rounded-md transform transition-all duration-300 hover:scale-110
          hover:shadow-[0_5px_15px_rgba(230,36,41,0.6)]"
                >
                    Explore My Powers
                </button>
            </div>
        </div>
    );
};

export default Homepage;