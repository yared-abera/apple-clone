
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementsByClassName('humberger-menu')[0];
    if (!hamburgerMenu) {
        console.error('Hamburger menu element not found');
        return;
    }


    let menuContainer;
    

    function createMenu() {
        // Create the menu container
        menuContainer = document.createElement('div');
        menuContainer.id = 'menu';
        menuContainer.className = 'menu-container'
        document.body.appendChild(menuContainer);

        //create the x button-container
        const x_button_container = document.createElement('div');
        x_button_container.className = 'x-button-container';
        menuContainer.appendChild(x_button_container);
        //create the chevron button
        const chevron_button = document.createElement('i');
        chevron_button.className = 'bi bi-chevron-left text-light  hi ';
        
        x_button_container.appendChild(chevron_button);

        //create the x button
        const x_button = document.createElement('i');
        x_button.className = 'bi bi-x text-light x-button ';
        x_button_container.appendChild(x_button);

        // Create the nav items list
        const navItems = document.createElement('ul');
        navItems.className = 'nav-items'; 



        const items = ['Store', 'Mac', 'ipad', 'iphone', 'Airpods', 'Watch', 'Vision', 'Airpods', 'Tv&Home', 'Entertainment', ' Accessories'];
        items.forEach(function (item) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = item;


            //create the option button
            const option_button = document.createElement('div');
            option_button.className = 'option-button ';
            option_button.innerHTML = '<i class="bi bi-chevron-right text-light"></i>';
            li.appendChild(option_button);
            li.appendChild(a);
            navItems.appendChild(li);

            // Add mouseover and mouseout event listeners
            li.addEventListener('mouseover', function () {
                option_button.style.display = 'flex'; 
            });
            li.addEventListener('mouseout', function () {
                option_button.style.display = ''; 
            });

        });

        // Append the nav items list to the menu container
        menuContainer.appendChild(navItems);

        // Add click event to the x button
        x_button.addEventListener('click', function () {
            menuContainer.style.display = 'none';
        });

        return menuContainer;
    }



    // Add click event to the hamburger menu button
    hamburgerMenu.addEventListener('click', function () {
        if (!menuContainer) {
            // Create the menu container only once
            menuContainer = createMenu();
             ;
        }

        // Toggle the display of the menu
        if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
            menuContainer.style.display = 'block';
        } else {
            menuContainer.style.display = 'none';
        }
    });
});




