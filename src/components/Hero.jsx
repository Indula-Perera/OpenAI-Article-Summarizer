import{logo} from '../assets';
import ThemeSwitcher from './ThemeSwitcher';

function Hero() {
    return (
        
            <header className='w-full flex justify-center items-center flex-col '> 

                <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                    <ThemeSwitcher/>
                    <img src={logo} alt="Logo" className='w-28 object-contain'/>

                    <button
                    type='button'
                    onClick={() => window.open('https://github.com/Indula-Perera')}
                    className='black_btn '
                    >
                        GitHub
                    </button>


                </nav>

                <h1 className='head_text dark:text-gray-100'>
                    Summarize Articles with <br className='max-md:hidden'/>
                    <span className="orange_gradient">OpenAI GPT-4</span>

                </h1>

                <h2 className='desc dark:text-gray-100'>
                    Simplify your reading with Simmize, an open-source article summarizer
                    that transforms lengthy articles into clear and concise summaries
                </h2>
                
            </header>
        
    )
}

export default Hero
