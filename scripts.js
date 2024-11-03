       //carousel scripts
       let slideIndex = 1;
       showSlides(slideIndex);

       function plusSlides(n){
           showSlides(slideIndex += n);
       }

       function currentSlide(n){
           showSlides(slideIndex=n);
       }
       
       function showSlides(n){
           let i;
           let slides = document.getElementsByClassName("carousel-slide")
           let dots = document.getElementsByClassName("dot")
           if(n>slides.length){
               slideIndex = 1;
           }
           if(n<1){
               slideIndex = slides.length;
           }
           for(i = 0; i < slides.length; i++){
               slides[i].style.display = "none";
           }
           for(i =0; i<dots.length; i++){
               dots[i].className = dots[i].className.replace("active", "");
           }
           slides[slideIndex-1].style.display = "block";
           dots[slideIndex-1].className += " active";
       }

       // modal scripts

       let modal = document.getElementById("modal")
       let button = document.getElementById("openModal")
       let span = document.getElementById("closeModal")

       button.onclick = function(){
           modal.style.display = "block";
       }

       span.onclick = function(){
           modal.style.display = "none";
       }

       window.onclick = function(event){
           if(event.target == modal){
               modal.style.display = "none";
           }
       }

       function validateForm(event) {
        let valid = true;
        const name = document.getElementById("name");
        // name check
        if (name.value === "") {
          document.getElementById("nameError").innerHTML =
            "Pleae enter valid name";
          valid = false;
        } else {
          document.getElementById("nameError").innerHTML = "";
        }

        //rank check
        const rank = document.getElementById("rank");
        if (rank.value === "") {
          document.getElementById("rankError").innerHTML =
            "Please enter a valid rank";
          valid = false;
        } else {
          document.getElementById("rankError").innerHTML = "";
        }

        //favorite Sub
        const sub = document.getElementById("Sub");

        if (sub.value === "") {
          document.getElementById("subError").innerHTML =
            "Please enter a valid Sub";
          valid = false;
        } else {
          document.getElementById("subError").innerHTML = "";
        }

        //validate email
        
        let email = document.getElementById('email')
        if (email.value === "") {
          document.getElementById("emailError").innerHTML =
            "Please enter a Valid Email";
          valid = false;
        } else if (!isValidEmail(email.value)) {
          document.getElementById("emailError").innerHTML =
            "invalid email format";
          valid = false;
        } else {
          document.getElementById("emailError").innerHTML = "";
        }

        if (valid) {
          addInfoToTable(name.value, rank.value, sub.value, email.value);
          document.getElementById("MemberSubmit").reset()
        }
        return false;
      }

      function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }

      function addInfoToTable(name, rank, sub, email) {
        let table = document.getElementById("MembersTable");
        let row = table.insertRow();
        const contents = [name, rank, sub, email];

        contents.forEach((content, index) => {
          let cell = row.insertCell(index);
          cell.innerHTML = content;
        });
      }

      function sortTable(columnIndex) {
        const table = document.getElementById("MembersTable");
        const rows = Array.from(table.rows).slice(1); // Exclude header row
    
        rows.sort((a, b) => {
            const cellA = a.cells[columnIndex].innerText.toLowerCase();
            const cellB = b.cells[columnIndex].innerText.toLowerCase();
    
            if (cellA < cellB) return -1;
            if (cellA > cellB) return 1;
            return 0;
        });
    
        // Reinsert sorted rows
        rows.forEach(row => table.appendChild(row));
    }