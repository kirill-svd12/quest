const appData = {
  scenes: [
    {
      id: "scene_1",
      number: 1,
      color: "red",
      title: "Сбой системы",
      duration: "0-5 мин",
      durationMin: 5,
      story: "Дети заходят, дверь закрывается, начинается аварийный запуск комнаты.",
      playerGoal: "Найти первую записку и конверт на кровати или диване.",
      operatorFocus: "Собрать стартовый техпакет: тревога, закрытые шторы, синий рабочий свет и стартовый голос.",
      operatorSteps: [
        "Запустить alarm.",
        "Закрыть шторы.",
        "Перевести свет в синий рабочий режим.",
        "Включить голос: 'Система активирована... Выход заблокирован...'.",
        "Подтвердить, что дети нашли записку и пошли к кровати или дивану."
      ],
      audio: [
        { color: "red", label: "alarm", note: "Стартовый тревожный удар" },
        { color: "green", label: "ambient_low", note: "Дальше держать тихим фоном" }
      ],
      nextPrep: "Подготовь карточки с предметами для сцены 2 и зеленый success-звук.",
      result: "Дети нашли конверт и перешли к карточкам."
    },
    {
      id: "scene_2",
      number: 2,
      color: "blue",
      title: "Лишний предмет",
      duration: "5-12 мин",
      durationMin: 7,
      story: "Дети получают карточки с предметами и должны найти лишний.",
      playerGoal: "Назвать лишний предмет: лампа.",
      operatorFocus: "Следить за темпом, после правильного ответа дать success и перевести внимание на лампы в комнате.",
      operatorSteps: [
        "Выдать конверт с карточками или убедиться, что он уже у детей.",
        "Дождаться ответа 'лампа'.",
        "Включить success после правильного ответа.",
        "Подвести детей к мысли, что теперь нужно проверить лампы в комнате."
      ],
      audio: [
        { color: "green", label: "success", note: "После правильного ответа" }
      ],
      nextPrep: "Проверь обе лампы. В следующей сцене одна из них должна сработать как правильная.",
      result: "Дети поняли, что свет — ключ."
    },
    {
      id: "scene_3",
      number: 3,
      color: "green",
      title: "Правильная лампа",
      duration: "12-18 мин",
      durationMin: 6,
      story: "В комнате две лампы, дети должны выбрать правильную.",
      playerGoal: "Включить правильную лампу и получить записку про воду.",
      operatorFocus: "Точно вовремя включить нужную лампу и сразу подкинуть следующую записку.",
      operatorSteps: [
        "Дождаться, пока дети начнут проверять лампы.",
        "Включить правильную лампу в нужный момент.",
        "Выдать или открыть записку: 'Ищи там, где есть вода. Но не спеши.'.",
        "Перевести детей в сторону туалета."
      ],
      audio: [],
      nextPrep: "Подготовь кусочки слова ВЕТЕР в туалете. Glitch пока не нужен.",
      result: "Дети уходят в зону туалета."
    },
    {
      id: "scene_4",
      number: 4,
      color: "cyan",
      title: "Туалет",
      duration: "18-28 мин",
      durationMin: 10,
      story: "Дети находят кусочки бумаги и собирают слово ВЕТЕР.",
      playerGoal: "Собрать слово ВЕТЕР и понять, что система слушает команды.",
      operatorFocus: "Не мешать поиску, при необходимости очень редко дать glitch или мягкую словесную подсказку.",
      operatorSteps: [
        "Проследить, что все кусочки бумаги доступны.",
        "При сильной задержке можно дать редкий glitch.",
        "При необходимости дать словесную подсказку про команду системе.",
        "После слова ВЕТЕР перевести к произнесению команды."
      ],
      audio: [
        { color: "blue", label: "glitch", note: "Редко, только если нужна встряска" },
        { color: "brown", label: "подсказка", note: "Только при сильной паузе" }
      ],
      nextPrep: "Проверь вентилятор и приготовь wind. Следующая сцена короткая и реактивная.",
      result: "Дети готовы сказать команду 'ВЕТЕР ВКЛЮЧИСЬ'."
    },
    {
      id: "scene_5",
      number: 5,
      color: "teal",
      title: "Команда",
      duration: "28-32 мин",
      durationMin: 4,
      story: "Дети вслух дают команду системе, комната отвечает ветром.",
      playerGoal: "Сказать 'ВЕТЕР ВКЛЮЧИСЬ' и увидеть реакцию комнаты.",
      operatorFocus: "Точный синхрон вентилятора и звука ветра, затем вывод на выбор коктейлей.",
      operatorSteps: [
        "Дождаться команды детей 'ВЕТЕР ВКЛЮЧИСЬ'.",
        "Включить вентилятор.",
        "Запустить wind.",
        "Показать или выдать записку: 'Система готова принять ваш выбор'."
      ],
      audio: [
        { color: "blue", label: "wind", note: "Сразу вместе с вентилятором" }
      ],
      nextPrep: "Подготовь блок выбора коктейлей, голосовой пакет cocktail_intro и cocktail_done.",
      result: "Дети готовы к голосованию за коктейли."
    },
    {
      id: "scene_6",
      number: 6,
      color: "orange",
      title: "Выбор коктейлей",
      duration: "32-38 мин",
      durationMin: 6,
      story: "Система предлагает награду заранее, дети голосуют руками.",
      playerGoal: "Выбрать коктейли и получить бумажку с итогом выбора.",
      operatorFocus: "Спокойно провести голосование, посчитать выбор, затем дать glitch и заход актёра с бумажкой.",
      operatorSteps: [
        "Включить cocktail_intro.",
        "Озвучить варианты: mojito / bubble / melon.",
        "Считать поднятые руки и отметить результаты в блоке коктейлей.",
        "Включить cocktail_done.",
        "Дать glitch.",
        "Приглушить свет перед входом актёра.",
        "Дождаться actor_enter и передачи бумажки с результатом."
      ],
      audio: [
        { color: "orange", label: "cocktail_intro", note: "Старт голосования" },
        { color: "orange", label: "cocktail_done", note: "После подсчета" },
        { color: "blue", label: "glitch", note: "Перед входом актёра" },
        { color: "pink", label: "actor_enter", note: "Заход актёра с бумажкой" }
      ],
      nextPrep: "Подготовь люстру к миганию по коду красный-синий-красный-зеленый и whoosh.",
      result: "У детей есть бумажка с итогом выбора коктейля."
    },
    {
      id: "scene_7",
      number: 7,
      color: "red",
      title: "Свет как код",
      duration: "38-48 мин",
      durationMin: 10,
      story: "Дети смотрят на люстру и считывают цветовой код.",
      playerGoal: "Понять, что цвета означают числа, и получить код 1213.",
      operatorFocus: "Четко показать мигание люстры и не сбить порядок цветов.",
      operatorSteps: [
        "Запустить мигание люстры в порядке: красный, синий, красный, зеленый.",
        "Включить whoosh как акцент на запуск кода.",
        "Дать детям время на расшифровку 1213.",
        "Подтвердить, что код записан или запомнен."
      ],
      audio: [
        { color: "blue", label: "whoosh", note: "На запуск светового кода" }
      ],
      nextPrep: "Подготовь коробку и вход актёра в следующей сцене. Нужен короткий glitch-переход.",
      result: "Дети знают код 1213."
    },
    {
      id: "scene_8",
      number: 8,
      color: "slate",
      title: "Финальный модуль",
      duration: "48-52 мин",
      durationMin: 4,
      story: "Свет мигает, glitch, актёр заносит коробку и запускается финальный модуль.",
      playerGoal: "Получить коробку для следующего этапа.",
      operatorFocus: "Собрать короткий техпереход: glitch, вход актёра, коробка, голос про финальный модуль.",
      operatorSteps: [
        "Дать короткий glitch-переход.",
        "Запустить actor_enter.",
        "Проконтролировать появление коробки в комнате.",
        "Включить голос: 'Финальный модуль доставлен.'."
      ],
      audio: [
        { color: "pink", label: "actor_enter", note: "На вход актёра с коробкой" }
      ],
      nextPrep: "Проверь, что коробка готова к открытию по коду 1213.",
      result: "Коробка лежит в комнате, дети готовы открывать её кодом."
    },
    {
      id: "scene_9",
      number: 9,
      color: "indigo",
      title: "Коробка",
      duration: "52-57 мин",
      durationMin: 5,
      story: "Дети вводят код 1213, открывают коробку и получают последнее словесное задание.",
      playerGoal: "Открыть коробку и дойти до слова 'СВОБОДА'.",
      operatorFocus: "Не мешать вводу кода, после открытия сразу перевести детей к финальному слову.",
      operatorSteps: [
        "Дождаться ввода 1213.",
        "Подтвердить открытие коробки.",
        "Показать записку: 'Скажи слово, которое даёт свободу'.",
        "Подвести детей к финальному слову."
      ],
      audio: [],
      nextPrep: "Подготовь final_success, открытие штор и финальную музыку. Это уже последний рывок.",
      result: "Дети готовы произнести слово 'СВОБОДА'."
    },
    {
      id: "scene_10",
      number: 10,
      color: "purple",
      title: "Финал",
      duration: "57-60 мин",
      durationMin: 3,
      story: "Дети говорят слово 'СВОБОДА', система восстанавливается и выпускает их.",
      playerGoal: "Завершить квест на слове 'СВОБОДА'.",
      operatorFocus: "Мгновенно собрать финальный пакет: свет, открытие штор, финальный голос и музыка.",
      operatorSteps: [
        "Дождаться слова 'СВОБОДА'.",
        "Включить final_success.",
        "Открыть шторы.",
        "Включить финальную музыку.",
        "Запустить голос: 'Система восстановлена. Вы свободны.'."
      ],
      audio: [
        { color: "yellow", label: "final_success", note: "Главный финальный сигнал" },
        { color: "yellow", label: "музыка", note: "Сразу после открытия штор" }
      ],
      nextPrep: "Квест завершён. Переводи детей к награде и организационному финалу.",
      result: "Квест завершён, дети свободны."
    }
  ],
  cocktails: [
    { id: "mojito", name: "Мохито", color: "#79e5a4" },
    { id: "bubble", name: "Бабл гам", color: "#ff8ecb" },
    { id: "melon", name: "Дыня", color: "#ffd86d" }
  ]
};

