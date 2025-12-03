//your JS code here. If required.
 const form = document.getElementById('userForm');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            let alertMessage = '';
            
            formData.forEach((value, key) => {
                alertMessage += `${key}: ${value} `;
            });
            
            alert(alertMessage.trim());
        });