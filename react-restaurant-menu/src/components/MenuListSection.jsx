import MenuItem from "./MenuItem"

function MenuListSection({ menuItems }) {
    return (
        <div className="menuListSection">
            { menuItems.map(item => (
                <MenuItem
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default MenuListSection