const state = {
  activeTab: "console",
  currentSceneIndex: 0,
  logs: [],
  tick: Date.now(),
  sceneStartedAt: Date.now(),
  questStarted: false,
  cocktails: { mojito: 0, bubble: 0, melon: 0 }
};

const root = document.getElementById("app");
const tabs = [
  { id: "console", label: "Пульт" },
  { id: "scenes", label: "Сцены" },
  { id: "cocktails", label: "Коктейли" }
];
const cueClass = { red: "cue-red", blue: "cue-blue", green: "cue-green", yellow: "cue-yellow", orange: "cue-orange", pink: "cue-pink", teal: "cue-teal", brown: "cue-brown", cyan: "cue-cyan", slate: "cue-slate", indigo: "cue-indigo", purple: "cue-purple" };

setInterval(() => {
  state.tick = Date.now();
  render();
}, 1000);

init();

function init() {
  logAction("Пульт готов", "Новый сценарий загружен");
}

function nowTime() {
  return new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(new Date());
}

function logAction(label, text) {
  state.logs.unshift({ id: `${Date.now()}-${Math.random()}`, time: nowTime(), label, text });
  state.logs = state.logs.slice(0, 60);
  render();
}

function currentScene() { return appData.scenes[state.currentSceneIndex]; }
function nextSceneData() { return appData.scenes[state.currentSceneIndex + 1] || null; }
function elapsedSeconds() { return Math.max(0, Math.floor((state.tick - state.sceneStartedAt) / 1000)); }
function totalSeconds(scene) { return scene.durationMin * 60; }
function sceneProgress(scene) { return Math.min(100, Math.round((elapsedSeconds() / totalSeconds(scene)) * 100)); }
function questProgress() { return Math.round(((state.currentSceneIndex + 1) / appData.scenes.length) * 100); }
function fmt(seconds) { const m = String(Math.floor(seconds / 60)).padStart(2, "0"); const s = String(seconds % 60).padStart(2, "0"); return `${m}:${s}`; }
function setTab(id) { state.activeTab = id; render(); }
function startQuest() { state.questStarted = true; state.currentSceneIndex = 0; state.sceneStartedAt = Date.now(); logAction("Старт квеста", `Открыта сцена: ${currentScene().title}`); }
function prevScene() { if (state.currentSceneIndex === 0) return; state.currentSceneIndex -= 1; state.sceneStartedAt = Date.now(); logAction("Предыдущая сцена", currentScene().title); }
function nextScene() { if (state.currentSceneIndex >= appData.scenes.length - 1) return; state.currentSceneIndex += 1; state.sceneStartedAt = Date.now(); logAction("Следующая сцена", currentScene().title); }
function pauseQuest() { logAction("Пауза", "Пауза для оператора: проверь темп игры и технику"); }
function resetTimer() { state.sceneStartedAt = Date.now(); logAction("Таймер сцены", `Таймер сброшен для сцены: ${currentScene().title}`); }
function jumpScene(index) { state.currentSceneIndex = index; state.sceneStartedAt = Date.now(); state.activeTab = "console"; logAction("Прыжок к сцене", currentScene().title); }
function setCocktail(id, delta) { state.cocktails[id] = Math.max(0, state.cocktails[id] + delta); logAction("Коктейли", `${id}: ${state.cocktails[id]}`); }
function clearCocktails() { Object.keys(state.cocktails).forEach((id) => { state.cocktails[id] = 0; }); logAction("Коктейли", "Выбор очищен"); }
function progressBar(value) { return `<div class="progress"><div class="progress-fill" style="width:${value}%"></div></div>`; }
function render() {
  const scene = currentScene();
  root.innerHTML = `<header class="topbar"><div><p class="eyebrow">Операторский пульт квеста</p><h1>Quest Console</h1><p class="subline">Сцена ${scene.number} из ${appData.scenes.length}: ${scene.title}</p></div><div class="topbar-actions"><button class="top-btn ${state.activeTab === "console" ? "active" : ""}" data-tab="console">Пульт</button><button class="top-btn ${state.activeTab === "scenes" ? "active" : ""}" data-tab="scenes">Сцены</button><button class="top-btn ${state.activeTab === "cocktails" ? "active" : ""}" data-tab="cocktails">Коктейли</button></div></header><main>${renderView()}</main>`;
  bind();
}

