const fallbackData = {
  scenes: [
    {
      id: "start",
      number: 1,
      name: "Старт",
      goal: "Погрузить детей в историю и запустить первую цепочку загадок.",
      summary: "Ведущий встречает детей, комната закрывается, начинается вводная легенда.",
      operatorText: "Дай вводную, закрой комнату, зафиксируй внимание детей и переведи их на первый поиск.",
      actorNote: "Актёр не выходит. Остаётся за дверью и ждёт подготовки к сцене 'Стол'.",
      actorPrep: "Проверить, что актёр на позиции и знает: первый реальный выход будет через одну сцену.",
      upcomingWarning: "В следующей сцене подготовь мягкую подсказку и лампу стола. Через сцену будет первый короткий выход актёра.",
      majorActionPrep: "Заранее подготовь шторы к закрытию, синий свет и стартовую аудио-команду во внешней программе.",
      operatorTechSteps: ["Закрыть шторы вручную или по контроллеру.", "Перевести люстру в синий режим.", "Во внешней звуковой программе включить 'Стартовая подводка'.", "После вводной ведущего отметить старт сцены."],
      soundCues: ["Стартовая подводка", "Голос системы 1"],
      recommendedSounds: ["intro", "system_voice_1"],
      recommendedEffects: ["curtains_close", "chandelier_blue"],
      hints: ["hint_start_soft", "hint_start_direct"],
      automations: ["Закрыть шторы", "Включить синий свет", "Запустить стартовый звук"],
      operatorActions: ["Проверить готовность комнаты", "Дать легенду", "Подтвердить старт сцены"],
      activeDevices: ["Шторы", "Люстра", "Колонка"],
      progressChecks: ["Дети в комнате", "Легенда озвучена", "Дверь закрыта"],
      durationMin: 3
    },
    {
      id: "first_hint",
      number: 2,
      name: "Первая подсказка",
      goal: "Подтолкнуть детей к первому ключу без прямого ответа.",
      summary: "Оператор наблюдает за темпом и при необходимости даёт мягкий намёк.",
      operatorText: "Следи за паузами детей. Если они зависли, выдай мягкую подсказку и подсвети столовую зону.",
      actorNote: "Актёр пока не выходит, но должен уже быть готов к короткому появлению в следующей сцене.",
      actorPrep: "Предупредить актёра: следующая сцена — короткий выход на 2-3 секунды у стола.",
      upcomingWarning: "Следующая сцена — 'Стол': потребуется подсветка второй лампы, scary-момент и выход актёра.",
      majorActionPrep: "Заранее открой нужный банк звуков во внешней программе и подготовь scary-эффект для следующей сцены.",
      operatorTechSteps: ["Держать наготове лампу 1 и включить её, если детям нужен фокус на зоне.", "Во внешней звуковой программе подготовить 'Подсказка 1' и 'Ошибка системы'.", "При необходимости выдать мягкую подсказку.", "Сообщить актёру о скором выходе в следующей сцене."],
      soundCues: ["Подсказка 1", "Ошибка системы"],
      recommendedSounds: ["hint_1", "system_error"],
      recommendedEffects: ["desk_lamp_1_toggle"],
      hints: ["hint_scene_2_soft", "hint_scene_2_medium", "hint_scene_2_direct"],
      automations: ["Мягкий голосовой намёк", "Подсветить зону стола лампой"],
      operatorActions: ["Оценить прогресс", "При необходимости выдать намёк"],
      activeDevices: ["Колонка", "Настольная лампа 1"],
      progressChecks: ["Нашли первый символ", "Поняли механику замков"],
      durationMin: 4
    },
    {
      id: "table",
      number: 3,
      name: "Стол",
      goal: "Решить головоломку на столе и открыть тайник.",
      summary: "Главная рабочая сцена у стола с первым коротким появлением актёра.",
      operatorText: "Подсвети стол, держи scary-момент наготове и точно дай сигнал актёру на очень короткий выход.",
      actorNote: "Коротко появиться в проёме, максимум 3 секунды, затем сразу уйти.",
      actorPrep: "Перед сценой подтвердить с актёром точку появления, путь отхода и стоп-сигнал.",
      upcomingWarning: "Следующая сцена переводит внимание в новую зону. Подготовь красный свет и тревожную аудио-команду.",
      majorActionPrep: "Заранее держи палец на красном свете и на тревожной дорожке во внешней программе.",
      operatorTechSteps: ["Включить настольную лампу 2.", "Подготовить 'Мистический шёпот' и короткий резкий эффект во внешней программе.", "По открытию тайника дать scary-момент.", "Чётко подать актёру сигнал 'выход' и затем 'уход'."],
      soundCues: ["Мистический шёпот", "Резкий эффект"],
      recommendedSounds: ["mystic_whisper", "stinger_hit"],
      recommendedEffects: ["desk_lamp_2_toggle", "mystic_scene"],
      hints: ["hint_table_soft", "hint_table_direct"],
      automations: ["Подсветка второго стола", "Короткий scary stinger"],
      operatorActions: ["Подтвердить открытие тайника", "Запустить выход актёра"],
      activeDevices: ["Настольная лампа 2", "Колонка", "Актёр"],
      progressChecks: ["Тайник открыт", "Ключ найден"],
      durationMin: 5
    },
    {
      id: "toilet",
      number: 4,
      name: "Туалет",
      goal: "Перевести внимание в неожиданный угол комнаты и продолжить расследование.",
      summary: "Смена зоны, тревожный свет, системная ошибка и контроль реакции детей.",
      operatorText: "Сделай красную вспышку, дай ошибку системы, затем верни рабочий режим и проведи детей к новой зоне.",
      actorNote: "Актёр не выходит, только скрытый шум за дверью или ожидание команды дальше.",
      actorPrep: "Сообщить актёру, что пока без выхода, но нужно готовиться к финальной цепочке дальше по сценарию.",
      upcomingWarning: "Следующая сцена — ветер. Заранее подготовь вентилятор и внешний резкий звуковой эффект.",
      majorActionPrep: "Проверь питание вентилятора и заранее открой нужный звуковой банк во внешней программе.",
      operatorTechSteps: ["На 2-3 секунды переключить люстру в красный режим.", "Во внешней программе включить 'Ошибка системы' или 'Тревога'.", "Вернуть комнату в рабочее состояние после эмоционального пика.", "Перенаправить внимание детей в новую зону."],
      soundCues: ["Ошибка системы", "Тревога"],
      recommendedSounds: ["system_error", "alarm"],
      recommendedEffects: ["chandelier_red", "curtains_open"],
      hints: ["hint_toilet_soft", "hint_toilet_medium", "hint_toilet_direct"],
      automations: ["Красная вспышка", "Тревожный звук", "Сброс на рабочее освещение"],
      operatorActions: ["Открыть новую зону", "Дать детям время на осмотр"],
      activeDevices: ["Люстра", "Шторы", "Колонка"],
      progressChecks: ["Дети пошли в нужную зону", "Нашли второй ключ"],
      durationMin: 4
    },
    {
      id: "wind",
      number: 5,
      name: "Ветер",
      goal: "Создать пик напряжения с помощью вентилятора и резкого эффекта.",
      summary: "Комната физически реагирует на действия детей: ветер и напряжение растут.",
      operatorText: "Подними напряжение вентилятором, но держи контроль по времени и не затягивай сильный эффект.",
      actorNote: "Актёр не выходит, но должен быть уже почти полностью готов к финалу.",
      actorPrep: "Предупредить актёра, что после следующей сцены будет финальный блок и возможен выход на поклон.",
      upcomingWarning: "Следующая сцена — 'Люстра': заранее подготовь смену цветов и финальную музыку во внешней программе.",
      majorActionPrep: "Проверь, что зелёный режим света сработает сразу и победная дорожка уже найдена во внешней программе.",
      operatorTechSteps: ["Включить вентилятор на короткий промежуток.", "Во внешней программе подготовить 'Порыв ветра' и 'Резкий эффект'.", "После эффекта вернуть комфортный режим.", "Отследить, что дети поняли направление поиска."],
      soundCues: ["Порыв ветра", "Резкий эффект"],
      recommendedSounds: ["wind_burst", "stinger_hit"],
      recommendedEffects: ["fan_toggle", "sharp_wind"],
      hints: ["hint_wind_soft", "hint_wind_direct"],
      automations: ["Резкий ветер", "Короткий ударный звук"],
      operatorActions: ["Проверить реакцию детей", "Отключить вентилятор после 10 секунд"],
      activeDevices: ["Вентилятор", "Шторы", "Колонка"],
      progressChecks: ["Поняли подсказку на стене", "Собрали код"],
      durationMin: 4
    },
    {
      id: "chandelier",
      number: 6,
      name: "Люстра",
      goal: "Подвести детей к финальной сборке решения через световую механику.",
      summary: "Ключевая сцена перед финалом: свет уже подводит к победе.",
      operatorText: "Работай цветами вручную и держи финал полностью готовым ещё до нажатия последнего решения.",
      actorNote: "Актёр занимает финальную позицию и ждёт команду на безопасный выход после победы.",
      actorPrep: "Подтвердить с актёром точку финального выхода, текст поздравления и безопасную дистанцию до детей.",
      upcomingWarning: "Следующая сцена — финал. Заранее включи общий свет, открытие штор и держи победную музыку на старте.",
      majorActionPrep: "За минуту до финала всё должно быть готово: зелёный свет, шторы, победная дорожка, актёр на позиции.",
      operatorTechSteps: ["Переключать цвета люстры по попыткам детей.", "Во внешней программе держать готовыми 'Голос системы 1' и 'Музыка после победы'.", "При верном ответе сразу дать зелёный режим.", "Синхронизировать актёра и финальный блок."],
      soundCues: ["Голос системы 1", "Музыка после победы"],
      recommendedSounds: ["system_voice_1", "mystic_pad"],
      recommendedEffects: ["chandelier_green", "chandelier_blink"],
      hints: ["hint_chandelier_soft", "hint_chandelier_medium", "hint_chandelier_direct"],
      automations: ["Смена цвета люстры", "Финальная подготовка"],
      operatorActions: ["Отметить правильную комбинацию", "Подготовить финал"],
      activeDevices: ["Люстра", "Колонка"],
      progressChecks: ["Ответ найден", "Финальная дверь готова"],
      durationMin: 5
    },
    {
      id: "final",
      number: 7,
      name: "Финал",
      goal: "Завершить квест эффектно, включить свет, поздравление и перейти к напиткам.",
      summary: "Безопасное завершение: общий свет, открытые шторы, победа и перевод в послеквестовый блок.",
      operatorText: "Финал должен быть чётким и быстрым: свет, шторы, поздравление, музыка, актёр, затем коктейли.",
      actorNote: "Актёр выходит спокойно и безопасно, поздравляет и помогает завершить историю.",
      actorPrep: "Перед выходом актёр ждёт зелёный свет и точную команду оператора.",
      upcomingWarning: "Дальше игровой сцены нет. После финала сразу переходи к коктейлям и организационному завершению.",
      majorActionPrep: "Подготовь общий свет, открытие штор и переключение команды на послеквестовый сервисный блок.",
      operatorTechSteps: ["Включить весь свет.", "Открыть шторы.", "Во внешней программе включить победную музыку и поздравление.", "Дать актёру сигнал на финальный выход и перевести детей к коктейлям."],
      soundCues: ["Музыка после победы", "Поздравление системы"],
      recommendedSounds: ["final_music", "victory_voice"],
      recommendedEffects: ["final_mode", "curtains_open"],
      hints: ["hint_final_soft"],
      automations: ["Общий свет", "Открыть шторы", "Финальная музыка"],
      operatorActions: ["Завершить таймер", "Поблагодарить команду", "Открыть коктейли"],
      activeDevices: ["Люстра", "Шторы", "Колонка", "Актёр"],
      progressChecks: ["Финал подтверждён", "Дети переведены к коктейлям"],
      durationMin: 3
    }
  ],
  sounds: [
    { id: "intro", name: "Стартовая подводка", category: "start", color: "blue", kind: "cue", file: "./assets/audio/intro.mp3", description: "Включить вручную во внешней программе." },
    { id: "alarm", name: "Тревога", category: "alarm", color: "red", kind: "cue", file: "./assets/audio/alarm.mp3", description: "Включить вручную во внешней программе." },
    { id: "mystic_whisper", name: "Мистический шёпот", category: "mystic", color: "violet", kind: "cue", file: "./assets/audio/mystic_whisper.mp3", description: "Включить вручную во внешней программе." },
    { id: "mystic_pad", name: "Мистический фон", category: "mystic", color: "violet", kind: "cue", file: "./assets/audio/mystic_pad.mp3", description: "Фон держать готовым во внешней программе." },
    { id: "system_voice_1", name: "Голос системы 1", category: "system", color: "teal", kind: "cue", file: "./assets/audio/system_voice_1.mp3", description: "Подготовить как голосовую подсказку." },
    { id: "system_error", name: "Ошибка системы", category: "error", color: "yellow", kind: "cue", file: "./assets/audio/system_error.mp3", description: "Запускать вручную по сценарию." },
    { id: "hint_1", name: "Подсказка 1", category: "hint", color: "yellow", kind: "cue", file: "./assets/audio/hint_1.mp3", description: "Использовать как мягкий намёк." },
    { id: "stinger_hit", name: "Резкий эффект", category: "fx", color: "red", kind: "cue", file: "./assets/audio/stinger_hit.mp3", description: "Короткий страшный ударный эффект." },
    { id: "wind_burst", name: "Порыв ветра", category: "fx", color: "violet", kind: "cue", file: "./assets/audio/wind_burst.mp3", description: "Синхронно с вентилятором." },
    { id: "victory_voice", name: "Поздравление системы", category: "final", color: "green", kind: "cue", file: "./assets/audio/victory_voice.mp3", description: "Включить на финале вручную." },
    { id: "final_music", name: "Музыка после победы", category: "afterparty", color: "green", kind: "cue", file: "./assets/audio/final_music.mp3", description: "Включить после победы вручную." }
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
      final: [{ id: "hint_final_soft", level: "Мягкая", text: "Финальный шаг уже найден, осталось подтвердить решение." }]
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
    { title: "Действия оператора", text: "Отмечать прогресс, включать эффекты, запускать свет, заранее готовить актёра и вести технику вручную по сценам." },
    { title: "Реплики ведущего", text: "Ведущий удерживает атмосферу, но не забирает игру у детей. Основной тон: напряжённый, но безопасный. Подсказки сначала мягкие, затем средние, прямые только при необходимости." },
    { title: "Реплики системы", text: "Все аудио-вставки запускаются оператором вручную во внешней программе по текстовым пометкам внутри пульта." },
    { title: "Появление актёра", text: "Актёр используется как точечный усилитель атмосферы. Предупреждения о его выходе показываются заранее на предыдущей сцене." },
    { title: "Финал", text: "После правильного решения включается зелёный или нейтральный свет, открываются шторы, оператор вручную запускает победную дорожку, актёр и ведущий поздравляют детей." },
    { title: "Коктейли после квеста", text: "Оператор быстро отмечает выбор детей на отдельном экране, чтобы команда бара или организатор сразу видели итог по трём позициям." }
  ]
};

