
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
        menuContainer.className = 'menu-container';
        document.body.appendChild(menuContainer);
        //create the x button-container
        const x_button_container = document.createElement('div');
        x_button_container.className ='x-button-container justify-content-sm-end ';
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



        const items = ['Store', 'Mac', 'ipad', 'iphone', 'Watch', 'Vision', 'Airpods', 'Tv&Home', 'Entertainment', ' Accessories', 'Support'];
        items.forEach(function (item) {
            const li = document.createElement('li');
            li.id =item;
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

            // Add click event to the li element
            /*li.addEventListener('click', function (item) {
                const  listContainer= document.createElement('div');
                listContainer.className = 'list-container d-flex   ';
                document.body.appendChild(listContainer);
                 listitem1= document.createElement('div');
                listitem1.className = 'list-content-item1 flex-basis-100 text-center text-light';
                listContainer.appendChild(listitem1);
                listitem2= document.createElement('div');
                listitem2.className = 'list-content-item2';
                listContainer.appendChild(listitem2);
                 listitem3= document.createElement('div');
                listitem3.className = 'list-content-item3';
                listContainer.appendChild(listitem3);
                
               
                  listitem1.innerHTML= 'hello Store';

                // else if(item=='Mac'){
                //     alert('hello Mac')
                // }
                // else if(item=='ipad'){
                //     alert('hello ipad')
                // }
                // else if(item=='iphone'){
                //     alert('hello iphone')
                // }
                // else if(item=='Watch'){
                //     alert('hello Watch')
                // }
                // else if(item=='Vision'){

                //     alert('hello Vision')
                // }else {

                //     alert('hello Airpods')
                // }
              
             });
             */

             li.addEventListener('click', function () {
                const listContainer = document.createElement('div');
                listContainer.className = 'list-container w-100 bg-black d-flex';
                document.body.appendChild(listContainer);
            
                const listitem1 = document.createElement('div');
                listitem1.className = 'list-content-item1 flex-basis-100';
                listContainer.appendChild(listitem1);
            
                const listitem2 = document.createElement('div');
                listitem2.className = 'list-content-item2';
                listContainer.appendChild(listitem2);
            
                const listitem3 = document.createElement('div');
                listitem3.className = 'list-content-item3';
                listContainer.appendChild(listitem3);
            
                // Check the clicked item based on its ID or text content
                if (this.id === 'Store') {
                    const htmlContent = `
            <h1>Welcome to My Website</h1>
            <p>This is a simple paragraph.</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        `; 
         // Assuming 'li' has an ID like 'Store'
                    listitem1.innerHTML= 
                    htmlContent;
                   
                } else if (this.id === 'Mac') {
                    listitem1.innerText = 'Hello Mac';
                } else if (this.id === 'ipad') {
                    listitem1.innerHTML ='';
                    listitem1.innerHTML = 'Hello iPad';
                } else if (this.id === 'iphone') {
                    listitem1.innerHTML ='  ';
                    listitem1.innerText = 'Hello iPhone';
                } else if (this.id === 'Watch') {
                    listitem1.innerHTML = 'Hello Watch';
                } else if (this.id === 'Vision') {
                    listitem1.innerHTML = 'Hello Vision';
                } else if (this.id === 'Airpods') {
                    listitem1.innerHTML = 'Hello AirPods';
                } else {
                    listitem1.innerHTML = 'Hello, ' + this.id;
                }
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


    //add click event to all li elements
    
   function item(){
        alert('hello Store');
    }

    















}); 
