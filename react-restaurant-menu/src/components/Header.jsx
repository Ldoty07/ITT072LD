import heroImg from '../assets/hero.jpg'

function Header() {
    return (
        <>
            <h1>Maple Street Bakery Menu</h1>
            <img src={heroImg} id="heroImg" width="518" height="777" alt="Image of different pastries on different stands and baskets"></img>
            <p>
                Welcome to Maple Street Bakery's menu! We serve a variety of artisanal pastries and baked goods. 
                This menu is of our regular offerings, but specific flavors may differ.
            </p>
        </>
    )
}

export default Header