const state = { mode: "script", activeTab: "console", currentSceneIndex: 0, completedScenes: new Set(), expandedScenes: new Set(), logs: [], data: null, customHintText: "", cocktails: {}, tick: Date.now(), sceneStartedAt: Date.now(), deviceState: { curtains: "открыты", chandelier: "нейтральный", deskLamp1: false, deskLamp2: false, fan: false } };
const root = document.getElementById("app");
const TABS = [{ id: "console", label: "Пульт" }, { id: "scenes", label: "Сцены" }, { id: "soundboard", label: "Аудио" }, { id: "effects", label: "Свет" }, { id: "hints", label: "Подсказки" }, { id: "script", label: "Сценарий" }, { id: "cocktails", label: "Коктейли" }];
const SOUND_CATEGORY_LABELS = { start: "Старт", alarm: "Тревога", mystic: "Мистические звуки", system: "Голос системы", hint: "Подсказки", error: "Ошибка системы", fx: "Короткие эффекты", final: "Финал", afterparty: "После победы" };
const colorClassMap = { blue: "action-blue", green: "action-green", red: "action-red", yellow: "action-yellow", violet: "action-violet", teal: "action-teal" };

init();
setInterval(() => { state.tick = Date.now(); if (state.data) render(); }, 1000);

async function init() {
  state.data = await loadData();
  state.cocktails = Object.fromEntries(state.data.cocktails.map((item) => [item.id, 0]));
  state.sceneStartedAt = Date.now();
  logAction("Система готова", "Пульт и сценарий оператора загружены");
}

