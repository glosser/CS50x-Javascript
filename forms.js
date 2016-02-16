<form id="contactForm" action="" >
      <fieldset>
        <legend>Contact Details</legend>
        <p>
          <label for="custname">Name</label> 
          <input id="custname" name="custname" />
          Required
        </p>
        <script>
        var form = document.querySelector("form");
        console.log(form.elements[1].type);
        console.log(form.elements.custname.type);
        console.log(form.elements.name.form == form);
        </script>
         <p>
          <label for="email">Email</label> 
          <input id="email" name="email" type="text" />
          </p>
        <script>
        var form = document.querySelector("form");
        console.log(form.elements[1].type);
        console.log(form.elements.email.type);
        console.log(form.elements.name.form == form);
        </script>
        
        <p>
          <label for="website">Website</label> 
          <input id="website" name="website" type="text" />
          Required
        </p>
        <script>
        var form = document.querySelector("form");
        console.log(form.elements[1].type);
        console.log(form.elements.website.type);
        console.log(form.elements.name.form == form);
        </script>
        <p>
          <input class="submit" type="submit" name="submit" value="Submit Contact Details" />
          <input type="reset" value="clear" />
        </p>
        <script>
        var form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
        console.log("Saving value", form.elements.value.value);
        event.preventDefault();
        });
      </script>
      </fieldset>
    </form>

    <input type="text" onkeypress=return"isNumberKey(event);">
    function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }

<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>
<script>
  var terms = [];
  for (var name in window)
    terms.push(name);
  event.input
  indexOf = 0
  <div>
  click div
  textContent
</script>
