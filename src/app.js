const fallbackData = {
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


const state = {
  mode: "script",
  activeTab: "console",
  currentSceneIndex: 0,
  completedScenes: new Set(),
  expandedScenes: new Set(),
  logs: [],
  data: null,
  playingSounds: new Set(),
  customHintText: "",
  cocktails: {},
  deviceState: { curtains: "открыты", chandelier: "нейтральный", deskLamp1: false, deskLamp2: false, fan: false }
};

const audioPool = new Map();
const root = document.getElementById("app");
const TABS = [
  { id: "console", label: "Пульт" },
  { id: "scenes", label: "Сцены" },
  { id: "soundboard", label: "Саундборд" },
  { id: "effects", label: "Свет" },
  { id: "hints", label: "Подсказки" },
  { id: "script", label: "Сценарий" },
  { id: "cocktails", label: "Коктейли" }
];
const SOUND_CATEGORY_LABELS = {
  start: "Старт",
  alarm: "Тревога",
  mystic: "Мистические звуки",
  system: "Голос системы",
  hint: "Подсказки",
  error: "Ошибка системы",
  fx: "Короткие эффекты",
  final: "Финал",
  afterparty: "Музыка после победы"
};
const colorClassMap = { blue: "action-blue", green: "action-green", red: "action-red", yellow: "action-yellow", violet: "action-violet", teal: "action-teal" };

init();

async function init() {
  state.data = await loadData();
  state.cocktails = Object.fromEntries(state.data.cocktails.map((item) => [item.id, 0]));
  logAction("Система готова", "Пульт и демо-сценарий загружены");
}

async function loadData() {
  const names = ["scenes", "sounds", "effects", "hints", "cocktails", "scenario"];
  try {
    const loaded = await Promise.all(names.map((name) => fetch(`./data/${name}.json`).then((r) => {
      if (!r.ok) throw new Error(name);
      return r.json();
    })));
    return Object.fromEntries(names.map((name, index) => [name, loaded[index]]));
  } catch {
    return fallbackData;
  }
}

function nowTime() {
  return new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(new Date());
}

function logAction(label, status) {
  state.logs.unshift({ id: crypto.randomUUID(), time: nowTime(), label, status });
  state.logs = state.logs.slice(0, 80);
  render();
}

function getCurrentScene() { return state.data.scenes[state.currentSceneIndex]; }
function findScene(sceneId) { return state.data.scenes.find((scene) => scene.id === sceneId); }
function getHintsForScene(sceneId) { return state.data.hints.sceneHints[sceneId] || []; }
function getSoundById(soundId) { return state.data.sounds.find((item) => item.id === soundId); }
function getEffectById(effectId) { return state.data.effects.find((item) => item.id === effectId); }

function setMode(mode) {
  state.mode = mode;
  logAction(mode === "manual" ? "Режим ручного управления" : "Режим сценария", mode === "manual" ? "Оператор может запускать любые действия в любом порядке" : "Переходы по сценам идут пошагово");
}

function setTab(tabId) { state.activeTab = tabId; render(); }

function markSceneComplete(sceneId) {
  if (state.completedScenes.has(sceneId)) {
    state.completedScenes.delete(sceneId);
    logAction("Прогресс сцены", `Сцена \"${findScene(sceneId).name}\" снята с отметки`);
  } else {
    state.completedScenes.add(sceneId);
    logAction("Прогресс сцены", `Сцена \"${findScene(sceneId).name}\" отмечена как выполненная`);
  }
}

function toggleSceneDetails(sceneId) {
  if (state.expandedScenes.has(sceneId)) state.expandedScenes.delete(sceneId);
  else state.expandedScenes.add(sceneId);
  render();
}

function jumpToScene(sceneId) {
  const index = state.data.scenes.findIndex((scene) => scene.id === sceneId);
  if (index >= 0) {
    state.currentSceneIndex = index;
    state.activeTab = "console";
    logAction("Переход к сцене", `Открыта сцена \"${state.data.scenes[index].name}\"`);
    applySceneRecommendations(state.data.scenes[index], false);
  }
}

function startQuest() {
  state.currentSceneIndex = 0;
  state.completedScenes.clear();
  logAction("Старт квеста", "Сценарий запущен с первой сцены");
  applySceneRecommendations(getCurrentScene(), true);
}

function nextScene() {
  if (state.currentSceneIndex < state.data.scenes.length - 1) {
    state.completedScenes.add(getCurrentScene().id);
    state.currentSceneIndex += 1;
    const scene = getCurrentScene();
    logAction("Следующая сцена", `Переключение на \"${scene.name}\"`);
    applySceneRecommendations(scene, true);
  } else triggerFinal();
}

function previousScene() {
  if (state.currentSceneIndex > 0) {
    state.currentSceneIndex -= 1;
    logAction("Предыдущая сцена", `Возврат к сцене \"${getCurrentScene().name}\"`);
    render();
  }
}

function pauseQuest() {
  stopAllSounds(false);
  logAction("Пауза", "Звуки остановлены, текущая сцена сохранена");
}

function triggerHint() {
  const currentScene = getCurrentScene();
  const hint = getHintsForScene(currentScene.id)[0] || state.data.hints.universal[0];
  showHintToOperator(hint.text, `${currentScene.name} · ${hint.level}`);
}

function actorEnter() { logAction("Актёр выходит", "Сигнал для выхода актёра отправлен"); }
function actorLeave() { logAction("Актёр уходит", "Сигнал для ухода актёра отправлен"); }
function emergencyLight() { state.deviceState.chandelier = "общий свет"; logAction("Экстренный свет", "Включён весь свет"); }
function openCurtains() { state.deviceState.curtains = "открыты"; logAction("Шторы", "Шторы: открытие"); }
function closeCurtains() { state.deviceState.curtains = "закрыты"; logAction("Шторы", "Шторы: закрытие"); }
function setChandelier(mode, label) { state.deviceState.chandelier = label; logAction("Люстра", `Люстра: ${label}`); }
function toggleDeskLamp(key, label) { state.deviceState[key] = !state.deviceState[key]; logAction(label, `${label}: ${state.deviceState[key] ? "включена" : "выключена"}`); }
function toggleFan() { state.deviceState.fan = !state.deviceState.fan; logAction("Вентилятор", `Вентилятор: ${state.deviceState.fan ? "включён" : "выключен"}`); }

function resetEffects() {
  state.deviceState = { curtains: "открыты", chandelier: "нейтральный", deskLamp1: false, deskLamp2: false, fan: false };
  logAction("Сброс эффектов", "Состояния света, штор и вентилятора сброшены");
}

function stopAllSounds(log = true) {
  audioPool.forEach((audio, soundId) => { audio.pause(); audio.currentTime = 0; state.playingSounds.delete(soundId); });
  if (log) logAction("Экстренная остановка звука", "Все активные дорожки остановлены");
  else render();
}

function stopSound(soundId, shouldLog = true) {
  const audio = audioPool.get(soundId);
  if (audio) { audio.pause(); audio.currentTime = 0; }
  state.playingSounds.delete(soundId);
  if (shouldLog) logAction("Звук", `Остановлен звук: ${getSoundById(soundId)?.name || soundId}`);
  else render();
}

function playSound(soundId) {
  const sound = getSoundById(soundId);
  if (!sound) return;
  if (sound.kind === "long") state.data.sounds.filter((item) => item.kind === "long" && item.id !== soundId).forEach((item) => stopSound(item.id, false));
  let audio = audioPool.get(soundId);
  if (!audio) {
    audio = new Audio(sound.file);
    audio.preload = "auto";
    audio.addEventListener("ended", () => { state.playingSounds.delete(soundId); render(); });
    audio.addEventListener("error", () => { state.playingSounds.delete(soundId); logAction("Звук", `Файл \"${sound.file}\" не найден. Добавьте mp3 в папку assets/audio`); });
    audioPool.set(soundId, audio);
  }
  audio.currentTime = 0;
  audio.play().then(() => {
    state.playingSounds.add(soundId);
    logAction("Звук", `Запущен звук: ${sound.name}`);
  }).catch(() => logAction("Звук", `Не удалось воспроизвести \"${sound.name}\". Проверьте наличие mp3`));
}

function triggerSharpWind() { toggleFan(); logAction("Эффект", "Эффект: резкий ветер"); }
function triggerMysticScene() { setChandelier("mystic", "мистический синий"); logAction("Эффект", "Эффект: мистическая сцена"); }
function triggerFinalScene() { emergencyLight(); openCurtains(); logAction("Эффект", "Эффект: финал"); }
function triggerScaryMoment() { executeEffect("sharp_wind"); playSound("stinger_hit"); logAction("Эффект страшный момент", "Запущены резкий ветер и короткий scary hit"); }
function triggerFinal() { state.currentSceneIndex = state.data.scenes.length - 1; executeEffect("final_mode"); playSound("final_music"); logAction("Финал", `Запущен финал: \"${getCurrentScene().name}\"`); }

function executeEffect(effectId) {
  const effect = getEffectById(effectId);
  if (!effect) return;
  const handlers = {
    closeCurtains,
    openCurtains,
    setChandelierOff: () => setChandelier("off", "выключена"),
    setChandelierOn: () => setChandelier("on", "включена"),
    setChandelierBlue: () => setChandelier("blue", "синий режим"),
    setChandelierRed: () => setChandelier("red", "красный режим"),
    setChandelierGreen: () => setChandelier("green", "зелёный режим"),
    setChandelierBlink: () => setChandelier("blink", "режим мигания"),
    toggleDeskLamp1: () => toggleDeskLamp("deskLamp1", "Настольная лампа 1"),
    toggleDeskLamp2: () => toggleDeskLamp("deskLamp2", "Настольная лампа 2"),
    toggleFan,
    triggerSharpWind,
    triggerMysticScene,
    triggerFinalScene
  };
  if (handlers[effect.handler]) handlers[effect.handler]();
}

function applySceneRecommendations(scene, announce) {
  if (!scene) return;
  if (state.mode === "script") {
    if (scene.recommendedEffects[0]) executeEffect(scene.recommendedEffects[0]);
    if (scene.recommendedSounds[0]) playSound(scene.recommendedSounds[0]);
  }
  if (announce) logAction("Сценарный режим", `Сцена \"${scene.name}\": подготовлены рекомендации по звукам и эффектам`);
  else render();
}

function showHintToOperator(text, sourceLabel = "Подсказка") { logAction("Подсказка оператору", `${sourceLabel}: ${text}`); }
function sendHintToSpeaker(text, sourceLabel = "Подсказка") { logAction("Подсказка в колонку", `${sourceLabel}: ${text}`); }
function updateCustomHint(value) { state.customHintText = value; }
function submitCustomHint() {
  const value = state.customHintText.trim();
  if (!value) return logAction("Подсказка", "Введите текст перед отправкой");
  sendHintToSpeaker(value, "Ручная подсказка");
  state.customHintText = "";
  render();
}
function updateCocktail(id, delta) {
  state.cocktails[id] = Math.max(0, (state.cocktails[id] || 0) + delta);
  logAction("Коктейли", `${state.data.cocktails.find((item) => item.id === id).name}: ${state.cocktails[id]}`);
}
function clearCocktails() { Object.keys(state.cocktails).forEach((key) => { state.cocktails[key] = 0; }); logAction("Коктейли", "Выбор коктейлей очищен"); }

function actionButton(label, action, color) { return `<button class="action-btn ${colorClassMap[color]}" data-action="${action}">${label}</button>`; }
function detailBlock(label, value) { return `<div class="detail-item"><span class="detail-label">${label}</span><div class="script-text">${value}</div></div>`; }
function tagClass(color) { return `tag-${color || "blue"}`; }
function render() {
  if (!state.data) {
    root.innerHTML = `<div class="panel"><h1 class="brand-title">Загрузка пульта...</h1></div>`;
    return;
  }
  const currentScene = getCurrentScene();
  root.innerHTML = `
    <header class="topbar">
      <div class="topbar-grid">
        <div>
          <p class="muted">Операторский центр живого квеста</p>
          <h1 class="brand-title">Quest Control Console</h1>
          <p class="brand-subtitle">Текущая сцена: ${currentScene.number}. ${currentScene.name}</p>
        </div>
        <div class="status-strip">
          <div class="status-card"><span class="meta-label">Режим</span><strong>${state.mode === "manual" ? "Ручной" : "Сценарный"}</strong></div>
          <div class="status-card"><span class="meta-label">Шторы</span><strong>${state.deviceState.curtains}</strong></div>
          <div class="status-card"><span class="meta-label">Люстра</span><strong>${state.deviceState.chandelier}</strong></div>
        </div>
        <div class="mode-switch">
          <button class="mode-btn ${state.mode === "manual" ? "active" : ""}" data-mode="manual">Ручной</button>
          <button class="mode-btn ${state.mode === "script" ? "active" : ""}" data-mode="script">Сценарный</button>
        </div>
      </div>
    </header>
    <nav class="tabbar">${TABS.map((tab) => `<button class="tab-btn ${state.activeTab === tab.id ? "active" : ""}" data-tab="${tab.id}">${tab.label}</button>`).join("")}</nav>
    <div class="layout"><main class="bottom-grid">${renderScreen(currentScene)}</main><aside>${renderLogPanel()}</aside></div>`;
  bindEvents();
}

function renderScreen(scene) {
  if (state.activeTab === "console") return renderConsole(scene);
  if (state.activeTab === "scenes") return renderScenes();
  if (state.activeTab === "soundboard") return renderSoundboard();
  if (state.activeTab === "effects") return renderEffects();
  if (state.activeTab === "hints") return renderHints();
  if (state.activeTab === "script") return renderScript();
  return renderCocktails();
}

function renderConsole(scene) {
  const sceneHints = getHintsForScene(scene.id);
  const recommendedSounds = scene.recommendedSounds.map(getSoundById).filter(Boolean);
  const recommendedEffects = scene.recommendedEffects.map(getEffectById).filter(Boolean);
  return `
    <section class="panel">
      <h2 class="section-title">Главный пульт</h2>
      <p class="section-subtitle">Крупные кнопки для одного экрана, быстрого старта и ручного контроля.</p>
      <div class="control-grid">
        ${actionButton("Старт квеста", "startQuest", "green")}
        ${actionButton("Следующая сцена", "nextScene", "blue")}
        ${actionButton("Предыдущая сцена", "previousScene", "blue")}
        ${actionButton("Пауза", "pauseQuest", "yellow")}
        ${actionButton("Финал", "triggerFinal", "green")}
        ${actionButton("Экстренный свет", "emergencyLight", "red")}
        ${actionButton("Экстренная остановка звука", "stopAllSounds", "red")}
        ${actionButton("Подсказка", "triggerHint", "yellow")}
        ${actionButton("Эффект страшный момент", "triggerScaryMoment", "violet")}
        ${actionButton("Актёр выходит", "actorEnter", "teal")}
        ${actionButton("Актёр уходит", "actorLeave", "teal")}
      </div>
    </section>
    <section class="scene-grid">
      <div class="panel scene-now">
        <div><span class="scene-badge">Сцена ${scene.number} из ${state.data.scenes.length}</span><h2 class="brand-title">${scene.name}</h2><p class="section-subtitle">${scene.summary}</p></div>
        <div class="detail-list">
          ${detailBlock("Что делают дети", scene.goal)}
          ${detailBlock("Подсказка оператору", scene.operatorText)}
          ${detailBlock("Что делает актёр", scene.actorNote)}
          ${detailBlock("Активные устройства", scene.activeDevices.join(", "))}
        </div>
      </div>
      <div class="panel">
        <h3 class="card-title">Быстрые рекомендации сцены</h3>
        <div class="mini-list">
          <div class="mini-row"><span class="detail-label">Рекомендуемые звуки</span><div class="card-chip-row">${recommendedSounds.map((sound) => `<button class="chip-btn ${state.playingSounds.has(sound.id) ? "is-playing" : ""}" data-sound-play="${sound.id}">${sound.name}</button>`).join("") || `<span class="muted">Нет рекомендаций</span>`}</div></div>
          <div class="mini-row"><span class="detail-label">Рекомендуемые эффекты</span><div class="card-chip-row">${recommendedEffects.map((effect) => `<button class="chip-btn" data-effect="${effect.id}">${effect.name}</button>`).join("") || `<span class="muted">Нет рекомендаций</span>`}</div></div>
          <div class="mini-row"><span class="detail-label">Подсказки по сцене</span><div class="card-chip-row">${sceneHints.map((hint) => `<button class="chip-btn" data-show-hint="${hint.id}">${hint.level}</button>`).join("") || `<span class="muted">Нет подсказок</span>`}</div></div>
          <div class="mini-row"><span class="detail-label">Контроль прогресса</span><div class="card-chip-row">${scene.progressChecks.map((item) => `<button class="chip-btn" data-progress-note="${scene.id}:${item}">${item}</button>`).join("")}</div></div>
        </div>
      </div>
    </section>
    <section class="panel">
      <h3 class="card-title">Компактный блок света и эффектов</h3>
      <div class="quick-effects">${["curtains_close", "curtains_open", "chandelier_blue", "chandelier_red", "fan_toggle", "final_mode"].map((id) => `<button class="mini-btn" data-effect="${id}">${getEffectById(id).name}</button>`).join("")}</div>
      <p class="footer-note">Ключевые действия экрана света доступны прямо здесь, без лишнего перехода.</p>
    </section>
    <section class="panel emergency-panel">
      <h3 class="card-title">Аварийный блок</h3>
      <p class="section-subtitle">Всегда под рукой для мгновенного безопасного сброса.</p>
      <div class="emergency-grid">
        ${actionButton("Включить весь свет", "emergencyLight", "red")}
        ${actionButton("Остановить все звуки", "stopAllSounds", "red")}
        ${actionButton("Открыть шторы", "openCurtains", "red")}
        ${actionButton("Сбросить эффекты", "resetEffects", "red")}
      </div>
    </section>`;
}

function renderScenes() {
  return `<section class="panel"><h2 class="section-title">Сцены</h2><p class="section-subtitle">Быстрый прыжок в любую сцену и подробности по каждому блоку.</p><div class="scene-grid">${state.data.scenes.map((scene) => {
    const expanded = state.expandedScenes.has(scene.id);
    const completed = state.completedScenes.has(scene.id);
    return `<article class="scene-card"><div class="sound-header"><div><span class="tag tag-blue">Сцена ${scene.number}</span><h3 class="card-title">${scene.name}</h3><div class="muted">${scene.goal}</div></div><div class="tag ${completed ? "tag-green" : "tag-yellow"}">${completed ? "Готово" : "В процессе"}</div></div><div>${scene.summary}</div><div class="scene-actions"><button class="mini-btn" data-jump-scene="${scene.id}">Запустить сцену</button><button class="mini-btn" data-toggle-scene="${scene.id}">${expanded ? "Свернуть детали" : "Развернуть детали"}</button><button class="mini-btn" data-mark-scene="${scene.id}">${completed ? "Снять отметку" : "Отметить прогресс"}</button></div>${expanded ? `<div class="detail-list">${detailBlock("Действия оператора", scene.operatorActions.join(", "))}${detailBlock("Автоматизации", scene.automations.join(", "))}${detailBlock("Звуки", scene.recommendedSounds.map((id) => getSoundById(id)?.name || id).join(", "))}${detailBlock("Подсказки", getHintsForScene(scene.id).map((hint) => `${hint.level}: ${hint.text}`).join("\n"))}${detailBlock("Заметка для актёра", scene.actorNote)}</div>` : ""}</article>`;
  }).join("")}</div></section>`;
}

function renderSoundboard() {
  const groups = Object.entries(SOUND_CATEGORY_LABELS).map(([key, label]) => ({ key, label, items: state.data.sounds.filter((sound) => sound.category === key) }));
  return `<section class="panel"><h2 class="section-title">Саундборд</h2><p class="section-subtitle">Play/stop-кнопки с контролем длинных дорожек и видимым статусом.</p><div class="sound-grid">${groups.map((group) => `<article class="sound-card"><div class="sound-header"><h3 class="card-title">${group.label}</h3><span class="tag ${tagClass(group.items[0]?.color)}">${group.items.length} звуков</span></div>${group.items.length ? group.items.map((sound) => `<div class="mini-row"><span class="detail-label">${sound.name}</span><div class="muted">${sound.description}</div><div class="sound-actions"><button class="sound-btn ${colorClassMap[sound.color]}" data-sound-play="${sound.id}">Play</button><button class="stop-btn" data-sound-stop="${sound.id}">Stop</button><span class="tag ${state.playingSounds.has(sound.id) ? "tag-green" : "tag-yellow"}">${state.playingSounds.has(sound.id) ? "Играет" : "Готов"}</span></div></div>`).join("") : `<div class="empty-state">Категория пока пуста</div>`}</article>`).join("")}</div></section>`;
}

function renderEffects() {
  return `<section class="panel"><h2 class="section-title">Свет и эффекты</h2><p class="section-subtitle">Готовые action-handler’ы под будущие интеграции с контроллерами.</p><div class="effects-grid">${state.data.effects.map((effect) => `<article class="effect-card"><div class="sound-header"><h3 class="card-title">${effect.name}</h3><span class="tag ${tagClass(effect.color)}">${effect.type}</span></div><div class="muted">Handler: <code>${effect.handler}</code></div><button class="sound-btn ${colorClassMap[effect.color]}" data-effect="${effect.id}">Запустить</button></article>`).join("")}</div></section>`;
}
function renderHints() {
  const currentScene = getCurrentScene();
  const sceneHints = getHintsForScene(currentScene.id);
  const hintItem = (hint, source) => `<div class="mini-row"><span class="detail-label">${hint.level}</span><div>${hint.text}</div><div class="hint-actions"><button class="mini-btn" data-hint-speaker="${source}|${hint.id}">Отправить в колонку</button><button class="mini-btn" data-hint-show="${source}|${hint.id}">Показать оператору</button></div></div>`;
  return `<section class="panel"><h2 class="section-title">Подсказки</h2><p class="section-subtitle">Универсальные и сценические подсказки, плюс ручной ввод текста.</p><div class="hint-grid"><article class="hint-card"><h3 class="card-title">Универсальные подсказки</h3>${state.data.hints.universal.map((hint) => hintItem(hint, "Универсальная")).join("")}</article><article class="hint-card"><h3 class="card-title">Подсказки сцены: ${currentScene.name}</h3>${sceneHints.length ? sceneHints.map((hint) => hintItem(hint, currentScene.name)).join("") : `<div class="empty-state">Для этой сцены пока нет подсказок.</div>`}</article></div><div class="panel" style="margin-top:14px;"><h3 class="card-title">Ручная подсказка</h3><textarea class="textarea" id="customHintInput" placeholder="Введите текст для колонки или заметку оператору...">${state.customHintText}</textarea><div class="hint-actions" style="margin-top:12px;"><button class="sound-btn action-yellow" data-custom-hint="send">Отправить в колонку</button><button class="mini-btn" data-custom-hint="show">Показать оператору</button></div></div></section>`;
}

function renderScript() {
  return `<section class="panel"><h2 class="section-title">Сценарий</h2><p class="section-subtitle">Шпаргалка под iPad: крупный шрифт и короткие блоки.</p><div class="script-grid">${state.data.scenario.map((block) => `<article class="script-card"><h3 class="card-title">${block.title}</h3><div class="script-text">${block.text}</div></article>`).join("")}</div></section>`;
}

function renderCocktails() {
  const totalCount = Object.values(state.cocktails).reduce((sum, value) => sum + value, 0);
  return `<section class="panel"><h2 class="section-title">Коктейли</h2><p class="section-subtitle">Финальный быстрый учёт заказов после квеста.</p><div class="cocktail-grid">${state.data.cocktails.map((item) => `<article class="cocktail-card"><div class="sound-header"><div><h3 class="card-title">${item.name}</h3><div class="muted">${item.description}</div></div><span class="color-dot" style="background:${item.color}"></span></div><div class="counter-row"><button class="counter-btn" data-cocktail="${item.id}:-1">-1</button><div class="counter-box">${state.cocktails[item.id] || 0}</div><button class="counter-btn" data-cocktail="${item.id}:1">+1</button></div></article>`).join("")}</div><div class="panel" style="margin-top:14px;"><h3 class="card-title">Итоги</h3><div class="totals-row">${state.data.cocktails.map((item) => `<div class="mini-row"><strong>${item.name}</strong>: ${state.cocktails[item.id] || 0}</div>`).join("")}<div class="mini-row"><strong>Общее количество заказов</strong>: ${totalCount}</div></div><div class="card-actions" style="margin-top:12px;"><button class="sound-btn action-red" data-clear-cocktails="true">Очистить выбор</button></div></div></section>`;
}

function renderLogPanel() {
  return `<div class="log-card"><h2 class="section-title">Журнал действий</h2><p class="section-subtitle">Что было нажато и какой статус вернула система.</p><div class="log-list">${state.logs.map((item) => `<div class="log-item"><div class="log-time">${item.time} - ${item.label}</div><div>${item.status}</div></div>`).join("")}</div></div>`;
}

function bindEvents() {
  root.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
  root.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => setTab(button.dataset.tab)));
  const actionMap = { startQuest, nextScene, previousScene, pauseQuest, triggerFinal, emergencyLight, stopAllSounds, triggerHint, triggerScaryMoment, actorEnter, actorLeave, openCurtains, resetEffects };
  root.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => actionMap[button.dataset.action]?.()));
  root.querySelectorAll("[data-effect]").forEach((button) => button.addEventListener("click", () => executeEffect(button.dataset.effect)));
  root.querySelectorAll("[data-sound-play]").forEach((button) => button.addEventListener("click", () => playSound(button.dataset.soundPlay)));
  root.querySelectorAll("[data-sound-stop]").forEach((button) => button.addEventListener("click", () => stopSound(button.dataset.soundStop)));
  root.querySelectorAll("[data-jump-scene]").forEach((button) => button.addEventListener("click", () => jumpToScene(button.dataset.jumpScene)));
  root.querySelectorAll("[data-toggle-scene]").forEach((button) => button.addEventListener("click", () => toggleSceneDetails(button.dataset.toggleScene)));
  root.querySelectorAll("[data-mark-scene]").forEach((button) => button.addEventListener("click", () => markSceneComplete(button.dataset.markScene)));
  root.querySelectorAll("[data-show-hint]").forEach((button) => button.addEventListener("click", () => {
    const hint = Object.values(state.data.hints.sceneHints).flat().find((item) => item.id === button.dataset.showHint);
    if (hint) showHintToOperator(hint.text, hint.level);
  }));
  root.querySelectorAll("[data-hint-show], [data-hint-speaker]").forEach((button) => button.addEventListener("click", () => {
    const sourceAndId = button.dataset.hintShow || button.dataset.hintSpeaker;
    const [source, hintId] = sourceAndId.split("|");
    const hint = state.data.hints.universal.find((item) => item.id === hintId) || Object.values(state.data.hints.sceneHints).flat().find((item) => item.id === hintId);
    if (!hint) return;
    if (button.dataset.hintSpeaker) sendHintToSpeaker(hint.text, `${source} · ${hint.level}`);
    else showHintToOperator(hint.text, `${source} · ${hint.level}`);
  }));
  root.querySelectorAll("[data-progress-note]").forEach((button) => button.addEventListener("click", () => {
    const [, note] = button.dataset.progressNote.split(":");
    logAction("Прогресс", note);
  }));
  root.querySelectorAll("[data-cocktail]").forEach((button) => button.addEventListener("click", () => {
    const [id, delta] = button.dataset.cocktail.split(":");
    updateCocktail(id, Number(delta));
  }));
  root.querySelectorAll("[data-clear-cocktails]").forEach((button) => button.addEventListener("click", () => clearCocktails()));
  const customHintInput = root.querySelector("#customHintInput");
  if (customHintInput) customHintInput.addEventListener("input", (event) => updateCustomHint(event.target.value));
  root.querySelectorAll("[data-custom-hint]").forEach((button) => button.addEventListener("click", () => {
    if (button.dataset.customHint === "send") submitCustomHint();
    else {
      const value = state.customHintText.trim();
      if (!value) return logAction("Подсказка", "Введите текст перед показом оператору");
      showHintToOperator(value, "Ручная подсказка");
    }
  }));
}