async function loadData() {
  const names = ["scenes", "sounds", "effects", "hints", "cocktails", "scenario"];
  try {
    const loaded = await Promise.all(names.map((name) => fetch(`./data/${name}.json`).then((response) => { if (!response.ok) throw new Error(name); return response.json(); })));
    return mergeLoadedData(Object.fromEntries(names.map((name, index) => [name, loaded[index]])));
  } catch {
    return fallbackData;
  }
}

function mergeLoadedData(loaded) {
  const fallbackScenes = Object.fromEntries(fallbackData.scenes.map((scene) => [scene.id, scene]));
  return {
    ...fallbackData,
    ...loaded,
    scenes: loaded.scenes.map((scene) => ({ ...fallbackScenes[scene.id], ...scene }))
  };
}

function nowTime() { return new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(new Date()); }
function logAction(label, status) { state.logs.unshift({ id: `${Date.now()}-${Math.random()}`, time: nowTime(), label, status }); state.logs = state.logs.slice(0, 100); render(); }
function getCurrentScene() { return state.data.scenes[state.currentSceneIndex]; }
function getNextScene() { return state.data.scenes[state.currentSceneIndex + 1] || null; }
function findScene(sceneId) { return state.data.scenes.find((scene) => scene.id === sceneId); }
function getHintsForScene(sceneId) { return state.data.hints.sceneHints[sceneId] || []; }
function getEffectById(effectId) { return state.data.effects.find((item) => item.id === effectId); }
function getSceneElapsedSec(sceneIndex = state.currentSceneIndex) { if (sceneIndex !== state.currentSceneIndex) { if (state.completedScenes.has(state.data.scenes[sceneIndex].id)) return state.data.scenes[sceneIndex].durationMin * 60; return 0; } return Math.max(0, Math.floor((state.tick - state.sceneStartedAt) / 1000)); }
function getSceneProgress(scene, sceneIndex = state.currentSceneIndex) { const target = Math.max(1, (scene.durationMin || 1) * 60); const elapsed = getSceneElapsedSec(sceneIndex); if (state.completedScenes.has(scene.id)) return 100; return Math.min(100, Math.round((elapsed / target) * 100)); }
function formatDuration(seconds) { const minutes = String(Math.floor(seconds / 60)).padStart(2, "0"); const secs = String(seconds % 60).padStart(2, "0"); return `${minutes}:${secs}`; }
function resetSceneTimer() { state.sceneStartedAt = Date.now(); logAction("Таймер сцены", `Таймер сцены "${getCurrentScene().name}" сброшен`); }
function setMode(mode) { state.mode = mode; logAction(mode === "manual" ? "Режим ручного управления" : "Режим сценария", mode === "manual" ? "Оператор сам решает порядок действий" : "Пульт показывает последовательные шаги по сценам"); }
function setTab(tabId) { state.activeTab = tabId; render(); }
function markSceneComplete(sceneId) { if (state.completedScenes.has(sceneId)) { state.completedScenes.delete(sceneId); logAction("Прогресс сцены", `Сцена "${findScene(sceneId).name}" снята с отметки`); } else { state.completedScenes.add(sceneId); logAction("Прогресс сцены", `Сцена "${findScene(sceneId).name}" отмечена как выполненная`); } }
function toggleSceneDetails(sceneId) { if (state.expandedScenes.has(sceneId)) state.expandedScenes.delete(sceneId); else state.expandedScenes.add(sceneId); render(); }
function jumpToScene(sceneId) { const index = state.data.scenes.findIndex((scene) => scene.id === sceneId); if (index < 0) return; state.currentSceneIndex = index; state.activeTab = "console"; state.sceneStartedAt = Date.now(); logAction("Переход к сцене", `Открыта сцена "${state.data.scenes[index].name}"`); }
function startQuest() { state.currentSceneIndex = 0; state.completedScenes.clear(); state.sceneStartedAt = Date.now(); logAction("Старт квеста", "Оператор начинает первую сцену и ведёт технику вручную"); }
function nextScene() { if (state.currentSceneIndex < state.data.scenes.length - 1) { state.completedScenes.add(getCurrentScene().id); state.currentSceneIndex += 1; state.sceneStartedAt = Date.now(); logAction("Следующая сцена", `Переключение на "${getCurrentScene().name}"`); } else triggerFinal(); }
function previousScene() { if (state.currentSceneIndex > 0) { state.currentSceneIndex -= 1; state.sceneStartedAt = Date.now(); logAction("Предыдущая сцена", `Возврат к сцене "${getCurrentScene().name}"`); } }
function pauseQuest() { logAction("Пауза", "Игра на паузе. Проверь технику и состояние детей."); }
function triggerHint() { const currentScene = getCurrentScene(); const hint = getHintsForScene(currentScene.id)[0] || state.data.hints.universal[0]; showHintToOperator(hint.text, `${currentScene.name} · ${hint.level}`); }
function actorEnter() { logAction("Актёр выходит", "Оператор вручную подаёт сигнал на выход актёра"); }
function actorLeave() { logAction("Актёр уходит", "Оператор вручную подаёт сигнал на уход актёра"); }
function emergencyLight() { state.deviceState.chandelier = "общий свет"; logAction("Экстренный свет", "Оператор включает весь свет вручную"); }
function openCurtains() { state.deviceState.curtains = "открыты"; logAction("Шторы", "Оператор открывает шторы вручную"); }
function closeCurtains() { state.deviceState.curtains = "закрыты"; logAction("Шторы", "Оператор закрывает шторы вручную"); }
function setChandelier(_mode, label) { state.deviceState.chandelier = label; logAction("Люстра", `Оператор переводит люстру в режим: ${label}`); }
function toggleDeskLamp(key, label) { state.deviceState[key] = !state.deviceState[key]; logAction(label, `${label}: ${state.deviceState[key] ? "включена" : "выключена"}`); }
function toggleFan() { state.deviceState.fan = !state.deviceState.fan; logAction("Вентилятор", `Вентилятор: ${state.deviceState.fan ? "включён" : "выключен"}`); }
function resetEffects() { state.deviceState = { curtains: "открыты", chandelier: "нейтральный", deskLamp1: false, deskLamp2: false, fan: false }; logAction("Сброс эффектов", "Оператор возвращает технику в базовое состояние"); }
function stopAllSounds() { logAction("Остановка звука", "Оператор должен остановить все дорожки во внешней звуковой программе"); }
function triggerSharpWind() { logAction("Эффект", "Оператор вручную запускает резкий ветер и связанный внешний аудио-эффект"); }
function triggerMysticScene() { setChandelier("mystic", "мистический синий"); logAction("Эффект", "Оператор вручную собирает мистическую сцену"); }
function triggerFinalScene() { emergencyLight(); openCurtains(); logAction("Эффект", "Оператор вручную запускает финальный технический набор"); }
function triggerScaryMoment() { logAction("Страшный момент", "Оператор вручную включает scary-эффект и внешний звуковой удар"); }
function triggerFinal() { state.currentSceneIndex = state.data.scenes.length - 1; state.sceneStartedAt = Date.now(); logAction("Финал", "Оператор переводит игру в финальную сцену и запускает финальный технический набор вручную"); }
function executeEffect(effectId) { const effect = getEffectById(effectId); if (!effect) return; const handlers = { closeCurtains, openCurtains, setChandelierOff: () => setChandelier("off", "выключена"), setChandelierOn: () => setChandelier("on", "включена"), setChandelierBlue: () => setChandelier("blue", "синий режим"), setChandelierRed: () => setChandelier("red", "красный режим"), setChandelierGreen: () => setChandelier("green", "зелёный режим"), setChandelierBlink: () => setChandelier("blink", "режим мигания"), toggleDeskLamp1: () => toggleDeskLamp("deskLamp1", "Настольная лампа 1"), toggleDeskLamp2: () => toggleDeskLamp("deskLamp2", "Настольная лампа 2"), toggleFan, triggerSharpWind, triggerMysticScene, triggerFinalScene }; handlers[effect.handler]?.(); }
function showHintToOperator(text, sourceLabel = "Подсказка") { logAction("Подсказка оператору", `${sourceLabel}: ${text}`); }
function sendHintToSpeaker(text, sourceLabel = "Подсказка") { logAction("Подсказка в колонку", `${sourceLabel}: ${text}`); }
function updateCustomHint(value) { state.customHintText = value; }
function submitCustomHint() { const value = state.customHintText.trim(); if (!value) { logAction("Подсказка", "Введите текст перед отправкой"); return; } sendHintToSpeaker(value, "Ручная подсказка"); state.customHintText = ""; render(); }
function updateCocktail(id, delta) { state.cocktails[id] = Math.max(0, (state.cocktails[id] || 0) + delta); const cocktail = state.data.cocktails.find((item) => item.id === id); logAction("Коктейли", `${cocktail.name}: ${state.cocktails[id]}`); }
function clearCocktails() { Object.keys(state.cocktails).forEach((key) => { state.cocktails[key] = 0; }); logAction("Коктейли", "Выбор коктейлей очищен"); }
function actionButton(label, action, color) { return `<button class="action-btn ${colorClassMap[color]}" data-action="${action}">${label}</button>`; }
function detailBlock(label, value, extraClass = "") { return `<div class="detail-item ${extraClass}"><span class="detail-label">${label}</span><div class="script-text">${value}</div></div>`; }
function tagClass(color) { return `tag-${color || "blue"}`; }
function progressBar(value, label) { return `<div class="progress-wrap"><div class="progress-head"><strong>${label}</strong><span>${value}%</span></div><div class="progress-bar"><div class="progress-fill" style="width:${value}%"></div></div></div>`; }
function render() {
  if (!state.data) { root.innerHTML = `<div class="panel"><h1 class="brand-title">Загрузка пульта...</h1></div>`; return; }
  const currentScene = getCurrentScene();
  root.innerHTML = `<header class="topbar"><div class="topbar-grid"><div><p class="muted">Операторский центр живого квеста</p><h1 class="brand-title">Quest Control Console</h1><p class="brand-subtitle">Текущая сцена: ${currentScene.number}. ${currentScene.name}</p></div><div class="status-strip"><div class="status-card"><span class="meta-label">Режим</span><strong>${state.mode === "manual" ? "Ручной" : "Сценарный"}</strong></div><div class="status-card"><span class="meta-label">Шторы</span><strong>${state.deviceState.curtains}</strong></div><div class="status-card"><span class="meta-label">Люстра</span><strong>${state.deviceState.chandelier}</strong></div></div><div class="mode-switch"><button class="mode-btn ${state.mode === "manual" ? "active" : ""}" data-mode="manual">Ручной</button><button class="mode-btn ${state.mode === "script" ? "active" : ""}" data-mode="script">Сценарный</button></div></div></header><nav class="tabbar">${TABS.map((tab) => `<button class="tab-btn ${state.activeTab === tab.id ? "active" : ""}" data-tab="${tab.id}">${tab.label}</button>`).join("")}</nav><div class="layout"><main class="bottom-grid">${renderScreen(currentScene)}</main><aside>${renderLogPanel()}</aside></div>`;
  bindEvents();
}

