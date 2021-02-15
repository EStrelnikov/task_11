
window.onload = function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthYearOutput').innerText = initPerson.dateOfBirth;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('buttonChange').addEventListener('click', window.onload);
    document.getElementById('buttonReset').addEventListener('click',  function() {
        document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    } );
    }