function renderView() {
  if (state.activeTab === "scenes") return renderScenes();
  if (state.activeTab === "cocktails") return renderCocktails();
  return renderConsole();
}

function renderConsole() {
  const scene = currentScene();
  const next = nextSceneData();
  const scenePct = sceneProgress(scene);
  const questPct = questProgress();
  return `<section class="console-layout"><div class="panel command-panel"><div class="panel-head"><h2>Управление</h2><span class="status-chip ${state.questStarted ? "live" : "ready"}">${state.questStarted ? "Игра идёт" : "Готов к старту"}</span></div><div class="command-grid"><button class="action primary" data-action="start">Старт</button><button class="action" data-action="prev">Назад</button><button class="action" data-action="next">Дальше</button><button class="action warn" data-action="pause">Пауза</button><button class="action" data-action="resetTimer">Сброс таймера</button></div><div class="meter-block"><div class="meter-row"><span>Прогресс сцены</span><strong>${scenePct}%</strong></div>${progressBar(scenePct)}<div class="timer-line">${fmt(elapsedSeconds())} / ${fmt(totalSeconds(scene))}</div></div><div class="meter-block"><div class="meter-row"><span>Прогресс квеста</span><strong>${questPct}%</strong></div>${progressBar(questPct)}</div></div><div class="panel current-scene-panel"><div class="panel-head"><h2>${scene.title}</h2><span class="scene-mark ${cueClass[scene.color] || "cue-blue"}">${scene.duration}</span></div><div class="scene-summary">${scene.story}</div><div class="two-col"><div class="mini-card"><span class="mini-label">Что делают дети</span><p>${scene.playerGoal}</p></div><div class="mini-card"><span class="mini-label">Фокус оператора</span><p>${scene.operatorFocus}</p></div></div><div class="operator-list"><span class="mini-label">Что делать оператору</span>${scene.operatorSteps.map((step, index) => `<div class="operator-row"><span>${index + 1}</span><div>${step}</div></div>`).join("")}</div></div><div class="panel prep-panel"><div class="panel-head"><h2>Подготовить заранее</h2><span class="mini-soft">Следующий шаг без сюрпризов</span></div><div class="prep-card"><span class="mini-label">Следующая сцена</span><p>${next ? `${next.number}. ${next.title}` : "Финал уже открыт"}</p></div><div class="prep-card"><span class="mini-label">Что подготовить</span><p>${scene.nextPrep}</p></div><div class="prep-card"><span class="mini-label">Ожидаемый результат</span><p>${scene.result}</p></div></div><div class="panel audio-panel"><div class="panel-head"><h2>Что включать оператору</h2><span class="mini-soft">Без встроенного плеера</span></div><div class="cue-list">${scene.audio.length ? scene.audio.map((cue) => `<div class="cue-row ${cueClass[cue.color] || "cue-blue"}"><strong>${cue.label}</strong><span>${cue.note}</span></div>`).join("") : `<div class="empty-note">На этой сцене отдельный звук не обязателен.</div>`}</div></div><div class="panel timeline-panel"><div class="panel-head"><h2>Сцены</h2><span class="mini-soft">Быстрый переход</span></div><div class="timeline-list">${appData.scenes.map((item, index) => `<button class="timeline-item ${index === state.currentSceneIndex ? "active" : ""}" data-scene-index="${index}"><span class="timeline-no">${item.number}</span><span class="timeline-main"><strong>${item.title}</strong><small>${item.duration}</small></span></button>`).join("")}</div></div><div class="panel log-panel"><div class="panel-head"><h2>Журнал</h2><span class="mini-soft">Последние действия</span></div><div class="log-list">${state.logs.map((item) => `<div class="log-row"><strong>${item.time} · ${item.label}</strong><span>${item.text}</span></div>`).join("")}</div></div></section>`;
}