function renderScreen(scene) {
  if (state.activeTab === "console") return renderConsole(scene);
  if (state.activeTab === "scenes") return renderScenes();
  if (state.activeTab === "soundboard") return renderAudioPlan();
  if (state.activeTab === "effects") return renderEffects();
  if (state.activeTab === "hints") return renderHints();
  if (state.activeTab === "script") return renderScript();
  return renderCocktails();
}

function renderConsole(scene) {
  const sceneHints = getHintsForScene(scene.id);
  const nextScene = getNextScene();
  const progress = getSceneProgress(scene);
  const elapsed = getSceneElapsedSec();
  const targetSeconds = (scene.durationMin || 1) * 60;
  return `<section class="panel"><h2 class="section-title">Главный пульт</h2><p class="section-subtitle">Основные кнопки под рукой. Технику оператор ведёт вручную по крупным указаниям ниже.</p><div class="control-grid">${actionButton("Старт квеста", "startQuest", "green")}${actionButton("Следующая сцена", "nextScene", "blue")}${actionButton("Предыдущая сцена", "previousScene", "blue")}${actionButton("Пауза", "pauseQuest", "yellow")}${actionButton("Финал", "triggerFinal", "green")}${actionButton("Экстренный свет", "emergencyLight", "red")}${actionButton("Остановить звук", "stopAllSounds", "red")}${actionButton("Подсказка", "triggerHint", "yellow")}${actionButton("Страшный момент", "triggerScaryMoment", "violet")}${actionButton("Актёр выходит", "actorEnter", "teal")}${actionButton("Актёр уходит", "actorLeave", "teal")}${actionButton("Сброс таймера", "resetSceneTimer", "blue")}</div></section><section class="scene-grid"><div class="panel scene-now"><div><span class="scene-badge">Сцена ${scene.number} из ${state.data.scenes.length}</span><h2 class="brand-title">${scene.name}</h2><p class="section-subtitle">${scene.summary}</p></div><div class="timer-panel">${progressBar(progress, `Таймер сцены · план ${scene.durationMin} мин`)}<div class="timer-readout">${formatDuration(elapsed)} / ${formatDuration(targetSeconds)}</div></div><div class="detail-list">${detailBlock("Что делают дети", scene.goal)}${detailBlock("Подсказка оператору", scene.operatorText)}${detailBlock("Что делает актёр", scene.actorNote)}${detailBlock("Активные устройства", scene.activeDevices.join(", "))}</div></div><div class="panel"><h3 class="card-title">Быстрые рекомендации сцены</h3><div class="mini-list"><div class="mini-row"><span class="detail-label">Что подготовить к следующей сцене</span><div class="script-text">${scene.upcomingWarning}</div></div><div class="mini-row"><span class="detail-label">Подготовка актёра заранее</span><div class="script-text">${scene.actorPrep}</div></div><div class="mini-row"><span class="detail-label">Крупное действие заранее</span><div class="script-text">${scene.majorActionPrep}</div></div><div class="mini-row"><span class="detail-label">Подсказки по сцене</span><div class="card-chip-row">${sceneHints.map((hint) => `<button class="chip-btn" data-show-hint="${hint.id}">${hint.level}</button>`).join("") || `<span class="muted">Нет подсказок</span>`}</div></div><div class="mini-row"><span class="detail-label">Контроль прогресса</span><div class="card-chip-row">${scene.progressChecks.map((item) => `<button class="chip-btn" data-progress-note="${scene.id}:${item}">${item}</button>`).join("")}</div></div>${nextScene ? `<div class="mini-row"><span class="detail-label">Следом идёт</span><div class="script-text"><strong>${nextScene.number}. ${nextScene.name}</strong><br>${nextScene.summary}</div></div>` : ""}</div></div></section><section class="panel operator-focus-panel"><h3 class="card-title">Что оператор делает по технике прямо сейчас</h3><div class="operator-focus-list">${scene.operatorTechSteps.map((step, index) => `<div class="operator-focus-item"><span class="operator-step">${index + 1}</span><div class="operator-focus-text">${step}</div></div>`).join("")}</div><p class="footer-note">Этот блок специально крупный: он заменяет автоматизацию и ведёт оператора по реальным действиям руками.</p></section><section class="panel"><h3 class="card-title">Компактный блок света и эффектов</h3><div class="quick-effects">${["curtains_close", "curtains_open", "chandelier_blue", "chandelier_red", "fan_toggle", "final_mode"].map((id) => `<button class="mini-btn" data-effect="${id}">${getEffectById(id).name}</button>`).join("")}</div><div class="mini-row" style="margin-top:12px;"><span class="detail-label">Что включить по звуку отдельно</span><div class="script-text">${scene.soundCues.join(", ")}</div></div></section><section class="panel emergency-panel"><h3 class="card-title">Аварийный блок</h3><p class="section-subtitle">Всегда под рукой для мгновенного безопасного сброса.</p><div class="emergency-grid">${actionButton("Включить весь свет", "emergencyLight", "red")}${actionButton("Остановить звук", "stopAllSounds", "red")}${actionButton("Открыть шторы", "openCurtains", "red")}${actionButton("Сбросить эффекты", "resetEffects", "red")}</div></section>`;
}

