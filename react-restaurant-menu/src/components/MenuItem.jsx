function MenuItem({ name, description, price }) {
    return (
        <div className="menuItem">
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="price">{price}</p>
        </div>
    )
}

export default MenuItem
