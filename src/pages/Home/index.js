import Hero from '../../components/Hero';
import List from '../../components/List'
import Navigation from '../../components/Navigation';
import covernya1 from '../../assets/covernya1.png'
import covernya2 from '../../assets/covernya2.png'
import covernya3 from '../../assets/covernya3.png'
import Sidebar from '../../components/Sidebar';
import '../../styles/Sidebar.css'

const Main = ()=>{
    return(
        <Sidebar>
        <div>
            <header>
            <Navigation />
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <h1>List Book</h1>
                    </div>
                    <div className='col-4'>
                        <List image={covernya1} title="Dilan 1990"/>
                    </div>
                    <div className='col-4'>
                        <List image={covernya2} title="Sebuah Seni Untuk Apaan Tuh"/>
                    </div>
                    <div className='col-4'>
                        <List image={covernya3} title="React Native"/>
                    </div>
                </div>
            </div>
            </header>
        </div>
    </Sidebar>
    )
}

export default Main;