function renderScenes() {
  return `<section class="panel"><h2 class="section-title">Сцены</h2><p class="section-subtitle">Полная режиссёрская структура со временем, техзадачами и предупреждениями заранее.</p><div class="scene-grid">${state.data.scenes.map((scene, index) => { const expanded = state.expandedScenes.has(scene.id); const completed = state.completedScenes.has(scene.id); const progress = getSceneProgress(scene, index); return `<article class="scene-card"><div class="sound-header"><div><span class="tag tag-blue">Сцена ${scene.number}</span><h3 class="card-title">${scene.name}</h3><div class="muted">${scene.goal}</div></div><div class="tag ${completed ? "tag-green" : index === state.currentSceneIndex ? "tag-blue" : "tag-yellow"}">${completed ? "Готово" : index === state.currentSceneIndex ? "Активна" : "Ожидает"}</div></div><div>${scene.summary}</div>${progressBar(progress, `План ${scene.durationMin} мин`)}<div class="scene-actions"><button class="mini-btn" data-jump-scene="${scene.id}">Запустить сцену</button><button class="mini-btn" data-toggle-scene="${scene.id}">${expanded ? "Свернуть детали" : "Развернуть детали"}</button><button class="mini-btn" data-mark-scene="${scene.id}">${completed ? "Снять отметку" : "Отметить прогресс"}</button></div>${expanded ? `<div class="detail-list">${detailBlock("Техника оператора", scene.operatorTechSteps.join("\n"), "detail-strong")}${detailBlock("Подготовка актёра заранее", scene.actorPrep)}${detailBlock("Крупное действие заранее", scene.majorActionPrep)}${detailBlock("Что включить во внешней звуковой программе", scene.soundCues.join(", "))}${detailBlock("Подсказки", getHintsForScene(scene.id).map((hint) => `${hint.level}: ${hint.text}`).join("\n"))}${detailBlock("Заметка для актёра", scene.actorNote)}</div>` : ""}</article>`; }).join("")}</div></section>`;
}

