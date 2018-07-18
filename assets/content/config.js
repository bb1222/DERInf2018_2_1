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
        title: "Программное обеспечение: основные функции операционной системы",
        grade: "6 класс",
        typeder: "Тренажер",
        intro: {
            chat: [
                {
                    text: 'Папа! Почему мой ноутбук перестал работать?'
                },
                {
                    isPartner: true,
                    text: 'Кнопку Reset нажимал? «Батарею» проверял?'
                },
                {
                    text: 'Я не «чайник» и не «лузер». Как работать я обучен! Мне послание пришло.'
                },
                {
                    isPartner: true,
                    text: 'Давай вместе почитаем и причину мы узнаем!'
                },
            ],
            printing: 'Печатает...',
        },
        parts: [
            {
                title: 'Ребус',
                interactive: {
                    name: 'rebus',
                    items: {
                        task: 'Собери ответ из букв, расставь их в правильном порядке',
                        bg: 'assets/bg1.jpg',
                        answer: ['operating', 'system']
                    }
                }
            },
            {
                title: 'Что такое операционная система?',
                interactive: {
                    name: 'video-text',
                    items: [
                        {
                            video: {
                                src: 'assets/video/Animation_01.mp4',
                            },
                            text: 'Операционная система – обеспечивает совместное функционирование всех устройств компьютера и предоставляет пользователю доступ к его ресурсам с использованием графического интерфейса ОС.',
                            audio: 'assets/audio/ru/1.mp3',
                            audio2: 'assets/audio/ru/2.mp3'
                        }
                    ]
                }
            },
            {
                title: 'Как же правильно загрузить операционную систему?',
                interactive: {
                    name: 'video-text',
                    items: [
                        {
                            video: {
                                src: 'assets/video/Animation_02.mp4',
                            },
                            text: 'Файлы операционной системы хранятся во внешней, долговременной памяти.',
                            audio: 'assets/audio/ru/3.mp3',
                            audio2: 'assets/audio/ru/4.mp3'
                        },
                        {
                            video: {
                                src: 'assets/video/Animation_03.mp4',
                            },
                            text: 'Загрузка операционной системы с системного диска в оперативную память производится после включения компьютера. Диск, на котором находятся файлы операционной системы и с которого производится ее загрузка, называется системным.',
                            audio: 'assets/audio/ru/5.mp3',
                            audio2: 'assets/audio/ru/6.mp3'
                        }
                    ]
                }
            },
            {
                title: 'Функции операционной системы',
                interactive: {
                    name: 'lect',
                    items: {
                        title: 'ИТОГИ',
                        subtitle: 'Функции операционной системы:',
                        parts: [
                            {
                                bg: 'assets/lect/1/bg1.jpg',
                                text: 'Первой задачей операционной системы является обеспечение совместного функционирования всех аппаратных устройств компьютера'
                            },
                            {
                                bg: 'assets/lect/2/bg1.jpg',
                                points: ['Меню', 'Кнопки', 'Панель инструментов', 'Значки'],
                                text: 'Второй задачей операционной системы является предоставление пользователю доступа к ресурсам компьютера'
                            }
                        ]
                    },
                }
            },
            {
                title: 'Установи соответствие',
                interactive: {
                    name: 'sort',
                    items: {
                        task: 'Установите соответствие между программами и их назначением',
                        bg: 'assets/sort/bg1.jpg',
                        sorts: ['Windows 7', 'BIOS', 'DOS Navigator', 'Windows Phone 7'],
                        values: ['Операционная система для компьютера',
                            'Программа оболочка',
                            'Загрузка ядра операционной системы',
                            'Операционная система для мобильных устройств']
                    }
                }
            },
            {
                title: 'Найди правильный ответ',
                interactive: {
                    name: 'test',
                    items: {
                        count: 5,
                        bg: 'assets/bg1.jpg',
                        data: [
                            {
                                question: 'Операционная система – это: ',
                                type: 'text',
                                variants: [
                                    'Набор программ, обеспечивающий работу всех аппаратных устройств компьютера и доступ пользователя к ним. ',
                                    'Совокупность основных устройств компьютера. ',
                                    'Система программирования на языке низкого уровня. ',
                                    'Совокупность программ, используемых для операций с документами. ']
                            },
                            {
                                question: 'Какая совокупность свойств относится к среде Windows?',
                                type: 'text',
                                variants: [
                                    'Многозадачность, графический интерфейс, управление объектами.',
                                    'Командный интерфейс, технология командной строки.',
                                    'Однопользовательская система, командный интерфейс, управление пакетами.',
                                    'Многозадачность, графический интерфейс, использование речевой технологии.']
                            },
                            {
                                question: 'Какие функции выполняет операционная система?',
                                type: 'text',
                                variants: [
                                    'организация диалога с пользователем, управления аппаратурой и ресурсами компьютера.',
                                    'подключения устройств ввода/вывода.',
                                    'обеспечение организации и хранения файлов.',
                                    'организация обмена данными между компьютером и различными периферийными устройствами. ']
                            },
                            {
                                question: 'Операционные системы входят в состав:',
                                type: 'text',
                                variants: [
                                    'системного программного обеспечения.',
                                    'системы управления базами данных.',
                                    'систем программирования.',
                                    'прикладного программного обеспечения.']
                            },
                            {
                                question: 'Драйвер – это…',
                                type: 'text',
                                variants: [
                                    'программа, управляющая конкретным внешним устройством.',
                                    'устройство длительного хранения информации.',
                                    'устройство ввода.',
                                    'устройство вывода.']
                            }
                        ]
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
        // CHANGABLE
        title: "Программалық жасақтама: операциялық жүйенің негізгі қызметтері",
        grade: "6 сынып",
        typeder: "Жаттығу құралы",
        intro: {
            chat: [
                {
                    text: 'Менің ноутбугым неге істемей қалды?'
                },
                {
                    isPartner: true,
                    text: 'Reset батырмасын бастың ба? «Батареясын» тексердің бе?'
                },
                {
                    text: 'Мен жұмыстың бәрін білемін. Маған хабарлама келді.'
                },
                {
                    isPartner: true,
                    text: 'Кел, бірге оқып себебін табайық!'
                },
            ],
            printing: 'Теруде...',
        },
        parts: [
            {
                title: 'Ребус',
                interactive: {
                    name: 'rebus',
                    items: {
                        task: 'Әріптерден жауабын тап, дұрыс ретімен орналастыр.',
                        bg: 'assets/bg1.jpg',
                        answer: ['operating', 'system']
                    }
                }
            },
            {
                title: 'Операциялық жүйе дегеніміз не?',
                interactive: {
                    name: 'video-text',
                    items: [
                        {
                            video: {
                                src: 'assets/video/Animation_01.mp4',
                            },
                            text: 'Операциялық жүйе – бүкіл компьютер құрылғыларының бірлескен жұмысын қамтамасыз етеді және пайдаланушыға ОЖ-ның графикалық интерфейсін пайдалану арқылы ресурстарға қолжетімділік береді.',
                            audio: 'assets/audio/kz/1.mp3',
                            audio2: 'assets/audio/kz/2.mp3'
                        }
                    ]
                }
            },
            {
                title: 'Операциялық жүйені қалай жүктеу керек?',
                interactive: {
                    name: 'video-text',
                    items: [
                        {
                            video: {
                                src: 'assets/video/Animation_02.mp4',
                            },
                            text: 'Операциялық жүйенің файлдары сыртқы, ұзақмерзімді жадта сақталады.',
                            audio: 'assets/audio/kz/3.mp3',
                            audio2: 'assets/audio/kz/4.mp3'
                        },
                        {
                            video: {
                                src: 'assets/video/Animation_03.mp4',
                            },
                            text: 'Операциялық жүйені жүйелік дисктен жедел жадқа жүктеу компьютерді қосудан басталады. Операциялық жүйенің файлдары жазылған әрі орнату іске асырылатын диск жүйелік деп аталады.',
                            audio: 'assets/audio/kz/5.mp3',
                            audio2: 'assets/audio/kz/6.mp3'
                        }
                    ]
                }
            },
            {
                title: 'Операциялық жүйенің қызметтері',
                interactive: {
                    name: 'lect',
                    items: {
                        title: 'НӘТИЖЕЛЕР',
                        subtitle: 'Операциялық жүйенің қызметтері:',
                        parts: [
                            {
                                bg: 'assets/lect/1/bg1.jpg',
                                text: 'Операциялық жүйенің бірінші қызметі – бүкіл компьютерлік құрылғылардың бірлескен жұмысын қамтамасыз ету'
                            },
                            {
                                bg: 'assets/lect/2/bg1.jpg',
                                points: ['Мәзір', 'Батырмалар', 'Құрал-жабдықтар панелі', 'Белгілер'],
                                text: 'Операциялық жүйенің екінші қызметі – пайдаланушының компьютер ресурстарына қолжетімділігін қамтамасыз ету'
                            }
                        ]
                    },
                }
            },
            {
                title: 'Сәйкесін тап',
                interactive: {
                    name: 'sort',
                    items: {
                        task: 'Программалар мен олардың қызметтерін сәйкестендір',
                        bg: 'assets/sort/bg1.jpg',
                        sorts: ['Windows 7', 'BIOS', 'DOS Navigator', 'Windows Phone 7'],
                        values: ['Компьютердің операциялық жүйесі',
                            'Сырт-программа',
                            'Операциялық жүйе ядросының жүктелуі',
                            'Мобильді құрылғыларға арналған операциялық жүйе']
                    }
                }
            },
            {
                title: 'Өзіңді сынап көр!',
                interactive: {
                    name: 'test',
                    items: {
                        count: 5,
                        bg: 'assets/bg1.jpg',
                        data: [
                            {
                                question: 'Операциялық жүйе – бұл:',
                                type: 'text',
                                variants: ['Бүкіл аппараттық құрылғылардың жұмысын және пайдаланушының қолжетімділігін қамтамасыз ететін программалар жиынтығы.', 'Компьютердің негізгі құрылғыларының жиынтығы.', 'Төмен деңгейлік тілдегі программалау жүйесі. ', 'Құжаттармен операцияларды орындау үшін қолданылатын программалар жиынтығы.']
                            }, {
                                question: 'Қандай ерекшеліктер жиынтығы Windows ортасына тиесілі?',
                                type: 'text',
                                variants: ['Көп мәселелік, графикалық интерфейс, нысандарды басқару.', 'Командалық интерфейс, командалық жолдың технологиясы.', 'Бірпайдаланушылық жүйе, командалық интерфейс, пакеттерді басқару.', 'Көп мәселелік, графикалық интерфейс']
                            }, {
                                question: 'Операциялық жүйе қандай қызметтерді орындайды?',
                                type: 'text',
                                variants: ['қолданушымен қатынас ұйымдастыру, компьютер ресурстары мен құрылғыларын басқару.', 'енгізу/шығару құрылғыларын қосу.', 'файлдарды ұйымдастыру мен сақтауды қамтамасыз ету.', 'компьютер мен түрлі қосалқы құрылғылар арасында дерек тасымалын ұйымдастыру.']
                            }, {
                                question: 'Операциялық жүйелер ......... құрамына кіреді:',
                                type: 'text',
                                variants: ['жүйелік программалық жасақтаманың', 'деректер базасын басқару жүйелерінің ', 'программалау жүйелерінің', 'қолданбалы программалық жасақтаманың']
                            }, {
                                question: 'Драйвер – бұл ...',
                                type: 'text',
                                variants: ['белгілі бір сыртқы құрылғыны басқаратын бағдарлама.', 'ақпаратты ұзақ сақтау құрылғысы.', 'енгізу құрылғысы.', 'шығару құрылғысы.']
                            },
                        ]
                    }
                }
            }
        ]
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
        // CHANGABLE
        title: "Software: the main functions of the operating system",
        grade: "6 grade",
        typeder: "Training material",
        intro: {
            chat: [
                {
                    text: 'Why did my laptop stop working?”'
                },
                {
                    isPartner: true,
                    text: 'Did you press the Reset button? Did you check the battery?'
                },
                {
                    text: 'I’m not a ‘dummy’ or a ‘loser’. I’ve been trained how to work! There is a message here for me.'
                },
                {
                    isPartner: true,
                    text: 'Let’s read together and we will find out the reason!'
                },
            ],
            printing: 'Typing...',
        },
        parts: [
            {
                title: 'Rebus',
                interactive: {
                    name: 'rebus',
                    items: {
                        task: 'Collect the answer from the letters, place them in the correct order',
                        bg: 'assets/bg1.jpg',
                        answer: ['operating', 'system']
                    }
                }
            },
            {
                title: 'What is the operating system?',
                interactive: {
                    name: 'video-text',
                    items: [
                        {
                            video: {
                                src: 'assets/video/Animation_01.mp4',
                            },
                            text: 'Operating system ensures joint functioning of all computer devices and provides  a user with access to the resources through the graphical interface of the operating system.',
                            audio: 'assets/audio/en/1.mp3',
                            audio2: 'assets/audio/en/2.mp3'
                        }
                    ]
                }
            },
            {
                title: 'How do we load the operating system correctly?',
                interactive: {
                    name: 'video-text',
                    items: [
                        {
                            video: {
                                src: 'assets/video/Animation_02.mp4',
                            },
                            text: 'Operating system files are stored in external, long-term memory.',
                            audio: 'assets/audio/en/3.mp3',
                            audio2: 'assets/audio/en/4.mp3'
                        },
                        {
                            video: {
                                src: 'assets/video/Animation_03.mp4',
                            },
                            text: 'The operating system is loaded from the system disk into the RAM when the computer turns on. The disk where the operating system files are stored and loaded from is called the system disc.',
                            audio: 'assets/audio/en/5.mp3',
                            audio2: 'assets/audio/en/6.mp3'
                        }
                    ]
                }
            },
            {
                title: 'Functions of the operating system',
                interactive: {
                    name: 'lect',
                    items: {
                        title: 'FINDINGS',
                        subtitle: 'Functions of the operating system:',
                        parts: [
                            {
                                bg: 'assets/lect/1/bg1.jpg',
                                text: 'The first task of the operating system is to ensure the joint functioning of all computer hardware devices.'
                            },
                            {
                                bg: 'assets/lect/2/bg1.jpg',
                                points: ['Menu', 'Buttons', 'Toolbar', 'Badges'],
                                text: 'The second task of the operating system is to provide the user with access to computer resources.'
                            }
                        ]
                    },
                }
            },
            {
                title: 'Match',
                interactive: {
                    name: 'sort',
                    items: {
                        task: 'Match the programmes and their purpose: ',
                        bg: 'assets/sort/bg1.jpg',
                        sorts: ['Windows 7', 'BIOS', 'DOS Navigator', 'Windows Phone 7'],
                        values: ['Computer operating system',
                            'Shell programme',
                            'Operating system core kernel boot',
                            'Operating system for mobile devices']
                    }
                }
            },
            {
                title: 'Check yourself',
                interactive: {
                    name: 'test',
                    items: {
                        count: 5,
                        bg: 'assets/bg1.jpg',
                        data: [
                            {
                                question: 'Operating system is ',
                                variants: ['a set of programmes ensuring the operation of all computer hardware devices and user access to them. ', 'a set of the main computer devices. ', 'a low-level language programming system. ', 'a set of programmes used to work with documents. '],
                                type: 'text'
                            }, {
                                question: 'Which set of properties is specific to Windows environment?',
                                variants: ['Multitasking, graphical interface, object management.', 'Command interface, command-line technology.', 'Single-user system, command interface, package management.', 'Multitasking, graphical interface, use of speech technology.'],
                                type: 'text'
                            }, {
                                question: 'What are the functions of the operating system? ',
                                variants: ['organization of work with the user, control of computer hardware and resources.', 'connecting input/output devices.', 'organization and storage of files.', 'organization of data exchange between the computer and various peripheral devices. '],
                                type: 'text'
                            }, {
                                question: 'Operating systems are a part of',
                                variants: ['system software.', 'the database management system.', 'programming systems.', 'applied software.'],
                                type: 'text'
                            }, {
                                question: 'Driver is…',
                                variants: ['a programme that manages a particular external device.', 'a device for long-term storage of information.', 'input device.', 'output device.'],
                                type: 'text'
                            }
                        ]
                    }
                }
            }
        ]
    }
};