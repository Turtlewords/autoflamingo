import hero from '/assets/af_burlington_lg.jpg'

function Home() {
    return (
        <div className="home fade-in">
            <img className="hero-img" src={hero} alt="autoflamingo on stage"/>
        </div>
    )
}

export default Home;