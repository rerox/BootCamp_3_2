
(function(){

    //WYSZKUKIWANIE DANYCH//

    var baseNameInput = document.querySelector('.baseNameInput'),
        firstNameInput = document.querySelector('.firstNameInput'),
        lastNameInput = document.querySelector('.lastNameInput'),
        ageInput = document.querySelector('.ageInput'),
        submitBtn = document.querySelector('.submitBtn'),

        downloadBtn = document.querySelector('.downloadBtn'),
        texts = document.querySelector('.texts'),
        list = document.querySelector('.list');


    // ZAPISYWANIE DANYCH //

    submitBtn.addEventListener("click",function (e) {
        e.preventDefault();

        var nameBase = baseNameInput.value;
            if(nameBase !== ""){
            var newBase = makeNewLocalDataBase(nameBase);
                window.localStorage['DataBase1.' +nameBase] = newBase
            }
    });

    var makeNewLocalDataBase = function (nameBase) {
        var nameBase = {
            firstName:  firstNameInput,
            lastName: lastNameInput,
            age: ageInput
        };

        return JSON.stringify(nameBase);
    };

    // POBIERANIE DANYCH //

    downloadBtn.addEventListener("click",function (e) {
        e.preventDefault();
        getLocalDataBase();
    });
    
    var getLocalDataBase = function () {
        texts.innerHTML = "Lista obiektów w naszym LocalStorage DataBase:";

        var showDataBase;
        var temp;
        var li;

        for (var i = 0; i < window.localStorage.length; i++) {
            showDataBase = window.localStorage.getItem(localStorage.key(i));
                try {
                    temp.JSON.parse(showDataBase)
                } catch(e) {
                    continue
                }
                li = document.createElement('li')
                list.appendChild(li);
                li.innerHTML = showDataBase;
        }
    }
})();