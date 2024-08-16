
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementsByClassName('humberger-menu')[0];
    if (!hamburgerMenu) {
        console.error('Hamburger menu element not found');
        return;
    }


    let menuContainer;
    let listContainer

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
        chevron_button.className = 'bi bi-chevron-left text-light  chevron_button-left';
        //handling event of chevron button
        chevron_button.addEventListener('click', function () {
            listContainer.style.display = 'none';
            menuContainer=createMenu();
        })
        x_button_container.appendChild(chevron_button);

        //create the x button
        const x_button = document.createElement('i');
        x_button.className = 'bi bi-x text-light x-button ';
        x_button_container.appendChild(x_button);

        // Create the nav items list
        const navItems = document.createElement('ul');
        navItems.className = 'nav-items';



        const items = ['Store', 'Mac', 'ipad', 'iphone', 'Watch', 'Vision', 'Airpods', 'Tv&Home', 'Entertainment', 'Accessories', 'Support'];
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
            
             li.addEventListener('click', function () {
                chevron_button.style.display='flex';
                menuContainer.style.display='none';
                // Create the list container
                listContainer = document.createElement('div');
                listContainer.className = 'list-container w-100 ';
                document.body.appendChild(listContainer);
                x_button_container.style.display ='flex';
                listContainer.appendChild(x_button_container);
            
                const listitem1 = document.createElement('div');
                listitem1.className = 'list-content-item1 ';
                listContainer.appendChild(listitem1);
               const listContainer_2_3 = document.createElement('div'); 
                listContainer.appendChild(listContainer_2_3);
                listContainer_2_3.className = 'list-content-item2-3';
                const listitem2 = document.createElement('div');
                listitem2.className = 'list-content-item2';
                listContainer_2_3.appendChild(listitem2);
                
                const listitem3 = document.createElement('div');
                listitem3.className = 'list-content-item3';
                listContainer_2_3.appendChild(listitem3);
            
                // Check the clicked item based on its ID or text content
                if (this.id === 'Store') {
                 const listitem1_content= `
           <ul class="text-light ">
                <li> Shop the Latest </li>
                <li> Mac </li>
                <li> Ipad </li>
                <li> Iphone </li>
                <li> Apple Watch </li>
                <li> Apple Vision Pro </li>
                <li> Accessories </li>
            </ul>
        `; 
        const listitem2_content= `
        <ul class="text-light ">
             <li class="text-secondary">Quick links</li>
             <li>Find a Store</li>
             <li>Orderstatus</li>
             <li>Apple Trade In</li>
             <li>Financing</li>
             <li>College Student Offer</li>
         </ul>
     `; 
     const listitem3_content= `
     <ul class="text-light ">
          <li class="text-secondary">Shop Special Stores</li>
          <li>Certified Refurbished</li>
          <li>Education</li>
          <li>Business</li>
          <li>Veterans and Military</li>
          <li>Government</li>
      </ul>
  `; 
           listitem1.innerHTML= 
           listitem1_content;
           listitem2.innerHTML= 
           listitem2_content;
           listitem3.innerHTML= 
           listitem3_content;
                   
                } else if (this.id === 'Mac') {
                    const listitem1_content= `
                    <ul class="text-light ">
                         <li>Explore All Mac</li>
                         <li>MacBook Air</li>
                         <li>MacBook Pro</li>
                         <li>iMac</li>
                         <li>Mac mini</li>
                         <li>Mac Studio</li>
                         <li>Mac Pro</li>
                         <li>Displays</li>
                     </ul>
                     <ul class="list-item1-sub">
                         <li>Compare Mac</li>
                         <li>Mac Does That</li>
                     </ul>
                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                      <li class="text-secondary">Shop Mac</li>
                      <li>Shop Mac</li>
                      <li> Help Me Choose</li>
                      <li>Mac Acccessories</li>
                      <li>Apple Trade In</li>
                      <li> Financing</li>
                      <li> College Student Offer</li>
                  </ul>
              `; 
              const listitem3_content= `
              <ul class="text-light ">
                   <li class="text-secondary">More from Mac</li>
                   <li>Mac Support</li>
                   <li>AppleCare+ for Mac</li>
                   <li>macOS Sequoia Preview</li>
                   <li> Apple Intelligence</li>
                   <li>Apps by Apple</li>
                   <li>Continuity</li>
                   <li>iCloud+</li>
                   <li>Mac for Business</li>
                   <li>Education</li>

               </ul>
           `; 
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                    listitem3.innerHTML= 
                    listitem3_content;
                } else if (this.id === 'ipad') {
                    const listitem1_content= `
                    <ul class="text-light ">
                         <li> Explore All iPad</li>
                         <li> iPad Pro </li>
                         <li> iPad  Air</li>
                         <li>iPad</li>
                         <li> iPad mini </li>
                         <li> ApplePencil</li>
                         <li>Keyboards </li>
                     </ul>
                      <ul class="list-item1-sub">
                         <li>Compare iPad</li>
                         <li>Why iPad</li>
                     </ul>
                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                      <li class="text-secondary">Shop iPad</li>
                      <li>Shop</li>
                      <li>iPad Accessories</li>
                      <li>Apple Trade In</li>
                      <li>Financing</li>
                      <li>College Student Offer</li>
                  </ul>
              `; 
              const listitem3_content= `
              <ul class="text-light ">
                   <li class="text-secondary">More from iPad</li>
                   <li>iPad Support</li>
                   <li>AppleCare+ for iPad</li>
                   <li>iPadOS 18 Preview</li>
                   <li>Apps by Apple</li>
                   <li>iCloud+</li>
                   <li>Education</li>
               </ul>
           `; 
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                    listitem3.innerHTML= 
                    listitem3_content;
                } else if (this.id === 'iphone') {
                    const listitem1_content= `
                    <ul class="text-light ">
                         <li> Explore All iphone</li>
                         <li>iPhone 15 Pro</li>
                         <li> iPhone 15</li>
                         <li> iPhone 14</li>
                         <li> iPhone 13</li>
                         <li> iPhone SE </li>
                     </ul>
                     <ul class="list-item1-sub">
                         <li>Compare iP</honeli>
                         <li>Switch from Android</li>
                     </ul>

                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                      <li class="text-secondary">Shop iPhone</li>
                      <li>Shop iPhone</li>
                      <li>iPhone Accessories</li>
                      <li>Apple Trade In</li>
                      <li>Carriers Deals at Apple</li>
                      <li>Financing</li>
                  </ul>
              `; 
              const listitem3_content= `
              <ul class="text-light ">
                   <li class="text-secondary">More from iPhone</li>
                   <li>iPhone Support</li>
                   <li>AppleCare+ for iPhone</li>
                   <li>iOS 18 Preview</li>
                   <li>Apple Intelligence</li>
                   <li>Apps by Apple</li>
                   <li>iPhone Privacy</li>
                   <li>iCloud+</li>
                   <li>Wallet,Pay,Card</li>
                   <li>Siri</li>
               </ul>
           `; 
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                    listitem3.innerHTML= 
                    listitem3_content;
                } else if (this.id === 'Watch') {
                    const listitem1_content= `
                    <ul class="text-light ">
                         <li> Explore All Apple Watch</li>
                         <li> Apple Watch Series 9</li>
                         <li> Apple Watch Ultra 2</li>
                         <li> Apple Watch  SE</li>
                         <li> Apple Watch Nike </li>
                         <li>Apple Watch Hermés</li>
                     </ul>
                     <ul class="list-item1-sub">
                         <li>Compare Watch</li>
                         <li>Why Apple Watch</li>
                     </ul>
                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                      <li class="text-secondary">Shop Watch</li>
                      <li>Shop Apple Watch</li>
                      <li>Apple Watch Studio</li>
                      <li>Apple Watch Bands</li>
                      <li>Apple Watch Accessories</li>
                      <li> Apple Trade In</li>
                      <li>Financing</li>
                  </ul>
              `; 
              const listitem3_content= `
              <ul class="text-light ">
                   <li class="text-secondary">More from Watch</li>
                   <li>Apple Watch Support </li>
                   <li>AppleCare+</li>
                   <li>watchOS 11 Preview</li>
                   <li>Apple Watch for Your Kids</li>
                   <li>Apps by Apple</li>
                   <li>Apple Fitness+</li>
               </ul>
           `; 
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                    listitem3.innerHTML= 
                    listitem3_content;
                } else if (this.id === 'Vision') {
                    const listitem1_content= `
                    <ul class="text-light ">
                         <li>Explore Apple Vision pro</li>
                     </ul>
                      <ul class="list-item1-sub">
                         <li>Guided Tour</li>
                         <li>Tech Specs</li>
                     </ul>
                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                      <li class="text-secondary">Shop Vision</li>
                      <li>Shop Apple Vision Pro</li>
                      <li class="pt-3">Apple Vision Pro</li>
                      <li class="pb-3">Accessories</li>
                      <li>Book a Demo</li>
                      <li>Financing</li>
                  </ul>
              `; 
              const listitem3_content= `
              <ul class="text-light ">
                   <li class="text-secondary">More fron Vision</li>
                   <li>Apple Vision Pro Support</li>
                   <li>AppleCare+</li>
                   <li>visonOS 2 Preview</li>
               </ul>
           `; 
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                    listitem3.innerHTML= 
                    listitem3_content;
                } else if (this.id === 'Airpods') {
                    const listitem1_content= `
                    <ul class="text-light ">
                         <li>Explore All AirPods</li>
                         <li> AirPods Pro 2nd<br> Generation</li>
                         <li> AirPods 2nd generation</li>
                         <li>AirPods 3nd generation</li>
                         <li>AirPods Max</li>
                     </ul>
                       <ul class="list-item1-sub">
                         <li>Compare Airpods</li>
                    
                         </ul>
                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                      <li class="text-secondary">Shop Airpods</li>
                      <li>Airpods Accessories</li>
                       
                  </ul>
              `; 
              const listitem3_content= `
              <ul class="text-light ">
                   <li class="text-secondary">More from Airpods</li>
                   <li >Airpods Support</li>
                   <li>AppleCare+ for <br>Headphones</li>
                   <li>Apple Music</li>
               </ul>
           `; 
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                    listitem3.innerHTML= 
                    listitem3_content;
                } else if(this.id === 'Tv & Home') {
                    const listitem1_content= `
                    <ul class="text-light ">
                         <li> Explore Tv & Home</li>
                         <li>Apple TV 4K</li>
                         <li>HomePod</li>
                         <li> HomePod mini </li>
                         
                     </ul>
                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                      <li class="text-secondary">Shop Tv & Home</li>
                      <li>Shop Apple TV 4K</li>
                      <li>Shop HomePod</li>
                      <li> Shop HomePod mini</li>
                      <li> Shop Siri Remote</li>
                      <li>Tv& Home Accessories</li>
                  </ul>
              `; 
              const listitem3_content= `
              <ul class="text-light ">
                   <li class="text-secondary"> More from Tv & Home</li>
                   <li>Apple TV Support</li>
                   <li>HomePod Support</li>
                   <li>AppleCare+</li>
                   <li>Apple TV app</li>
                   <li> Apple TV+</li>
                   <li>Home app</li>
                   <li> Apple Music</li>
                   <li> Siri</li>
                   <li>AirPlay</li>
               </ul>
           `; 
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                    listitem3.innerHTML= 
                    listitem3_content;
                }

                else if(this.id === 'Entertainment') {
                    const listitem1_content= `
                    <ul class="text-light ">
                         <li>Explore Entertainment</li>
                         <li>Apple One</li>
                         <li>Apple TV+</li>
                         <li> Apple Music</li>
                         <li> Apple Arcade </li>
                         <li> Apple Fitness+ </li>
                         <li>Apple  News+ </li>
                         <li>Apple Podcasts</li>
                         <li>Apple Books</li>
                         <li>Apple Store</li>
                     </ul>
                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                      <li class="text-secondary">Support</li>
                      <li>Apple TV+ Support</li>
                      <li>Apple Music Support</li>
                       
                  </ul>
              `; 
          
        
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                }
                else if(this.id === 'Accessories') {

                    const listitem1_content= `
                    <ul class="text-light ">
                         <li> Shop All Accessories</li>
                         <li> Mac </li>
                         <li> ipad </li>
                         <li> iphone </li>
                         <li> Apple Watch </li>
                         <li> Apple Vision Pro </li>
                         <li> AirPods </li>
                         <li> TV & Home</li>
                     </ul>
                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                      <li class="text-secondary">Explore Accessories</li>
                      <li>Made by Apple</li>
                      <li>Beats by Dr.Dre</li>
                      <li>AirTag</li>
                  </ul>
                      
              `; 
             
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                }
                else if(this.id === 'Support') {
                    const listitem1_content= `
                    <ul class="text-light ">
                      <li> iPhone </li>    
                         <li> Mac </li>
                         <li> iPad </li>
                         <li> Watch </li>
                         <li> Apple Vision Pro </li>
                         <li> Airpods </li>
                         <li> Music</li>
                         <li> TV </li>
                     </ul>
                     <ul class="list-item1-sub">
                         <li>Explore Support</li>
                    
                         </ul>
                 `; 
                 const listitem2_content= `
                 <ul class="text-light ">
                     <li class="text-secondary"> Get Help</li>
                     <li>Community </li>
                   <li> Check Coverage </li>
                   <li>Repair</li>
                   <li> Contact Us</li>
                  </ul>
                   
              `; 
              const listitem3_content= `
              <ul class="text-light ">
                   <li class="text-secondary">Helpful Topics</li>
                      <li>Get AppleCare+</li>
                      <li> Apple ID & Password</li>
                      <li>Billing &subscriptions</li>
                      <li>Find My</li>
                      <li>Accessibility</li>
               </ul>
           `; 
                    listitem1.innerHTML= 
                    listitem1_content;
                    listitem2.innerHTML= 
                    listitem2_content;
                    listitem3.innerHTML= 
                    listitem3_content;
                }
            });
            

            

        });

        // Append the nav items list to the menu container
        menuContainer.appendChild(navItems);

        // Add click event to the x button
        x_button.addEventListener('click', function () {
           if(listContainer) {listContainer.style.display = 'none';}
            menuContainer.style.display = 'none';
           
        });



        return menuContainer;
    }



    // Add click event to the hamburger menu button
    hamburgerMenu.addEventListener('click', function () {
        // if (menuContainer) {
            // Create the menu container only once
            menuContainer = createMenu();
          
        // }

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
