var Menuitems = document.getElementById("MenuItems");

Menuitems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px"
    }
    else
    {
        MenuItems.style.maxHeight = "0px"
    }
}

