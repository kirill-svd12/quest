export const fallbackData = {
  scenes: [
    {
      id: "start",
      number: 1,
      name: "Старт",
      goal: "Погрузить детей в историю и запустить первую цепочку загадок.",
      summary: "Ведущий приветствует детей, закрываются шторы, включается базовый тревожный фон.",
      operatorText: "Проведи вводную, закрой шторы, приглуши люстру, включи стартовую озвучку и зафиксируй, что дети услышали легенду.",
      actorNote: "Актёр пока не появляется, остаётся за дверью и ждёт сигнала на сцену 3.",
      recommendedSounds: ["intro", "system_voice_1"],
      recommendedEffects: ["curtains_close", "chandelier_blue"],
      hints: ["hint_start_soft", "hint_start_direct"],
      automations: ["Закрыть шторы", "Включить синий свет", "Запустить стартовый звук"],
      operatorActions: ["Проверить готовность комнаты", "Дать легенду", "Подтвердить старт сцены"],
      activeDevices: ["Шторы", "Люстра", "Колонка"],
      progressChecks: ["Дети в комнате", "Легенда озвучена", "Дверь закрыта"]
    },
    {
      id: "first_hint",
      number: 2,
      name: "Первая подсказка",
      goal: "Подтолкнуть детей к первому ключу без прямого ответа.",
      summary: "Система даёт намёк, оператор следит за темпом и готовит следующий стол.",
      operatorText: "Если дети задержались дольше минуты, дай мягкую подсказку через колонку или покажи её себе на экране.",
      actorNote: "Актёр не нужен, можно создать напряжение звуком ошибки системы.",
      recommendedSounds: ["hint_1", "system_error"],
      recommendedEffects: ["desk_lamp_1_toggle"],
      hints: ["hint_scene_2_soft", "hint_scene_2_medium", "hint_scene_2_direct"],
      automations: ["Мягкий голосовой намёк", "Подсветить зону стола лампой"],
      operatorActions: ["Оценить прогресс", "При необходимости выдать намёк"],
      activeDevices: ["Колонка", "Настольная лампа 1"],
      progressChecks: ["Нашли первый символ", "Поняли механику замков"]
    },
    {
      id: "table",
      number: 3,
      name: "Стол",
      goal: "Решить головоломку на столе и открыть тайник.",
      summary: "Дети работают у стола, актёр может кратко появиться боковым движением.",
      operatorText: "Следи, чтобы столовая подсветка была активна, и запусти короткий мистический эффект при открытии тайника.",
      actorNote: "Актёр быстро появляется в проёме, задержка не более 3 секунд, затем уходит.",
      recommendedSounds: ["mystic_whisper", "stinger_hit"],
      recommendedEffects: ["desk_lamp_2_toggle", "mystic_scene"],
      hints: ["hint_table_soft", "hint_table_direct"],
      automations: ["Подсветка второго стола", "Короткий scary stinger"],
      operatorActions: ["Подтвердить открытие тайника", "Запустить выход актёра"],
      activeDevices: ["Настольная лампа 2", "Колонка", "Актёр"],
      progressChecks: ["Тайник открыт", "Ключ найден"]
    },
    {
      id: "toilet",
      number: 4,
      name: "Туалет",
      goal: "Перевести внимание в неожиданный угол комнаты и продолжить расследование.",
      summary: "Система сообщает об ошибке, дети идут к двери в санузел или похожей зоне.",
      operatorText: "Запусти ошибку системы, подсвети красным на 2-3 секунды и верни основной режим, если дети испугались слишком сильно.",
      actorNote: "Актёр остаётся вне поля зрения, только шорох за дверью.",
      recommendedSounds: ["system_error", "alarm"],
      recommendedEffects: ["chandelier_red", "curtains_open"],
      hints: ["hint_toilet_soft", "hint_toilet_medium", "hint_toilet_direct"],
      automations: ["Красная вспышка", "Тревожный звук", "Сброс на рабочее освещение"],
      operatorActions: ["Открыть новую зону", "Дать детям время на осмотр"],
      activeDevices: ["Люстра", "Шторы", "Колонка"],
      progressChecks: ["Дети пошли в нужную зону", "Нашли второй ключ"]
    },
    {
      id: "wind",
      number: 5,
      name: "Ветер",
      goal: "Создать пик напряжения с помощью вентилятора и резкого звукового момента.",
      summary: "На решение загадки реагирует комната: ветер, звук и шевеление штор.",
      operatorText: "Включи вентилятор, дай резкий звук и при необходимости активируй scary moment отдельно.",
      actorNote: "Актёр не выходит, но готовится к финальному проходу.",
      recommendedSounds: ["wind_burst", "stinger_hit"],
      recommendedEffects: ["fan_toggle", "sharp_wind"],
      hints: ["hint_wind_soft", "hint_wind_direct"],
      automations: ["Резкий ветер", "Короткий ударный звук"],
      operatorActions: ["Проверить реакцию детей", "Отключить вентилятор после 10 секунд"],
      activeDevices: ["Вентилятор", "Шторы", "Колонка"],
      progressChecks: ["Поняли подсказку на стене", "Собрали код"]
    },
    {
      id: "chandelier",
      number: 6,
      name: "Люстра",
      goal: "Подвести детей к финальной сборке решения через световую механику.",
      summary: "Нужный ответ меняет цвет люстры, оператор управляет цветами вручную или по сценарию.",
      operatorText: "Переключай цвета по попыткам детей. При верном ответе дай зелёный и подготовь музыку финала.",
      actorNote: "Актёр тихо занимает позицию для финального выхода.",
      recommendedSounds: ["system_voice_1", "mystic_pad"],
      recommendedEffects: ["chandelier_green", "chandelier_blink"],
      hints: ["hint_chandelier_soft", "hint_chandelier_medium", "hint_chandelier_direct"],
      automations: ["Смена цвета люстры", "Финальная подготовка"],
      operatorActions: ["Отметить правильную комбинацию", "Подготовить финал"],
      activeDevices: ["Люстра", "Колонка"],
      progressChecks: ["Ответ найден", "Финальная дверь готова"]
    },
    {
      id: "final",
      number: 7,
      name: "Финал",
      goal: "Завершить квест эффектно, включить свет, музыку и перейти к напиткам.",
      summary: "Свет становится безопасным, звучит победная музыка, актёр выходит на поклон.",
      operatorText: "Нажми финал, включи общий свет, открой шторы, запусти победную музыку и перейди к блоку коктейлей.",
      actorNote: "Актёр выходит, поздравляет детей и помогает перевести их к послеквестовому блоку.",
      recommendedSounds: ["final_music", "victory_voice"],
      recommendedEffects: ["final_mode", "curtains_open"],
      hints: ["hint_final_soft"],
      automations: ["Общий свет", "Открыть шторы", "Финальная музыка"],
      operatorActions: ["Завершить таймер", "Поблагодарить команду", "Открыть коктейли"],
      activeDevices: ["Люстра", "Шторы", "Колонка", "Актёр"],
      progressChecks: ["Финал подтверждён", "Дети переведены к коктейлям"]
    }
  ],
  sounds: [
    { id: "intro", name: "Стартовая подводка", category: "start", color: "blue", kind: "long", file: "./assets/audio/intro.mp3", description: "Главное вступление перед первой сценой." },
    { id: "alarm", name: "Тревога", category: "alarm", color: "red", kind: "long", file: "./assets/audio/alarm.mp3", description: "Длинная дорожка тревоги." },
    { id: "mystic_whisper", name: "Мистический шёпот", category: "mystic", color: "violet", kind: "short", file: "./assets/audio/mystic_whisper.mp3", description: "Короткий шёпот в момент тайника." },
    { id: "mystic_pad", name: "Мистический фон", category: "mystic", color: "violet", kind: "long", file: "./assets/audio/mystic_pad.mp3", description: "Фоновый мистический слой." },
    { id: "system_voice_1", name: "Голос системы 1", category: "system", color: "teal", kind: "short", file: "./assets/audio/system_voice_1.mp3", description: "Официальная озвучка системы." },
    { id: "system_error", name: "Ошибка системы", category: "error", color: "yellow", kind: "short", file: "./assets/audio/system_error.mp3", description: "Сигнал сбоя или ошибки." },
    { id: "hint_1", name: "Подсказка 1", category: "hint", color: "yellow", kind: "short", file: "./assets/audio/hint_1.mp3", description: "Записанная мягкая подсказка." },
    { id: "stinger_hit", name: "Резкий эффект", category: "fx", color: "red", kind: "short", file: "./assets/audio/stinger_hit.mp3", description: "Короткий scary hit." },
    { id: "wind_burst", name: "Порыв ветра", category: "fx", color: "violet", kind: "short", file: "./assets/audio/wind_burst.mp3", description: "Эффект порыва ветра." },
    { id: "victory_voice", name: "Поздравление системы", category: "final", color: "green", kind: "short", file: "./assets/audio/victory_voice.mp3", description: "Короткая победная фраза." },
    { id: "final_music", name: "Музыка после победы", category: "afterparty", color: "green", kind: "long", file: "./assets/audio/final_music.mp3", description: "Длинная победная музыка." }
  ],
  effects: [
    { id: "curtains_close", name: "Шторы закрыть", type: "curtains", color: "blue", handler: "closeCurtains" },
    { id: "curtains_open", name: "Шторы открыть", type: "curtains", color: "blue", handler: "openCurtains" },
    { id: "chandelier_off", name: "Люстра выключить", type: "light", color: "red", handler: "setChandelierOff" },
    { id: "chandelier_on", name: "Люстра включить", type: "light", color: "green", handler: "setChandelierOn" },
    { id: "chandelier_blue", name: "Люстра синий", type: "light", color: "blue", handler: "setChandelierBlue" },
    { id: "chandelier_red", name: "Люстра красный", type: "light", color: "red", handler: "setChandelierRed" },
    { id: "chandelier_green", name: "Люстра зелёный", type: "light", color: "green", handler: "setChandelierGreen" },
    { id: "chandelier_blink", name: "Люстра мигание", type: "light", color: "violet", handler: "setChandelierBlink" },
    { id: "desk_lamp_1_toggle", name: "Настольная лампа 1", type: "light", color: "yellow", handler: "toggleDeskLamp1" },
    { id: "desk_lamp_2_toggle", name: "Настольная лампа 2", type: "light", color: "yellow", handler: "toggleDeskLamp2" },
    { id: "fan_toggle", name: "Вентилятор вкл/выкл", type: "fan", color: "teal", handler: "toggleFan" },
    { id: "sharp_wind", name: "Эффект резкий ветер", type: "effect", color: "violet", handler: "triggerSharpWind" },
    { id: "mystic_scene", name: "Эффект мистическая сцена", type: "effect", color: "violet", handler: "triggerMysticScene" },
    { id: "final_mode", name: "Эффект финал", type: "effect", color: "green", handler: "triggerFinalScene" }
  ],
  hints: {
    universal: [
      { id: "universal_soft", level: "Мягкая", text: "Посмотрите внимательнее на предметы, которые уже изменились." },
      { id: "universal_medium", level: "Средняя", text: "Нужный ответ уже рядом, попробуйте связать звук и свет." },
      { id: "universal_direct", level: "Прямая", text: "Возьмите найденный символ и проверьте его у активной зоны." }
    ],
    sceneHints: {
      start: [
        { id: "hint_start_soft", level: "Мягкая", text: "История уже подсказала, где начинается путь." },
        { id: "hint_start_direct", level: "Прямая", text: "Ищите первый знак возле стола и синего света." }
      ],
      first_hint: [
        { id: "hint_scene_2_soft", level: "Мягкая", text: "Попробуйте вспомнить слово, которое только что прозвучало." },
        { id: "hint_scene_2_medium", level: "Средняя", text: "Сначала нужен символ, потом код." },
        { id: "hint_scene_2_direct", level: "Прямая", text: "Проверьте предмет с подсветкой на столе." }
      ],
      table: [
        { id: "hint_table_soft", level: "Мягкая", text: "Иногда ящик открывает не сила, а правильный порядок." },
        { id: "hint_table_direct", level: "Прямая", text: "Соберите знаки со стола слева направо." }
      ],
      toilet: [
        { id: "hint_toilet_soft", level: "Мягкая", text: "Ошибка системы указывает не на поломку, а на новую зону." },
        { id: "hint_toilet_medium", level: "Средняя", text: "Идите туда, где обычно никто не ищет подсказки." },
        { id: "hint_toilet_direct", level: "Прямая", text: "Проверьте дверь туалета и всё, что рядом с ней." }
      ],
      wind: [
        { id: "hint_wind_soft", level: "Мягкая", text: "Ветер подсказывает направление, а не ответ." },
        { id: "hint_wind_direct", level: "Прямая", text: "Смотрите туда, куда двигаются шторы." }
      ],
      chandelier: [
        { id: "hint_chandelier_soft", level: "Мягкая", text: "Правильный ответ должен совпасть со светом." },
        { id: "hint_chandelier_medium", level: "Средняя", text: "Каждый цвет означает попытку, но верный цвет только один." },
        { id: "hint_chandelier_direct", level: "Прямая", text: "Когда решите загадку, нужен зелёный цвет." }
      ],
      final: [
        { id: "hint_final_soft", level: "Мягкая", text: "Финальный шаг уже найден, осталось подтвердить решение." }
      ]
    }
  },
  cocktails: [
    { id: "cocktail_1", name: "Коктейль 1", color: "#fe7b7b", description: "Ягодный красный микс." },
    { id: "cocktail_2", name: "Коктейль 2", color: "#6fe0bb", description: "Освежающий зелёный микс." },
    { id: "cocktail_3", name: "Коктейль 3", color: "#77b2ff", description: "Холодный голубой микс." }
  ],
  scenario: [
    { title: "Вступление", text: "Оператор встречает детей, проверяет готовность комнаты и запускает стартовую легенду. Комната затемняется, шторы закрываются, синий свет создаёт безопасное напряжение." },
    { title: "Сцены", text: "1. Старт. 2. Первая подсказка. 3. Стол. 4. Туалет. 5. Ветер. 6. Люстра. 7. Финал. В каждой сцене оператор следит за темпом, держит в фокусе подсказки и может в любой момент перейти в ручной режим." },
    { title: "Действия оператора", text: "Отмечать прогресс, включать эффекты, запускать короткие звуки без лишней навигации, управлять выходом актёра и использовать аварийный блок при нестандартной ситуации." },
    { title: "Реплики ведущего", text: "Ведущий удерживает атмосферу, но не забирает игру у детей. Основной тон: напряжённый, но безопасный. Подсказки сначала мягкие, затем средние, прямые только при необходимости." },
    { title: "Реплики системы", text: "Голос системы подтверждает важные моменты: старт, ошибку, найденную цепочку, приближение финала и победу." },
    { title: "Появление актёра", text: "Актёр используется как точечный усилитель атмосферы. Короткий выход у стола, скрытый шум у туалета, финальный безопасный выход в концовке." },
    { title: "Финал", text: "После правильного решения включается зелёный или нейтральный свет, открываются шторы, звучит победная музыка, актёр и ведущий поздравляют детей." },
    { title: "Коктейли после квеста", text: "Оператор быстро отмечает выбор детей на отдельном экране, чтобы команда бара или организатор сразу видели итог по трём позициям." }
  ]
};