function renderAudioPlan() {
  const groups = Object.entries(SOUND_CATEGORY_LABELS).map(([key, label]) => ({ key, label, items: state.data.sounds.filter((sound) => sound.category === key) }));
  return `<section class="panel"><h2 class="section-title">Аудио-план</h2><p class="section-subtitle">Здесь нет плеера. Это список того, что оператор включает во внешней звуковой программе.</p><div class="sound-grid">${groups.map((group) => `<article class="sound-card"><div class="sound-header"><h3 class="card-title">${group.label}</h3><span class="tag ${tagClass(group.items[0]?.color)}">${group.items.length} команд</span></div>${group.items.length ? group.items.map((sound) => `<div class="mini-row"><span class="detail-label">${sound.name}</span><div>${sound.description}</div><div class="muted">Файл: ${sound.file}</div></div>`).join("") : `<div class="empty-state">Категория пока пуста</div>`}</article>`).join("")}</div></section>`;
}

function renderEffects() { return `<section class="panel"><h2 class="section-title">Свет и эффекты</h2><p class="section-subtitle">Кнопки остаются как мок-пульт и журнал действий, но техника по факту выполняется оператором вручную.</p><div class="effects-grid">${state.data.effects.map((effect) => `<article class="effect-card"><div class="sound-header"><h3 class="card-title">${effect.name}</h3><span class="tag ${tagClass(effect.color)}">${effect.type}</span></div><div class="muted">Handler: <code>${effect.handler}</code></div><button class="sound-btn ${colorClassMap[effect.color]}" data-effect="${effect.id}">Отметить действие</button></article>`).join("")}</div></section>`; }
function renderHints() { const currentScene = getCurrentScene(); const sceneHints = getHintsForScene(currentScene.id); const hintItem = (hint, source) => `<div class="mini-row"><span class="detail-label">${hint.level}</span><div>${hint.text}</div><div class="hint-actions"><button class="mini-btn" data-hint-speaker="${source}|${hint.id}">Отправить в колонку</button><button class="mini-btn" data-hint-show="${source}|${hint.id}">Показать оператору</button></div></div>`; return `<section class="panel"><h2 class="section-title">Подсказки</h2><p class="section-subtitle">Универсальные и сценические подсказки, плюс ручной ввод текста.</p><div class="hint-grid"><article class="hint-card"><h3 class="card-title">Универсальные подсказки</h3>${state.data.hints.universal.map((hint) => hintItem(hint, "Универсальная")).join("")}</article><article class="hint-card"><h3 class="card-title">Подсказки сцены: ${currentScene.name}</h3>${sceneHints.length ? sceneHints.map((hint) => hintItem(hint, currentScene.name)).join("") : `<div class="empty-state">Для этой сцены пока нет подсказок.</div>`}</article></div><div class="panel" style="margin-top:14px;"><h3 class="card-title">Ручная подсказка</h3><textarea class="textarea" id="customHintInput" placeholder="Введите текст для колонки или заметку оператору...">${state.customHintText}</textarea><div class="hint-actions" style="margin-top:12px;"><button class="sound-btn action-yellow" data-custom-hint="send">Отправить в колонку</button><button class="mini-btn" data-custom-hint="show">Показать оператору</button></div></div></section>`; }
function renderScript() { return `<section class="panel"><h2 class="section-title">Сценарий</h2><p class="section-subtitle">Шпаргалка под iPad: крупный шрифт и короткие блоки.</p><div class="script-grid">${state.data.scenario.map((block) => `<article class="script-card"><h3 class="card-title">${block.title}</h3><div class="script-text">${block.text}</div></article>`).join("")}</div></section>`; }
function renderCocktails() { const totalCount = Object.values(state.cocktails).reduce((sum, value) => sum + value, 0); return `<section class="panel"><h2 class="section-title">Коктейли</h2><p class="section-subtitle">Финальный быстрый учёт заказов после квеста.</p><div class="cocktail-grid">${state.data.cocktails.map((item) => `<article class="cocktail-card"><div class="sound-header"><div><h3 class="card-title">${item.name}</h3><div class="muted">${item.description}</div></div><span class="color-dot" style="background:${item.color}"></span></div><div class="counter-row"><button class="counter-btn" data-cocktail="${item.id}:-1">-1</button><div class="counter-box">${state.cocktails[item.id] || 0}</div><button class="counter-btn" data-cocktail="${item.id}:1">+1</button></div></article>`).join("")}</div><div class="panel" style="margin-top:14px;"><h3 class="card-title">Итоги</h3><div class="totals-row">${state.data.cocktails.map((item) => `<div class="mini-row"><strong>${item.name}</strong>: ${state.cocktails[item.id] || 0}</div>`).join("")}<div class="mini-row"><strong>Общее количество заказов</strong>: ${totalCount}</div></div><div class="card-actions" style="margin-top:12px;"><button class="sound-btn action-red" data-clear-cocktails="true">Очистить выбор</button></div></div></section>`; }
function renderLogPanel() { return `<div class="log-card"><h2 class="section-title">Журнал действий</h2><p class="section-subtitle">Что отметил оператор и какие команды он должен был выполнить руками.</p><div class="log-list">${state.logs.map((item) => `<div class="log-item"><div class="log-time">${item.time} - ${item.label}</div><div>${item.status}</div></div>`).join("")}</div></div>`; }
function bindEvents() {
  root.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
  root.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => setTab(button.dataset.tab)));
  const actionMap = { startQuest, nextScene, previousScene, pauseQuest, triggerFinal, emergencyLight, stopAllSounds, triggerHint, triggerScaryMoment, actorEnter, actorLeave, openCurtains, resetEffects, resetSceneTimer };
  root.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => actionMap[button.dataset.action]?.()));
  root.querySelectorAll("[data-effect]").forEach((button) => button.addEventListener("click", () => executeEffect(button.dataset.effect)));
  root.querySelectorAll("[data-jump-scene]").forEach((button) => button.addEventListener("click", () => jumpToScene(button.dataset.jumpScene)));
  root.querySelectorAll("[data-toggle-scene]").forEach((button) => button.addEventListener("click", () => toggleSceneDetails(button.dataset.toggleScene)));
  root.querySelectorAll("[data-mark-scene]").forEach((button) => button.addEventListener("click", () => markSceneComplete(button.dataset.markScene)));
  root.querySelectorAll("[data-show-hint]").forEach((button) => button.addEventListener("click", () => { const hint = Object.values(state.data.hints.sceneHints).flat().find((item) => item.id === button.dataset.showHint); if (hint) showHintToOperator(hint.text, hint.level); }));
  root.querySelectorAll("[data-hint-show], [data-hint-speaker]").forEach((button) => button.addEventListener("click", () => {
    const sourceAndId = button.dataset.hintShow || button.dataset.hintSpeaker;
    const [source, hintId] = sourceAndId.split("|");
    const hint = state.data.hints.universal.find((item) => item.id === hintId) || Object.values(state.data.hints.sceneHints).flat().find((item) => item.id === hintId);
    if (!hint) return;
    if (button.dataset.hintSpeaker) sendHintToSpeaker(hint.text, `${source} · ${hint.level}`);
    else showHintToOperator(hint.text, `${source} · ${hint.level}`);
  }));
  root.querySelectorAll("[data-progress-note]").forEach((button) => button.addEventListener("click", () => { const [, note] = button.dataset.progressNote.split(":"); logAction("Прогресс", note); }));
  root.querySelectorAll("[data-cocktail]").forEach((button) => button.addEventListener("click", () => { const [id, delta] = button.dataset.cocktail.split(":"); updateCocktail(id, Number(delta)); }));
  root.querySelectorAll("[data-clear-cocktails]").forEach((button) => button.addEventListener("click", () => clearCocktails()));
  const customHintInput = root.querySelector("#customHintInput");
  if (customHintInput) customHintInput.addEventListener("input", (event) => updateCustomHint(event.target.value));
  root.querySelectorAll("[data-custom-hint]").forEach((button) => button.addEventListener("click", () => {
    if (button.dataset.customHint === "send") submitCustomHint();
    else { const value = state.customHintText.trim(); if (!value) return logAction("Подсказка", "Введите текст перед показом оператору"); showHintToOperator(value, "Ручная подсказка"); }
  }));
}
