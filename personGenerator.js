const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
  
    firstNameFemaleJson: `{
        "count": 15, 
        "list": {
            "id_1": "",
            "id_2": "Людмила",
            "id_3": "Вероника",
            "id_4": "Татьяна",
            "id_5": "Надежда",
            "id_6": "Светлана",
            "id_7": "Анна",
            "id_8": "Валентина",
            "id_9": "Юлия",
            "id_10": "Алина",
            "id_11": "Оксана",
            "id_12": "Снежана",
            "id_13": "Галина",
            "id_14": "Полина",
            "id_15": "Лидия"
        }
    }`,

    patronymicMaleJson: `{
        "count": 10, 
        "list": {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михайлович",
            "id_8": "Евгеньевич",
            "id_9": "Егорович",
            "id_10": "Андреевич"        
        }
    }`,

   patronymicFemaleJson: `{
        "count": 10, 
        "list": {
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михайловна",
            "id_8": "Евгеньевна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
            }
    }`,

    professionMaleJson: `{
        "count": 5, 
        "list": {
            "id_1": "Водитель",
            "id_2": "Шахтер",
            "id_3": "Грузчик",
            "id_4": "Строитель",
            "id_5": "Слесарь"
            }
    }`,

    professionFemaleJson: `{
        "count": 5, 
        "list": {
            "id_1": "Секретарь",
            "id_2": "Бухгалтер",
            "id_3": "Швея",
            "id_4": "Учитель",
            "id_5": "Врач"
            }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender() {
        let random = Math.round(Math.random());
        return random ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {

        let firstNameJson = (gender == 'Мужчина') ? this.firstNameMaleJson : this.firstNameFemaleJson

        return this.randomValue(firstNameJson);

    },


     randomSurname: function(gender) {

        return (gender == 'Мужчина') ? this.randomValue(this.surnameJson) : `${this.randomValue(this.surnameJson)}а`;

    },

    randomPatronymic: function(gender) {

        return (gender == 'Мужчина') ? this.randomValue(this.patronymicMaleJson) : this.randomValue(this.patronymicFemaleJson);

    },

    randomDate(startDate, endDate) {
        let date = new Date( +startDate + Math.random() * (endDate - startDate))
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return date.toLocaleString("ru", options)
    },

    randomProfession: function(gender) {
        return (gender == 'Мужчина') ? this.randomValue(this.professionMaleJson) : this.randomValue(this.professionFemaleJson)  
    } ,

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        let gender = this.person.gender;
        this.person.firstName = this.randomFirstName(gender);
        this.person.surName = this.randomSurname(gender);
        this.person.patronymic = this.randomPatronymic(gender);
        let startDate = new Date(1960, 0, 1);
        let endDate = new Date(2005, 11, 31);
        this.person.dateOfBirth = this.randomDate(startDate, endDate);
        this.person.profession = this.randomProfession(gender);
        return this.person;
    }
};