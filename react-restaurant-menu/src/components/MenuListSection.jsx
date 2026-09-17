import MenuItem from "./MenuItem"

function MenuListSection({ menuItems }) {
    return (
        <div className="menuListSection">
            { menuItems.map(item =>
                MenuItem(item.name, item.description, item.price)
            )}
        </div>
    )
}

export default MenuListSection