function renderScenes() {
  return `<section class="scenes-page"><div class="panel wide-panel"><div class="panel-head"><h2>Все сцены по новому сценарию</h2><span class="mini-soft">Компактно, но с полным операторским смыслом</span></div><div class="scene-table">${appData.scenes.map((scene, index) => `<article class="scene-line ${index === state.currentSceneIndex ? "active" : ""}"><div class="scene-line-top"><div><span class="scene-mark ${cueClass[scene.color] || "cue-blue"}">Сцена ${scene.number}</span><h3>${scene.title}</h3><p>${scene.story}</p></div><button class="mini-jump" data-scene-index="${index}">Открыть</button></div><div class="scene-line-grid"><div><span class="mini-label">Оператор</span><p>${scene.operatorFocus}</p></div><div><span class="mini-label">Звуки и команды</span><p>${scene.audio.map((cue) => cue.label).join(", ") || "Без отдельной команды"}</p></div><div><span class="mini-label">Подготовить дальше</span><p>${scene.nextPrep}</p></div></div></article>`).join("")}</div></div></section>`;
}

function renderCocktails() {
  const total = Object.values(state.cocktails).reduce((sum, value) => sum + value, 0);
  return `<section class="cocktail-page"><div class="panel wide-panel"><div class="panel-head"><h2>Голосование за коктейли</h2><span class="mini-soft">Для сцены 6</span></div><div class="cocktail-grid">${appData.cocktails.map((item) => `<article class="cocktail-card"><div class="cocktail-color" style="background:${item.color}"></div><h3>${item.name}</h3><div class="cocktail-count">${state.cocktails[item.id]}</div><div class="cocktail-actions"><button class="count-btn" data-cocktail="${item.id}:-1">-1</button><button class="count-btn" data-cocktail="${item.id}:1">+1</button></div></article>`).join("")}</div><div class="cocktail-summary"><div class="summary-line"><span>Мохито</span><strong>${state.cocktails.mojito}</strong></div><div class="summary-line"><span>Бабл гам</span><strong>${state.cocktails.bubble}</strong></div><div class="summary-line"><span>Дыня</span><strong>${state.cocktails.melon}</strong></div><div class="summary-line total"><span>Всего голосов</span><strong>${total}</strong></div></div><button class="clear-btn" data-action="clearCocktails">Очистить выбор</button></div></section>`;
}

function bind() {
  root.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => setTab(button.dataset.tab)));
  root.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "start") startQuest();
    if (action === "prev") prevScene();
    if (action === "next") nextScene();
    if (action === "pause") pauseQuest();
    if (action === "resetTimer") resetTimer();
    if (action === "clearCocktails") clearCocktails();
  }));
  root.querySelectorAll("[data-scene-index]").forEach((button) => button.addEventListener("click", () => jumpScene(Number(button.dataset.sceneIndex))));
  root.querySelectorAll("[data-cocktail]").forEach((button) => button.addEventListener("click", () => { const [id, delta] = button.dataset.cocktail.split(":"); setCocktail(id, Number(delta)); }));
}
