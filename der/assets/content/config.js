const DATAS = {
    ru: {
        subject: "Информатика",
        copyright: "АОО «Назарбаев Интеллектуальные школы». Все права защищены. 2018 год.",
        soundOnOff: 'Вкл/выкл. звук',
        home: 'Домой',
        feedback: 'Оставить отзыв',
        info: "Информация",
        check: 'Проверить',
        resWords: [["Не огорчайся.", "Может стоит повторить?"],
            ["Попробуй еще раз.", "Возможно ты поторопился!"],
            ["Хорошо!"],
            ["Ты гений!", "Молодец!", "Ты мегамозг!", "Отлично!", "Супер!"]
        ],
        choiceOneVariant: "Выбери правильный вариант ответа:",
        choiceMultiVariant: "Ответ содержит несколько правильных вариантов",
        start: 'Начать',
        open: 'Открыть',
        close: 'Закрыть',
        changeLanguage: 'Поменять язык',
        next: 'Дальше',
        skip: 'Пропустить',
        repeat: 'Повторить',
        finalize: 'Завершить',
        back: 'Назад',
        sections: 'Разделы',
        nextSection: 'Следующий раздел',
        remember: 'Запомни',
        correct: 'Правильно',
        wrong: 'Неправильно',
        answer: 'Ваш ответ',
        correctAnswer: 'Правильный ответ: ',
        // CHANGABLE
        title: "Я дизайнер: работа с векторными изображениями",
        grade: "6 класс",
        typeder: "Тренажер",
        parts: [
            {
                title: 'Изучи',
                info: 'Что такое векторная графика?',
                interactive: {
                    name: 'slider',
                    items: {
                        heightImage: 480,
                        maxHeightTextContainer: 540,
                        data: [
                            {
                                src: 'assets/vector/1.jpg',
                                audio: {
                                    src: 'assets/vector/6_ru.mp3',
                                    autoplay: true,
                                    controls: true,
                                    style: 'position:absolute; left:0; bottom: 0; margin: 30px;'
                                },
                                html: 'Одним из первых умений, которое приобретает человек в своей жизни, порой ещё даже не научившись говорить, является умение рисовать.'
                            }, {
                                src: 'assets/vector/2.gif',
                                audio: {
                                    src: 'assets/vector/7_ru.mp3',
                                    autoplay: true,
                                    controls: true,
                                    style: 'position:absolute; left:0; bottom: 0; margin: 30px;'
                                },
                                html: 'Мы рисуем на бумаге, на асфальте, на холсте, на доске.'
                            }, {
                                src: 'assets/vector/4.jpg',
                                audio: {
                                    src: 'assets/vector/8_ru.mp3',
                                    autoplay: true,
                                    controls: true,
                                    style: 'position:absolute; left:0; bottom: 0; margin: 30px;'
                                },
                                html: 'Но в последнее время желающих рисовать всё больше привлекает компьютер.'
                            }, {
                                src: 'assets/vector/5.jpg',
                                audio: {
                                    src: 'assets/vector/9_ru.mp3',
                                    autoplay: true,
                                    controls: true,
                                    style: 'position:absolute; left:0; bottom: 0; margin: 30px;'
                                },
                                html: 'Мир компьютерной графики необъятен. Работа с компьютерной графикой – одно из самых популярных направлений.'
                            }, {
                                src: 'assets/vector/6.jpg',
                                audio: {
                                    src: 'assets/vector/10_ru.mp3',
                                    autoplay: true,
                                    controls: true,
                                    style: 'position:absolute; left:0; bottom: 0; margin: 30px;'
                                },
                                html: 'Без компьютерной графики не обходится ни одна сфера нашей жизни.' +
                                '<br><br>Во всех отраслях науки, техники, медицины, в торговле и рекламных изданиях используются построенные с помощью графических программ схемы, графики, диаграммы, предназначенные для наглядного изображения разнообразной информации. '
                            }, {
                                src: 'assets/vector/7.jpg',
                                audio: {
                                    src: 'assets/vector/11_ru.mp3',
                                    autoplay: true,
                                    controls: true,
                                    style: 'position:absolute; left:0; bottom: 0; margin: 30px;'
                                },
                                html: 'Таким образом, умение работать с графическими программами – одно из важных условий успешной самореализации в будущей профессиональной деятельности.'
                            }, {
                                src: 'assets/vector/9.gif',
                                html: '<p class="amber--text">Что же такое векторная графика?</p>' +
                                'Основным элементом векторной графики является геометрический объект. В качестве объекта принимаются простые геометрические фигуры (так называемые примитивы - прямоугольник, окружность, эллипс, линия).' +
                                '<br><br>Изображения векторной графики можно, группировать, уменьшать или увеличивать без потери качества. Также они мало «весят».'
                            }
                        ]
                    }
                }
            },
            {
                title: 'Создай',
                info: 'Используй инструменты для создания векторных изображений',
                interactive: {
                    name: 'binary',
                    items: {}
                }
            },
            {
                title: 'Проверь себя',
                info: 'Проверь как ты усвоил материал',
                interactive: {
                    name: 'fill-text',
                    items: {
                        content: [
                            {text: 'Векторное изображение формируется с помощью'},
                            {span: 'геометрических примитивов, точек различного цвета, графического планшета'},
                            {text: '.'},
                            {text: 'Векторное изображение в процессе масштабирования'},
                            {span: 'не теряет качества, теряет четкость, зависит от размера'},
                            {text: '.'},
                            {text: 'При работе с векторным изображением закрашивается'},
                            {span: 'вся фигура, каждый пиксель, фон'},
                            {text: '.'},
                            {text: 'Векторное изображение используется'},
                            {span: 'в полиграфии, для работы с фотографией, для набора текста'},
                            {text: '.'}
                        ],
                    }
                }
            }
        ]
    },
    kz: {
        subject: "Информатика",
        copyright: "«Назарбаев Зияткерлік мектептері». Барлық құқықтар қорғалған. 2018 жыл.",
        soundOnOff: "Дыбыс қосу/сөндіру",
        home: "Басқы бетке",
        feedback: "Кері байланыс",
        info: "Ақпарат",
        check: 'Тексеру',
        resWords: [
            ["Көңіліңді түсірме.", "Мүмкін қайта орындап көрерсің?"],
            ["Қайта орындап көр.", "Тым асыққан боларсың!"],
            ["Жақсы!"],
            ["Өте жақсы!", "Жарайсың!", "Керемет!"]
        ],
        choiceOneVariant: "Дұрыс жауапты таңда:",
        choiceMultiVariant: "Бірнеше жауап нұсқаларын көрсет",
        start: 'Бастау',
        open: 'Ашу',
        close: 'Жабу',
        changeLanguage: 'Тілді ауыстыру',
        next: 'Келесі',
        skip: 'Өткізіп жіберу',
        repeat: 'Қайталау',
        finalize: 'Аяқтау',
        back: 'Артқа',
        sections: 'Бөлімдер',
        nextSection: 'Келесі бөлім',
        remember: 'Есте сақта',
        correct: 'Дұрыс',
        wrong: 'Дұрыс емес',
        answer: 'Cіздің жауабыңыз',
        correctAnswer: 'Дұрыс жауабы:',
    },
    en: {
        subject: "Computer Science",
        copyright: "AEO \"Nazarbayev Intellectual Schools\". All rights reserved. 2018.",
        soundOnOff: "Sound on/off",
        home: "Home",
        feedback: "Feedback",
        info: "Info",
        skip: 'Skip',
        check: 'Check',
        resWords: [
            ["Don't worry.", "Do you want to try again?"],
            ["Try again.", "You were in a hurry!"],
            ["Good!"],
            ["You are genius!", "Well done!", "You are so smart!", "Excellent!", "Good job!"]
        ],
        choiceOneVariant: "Choose the correct answer:",
        choiceMultiVariant: "Indicate several answers",
        start: 'start',
        open: 'Open',
        close: 'Close',
        changeLanguage: 'Change language',
        next: 'Next',
        repeat: 'Repeat',
        finalize: 'Complete',
        back: 'Back',
        sections: 'Sections',
        nextSection: 'Next section',
        remember: 'Remember',
        correct: 'Correct',
        wrong: 'Wrong',
        answer: 'Your answer:',
        correctAnswer: 'Correct answer: ',
    }
};