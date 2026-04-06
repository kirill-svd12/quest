const appData = {
  meta: {
    title: "Система 404 - выход заблокирован",
    subtitle: "Подробный операторский сценарий",
    facts: ["55-65 минут", "До 12 детей", "1 комната + туалет", "Оператор, техник, актер"]
  },
  preflight: [
    "Под подушкой на кровати лежит конверт N1.",
    "Внутри конверта N1 находятся карточки и стартовая записка.",
    "Лампа Кирилла исправна и оператор понимает, что включает именно ее.",
    "Под лампой Кирилла лежит записка про воду.",
    "За дверью туалетной комнаты разложены все пять букв слова ВЕТЕР.",
    "Вентилятор, люстра, шторы и глобус управляются без задержки.",
    "На глобусе закреплен ребус, ведущий к слову 'конверт'.",
    "У актера заранее подготовлены: бумажка с шифром и финальный конверт.",
    "Проверены все звуки: alarm_intro, system_boot, Minecraft, main_intro, scene1, ambient_dark, glitch, ambient_low, scene 2, scene 3, ambient_med, whoosh, wind, scene 4, cocktails_intro, bubblegum, mojito, melon, cocktail_done, club, scene 6, system_success, viski, final_success, music."
  ],
  actorReady: [
    "Бумажка с шифром: красная капелька = 1, синяя капелька = 2, зеленая капелька = 3.",
    "Финальный конверт с запиской: 'Скажи слово, которое дает свободу.'.",
    "Первый выход: молча зайти, отдать бумажку, уйти.",
    "Второй выход: молча положить финальный конверт, уйти."
  ],
  reset: [
    "Вернуть конверт N1 под подушку на кровати.",
    "Снова вложить в него стартовую записку и карточки.",
    "Вернуть записку под лампу Кирилла.",
    "Разложить буквы В, Е, Т, Е, Р за дверью туалета.",
    "Забрать у актера бумажку с шифром и финальный конверт.",
    "Проверить глобус, розетку, вентилятор, люстру, шторы и режимы света.",
    "Вернуть обычный свет и убедиться, что музыка club и viski выключена."
  ],
  scenes: [
    {
      id: "scene_1",
      number: 1,
      color: "red",
      title: "Старт и сбой системы",
      duration: "0:00-5:00",
      durationMin: 5,
      story: "Дети заходят, дверь закрывается, система уводит комнату в аварийный режим.",
      playerGoal: "Найти конверт N1 под подушкой на кровати и прочитать стартовую записку.",
      operatorFocus: "Плотно собрать стартовый саунд-дизайн и перевести комнату в тёмный режим без задержек.",
      operatorSteps: [
        "Запустить alarm_intro.",
        "Закрыть шторы.",
        "Переключить люстру в синий режим.",
        "Запустить system_boot.",
        "Пока шторы закрываются, включить Minecraft.",
        "После закрытия штор включить main_intro.",
        "Далее включить scene1 и затем ambient_dark.",
        "Подтвердить, что дети нашли конверт N1 и прочитали записку."
      ],
      audio: [
        { color: "red", label: "alarm_intro", note: "Самый первый удар по входу" },
        { color: "red", label: "system_boot", note: "После синего света" },
        { color: "green", label: "Minecraft", note: "Во время закрытия штор" },
        { color: "blue", label: "main_intro", note: "После закрытия штор" },
        { color: "blue", label: "scene1", note: "Основной трек сцены" },
        { color: "purple", label: "ambient_dark", note: "Фон после старта" }
      ],
      nextPrep: "Проверь карточки для конверта N1 и будь готов к glitch и ambient_low для следующей сцены.",
      result: "Конверт найден, игра переведена к поиску лишнего предмета."
    },
    {
      id: "scene_2",
      number: 2,
      color: "blue",
      title: "Лишний предмет",
      duration: "5:00-12:00",
      durationMin: 7,
      story: "Внутри конверта карточки: стол, стул, лампа, книга, ковер. Ответ — лампа.",
      playerGoal: "Назвать лишний предмет и вывести игру к правильной лампе.",
      operatorFocus: "Мягко поддержать ритм, вовремя включить лампу Кирилла и перевести фон.",
      operatorSteps: [
        "Дать glitch в начале сцены.",
        "После окончания ambient_dark включить ambient_low.",
        "Если дети долго тупят, включить scene 2.",
        "После ответа 'лампа' включить лампу Кирилла."
      ],
      audio: [
        { color: "blue", label: "glitch", note: "Стартовое переключение сцены" },
        { color: "green", label: "ambient_low", note: "Фон после dark" },
        { color: "brown", label: "scene 2", note: "Только если зависли" }
      ],
      nextPrep: "Убедись, что под лампой Кирилла лежит записка про воду. Следующая сцена короткая и без сложной техники.",
      result: "Дети произнесли 'лампа', лампа Кирилла включена."
    },
    {
      id: "scene_3",
      number: 3,
      color: "green",
      title: "Под лампой",
      duration: "12:00-18:00",
      durationMin: 6,
      story: "Под лампой Кирилла лежит записка: 'Ищи там, где есть вода. Но не спеши.'.",
      playerGoal: "Найти записку и самостоятельно уйти в туалетную комнату.",
      operatorFocus: "Не перегружать сцену. Только подстраховать, если записку не замечают.",
      operatorSteps: [
        "Следить, что дети подошли к лампе Кирилла.",
        "Если долго не находят записку, включить scene 3.",
        "После чтения записки дать группе спокойно уйти в туалет."
      ],
      audio: [
        { color: "brown", label: "scene 3", note: "Подсветка только при задержке" }
      ],
      nextPrep: "Проверь буквы В, Е, Т, Е, Р за дверью туалета и будь готов к ambient_med, whoosh, wind и scene 4.",
      result: "Группа зашла в туалетную комнату."
    },
    {
      id: "scene_4",
      number: 4,
      color: "cyan",
      title: "Туалет. Сбор слова",
      duration: "18:00-28:00",
      durationMin: 10,
      story: "Дети собирают слово ВЕТЕР и должны сами догадаться произнести команду 'Ветер включись'.",
      playerGoal: "Собрать слово и озвучить команду системе.",
      operatorFocus: "Поднять фон сцены, дождаться правильной голосовой команды и только потом включить вентилятор.",
      operatorSteps: [
        "Включить ambient_med.",
        "Дать whoosh.",
        "Ждать, пока дети соберут слово ВЕТЕР.",
        "Ждать команды 'Ветер включись'.",
        "После команды включить вентилятор и wind.",
        "Если тупят именно в моменте с командой, включить scene 4."
      ],
      audio: [
        { color: "green", label: "ambient_med", note: "Основной фон туалета" },
        { color: "blue", label: "whoosh", note: "Акцент на сборке" },
        { color: "blue", label: "wind", note: "После команды детей" },
        { color: "brown", label: "scene 4", note: "Только если не могут перейти к команде" }
      ],
      nextPrep: "Подготовь блок выбора коктейлей, первый выход актера, club и желтый свет на выходе актера.",
      result: "Команда сказана, вентилятор включён, переход к коктейлям открыт."
    },
    {
      id: "scene_5",
      number: 5,
      color: "orange",
      title: "Выбор коктейлей и первый выход актера",
      duration: "28:00-38:00",
      durationMin: 10,
      story: "Система проводит голосование за коктейли, после чего актер выносит бумажку с цветовым шифром.",
      playerGoal: "Проголосовать за коктейли и получить бумажку с кодировкой цветов.",
      operatorFocus: "Четко провести голосование, посчитать руки и красиво собрать первый выход актера.",
      operatorSteps: [
        "Включить cocktails_intro.",
        "По очереди запустить bubblegum, mojito, melon и считать поднятые руки.",
        "После подсчета включить cocktail_done.",
        "Поставить свет 'вечеринка'.",
        "Включить club.",
        "Актер отдает бумажку с шифром и уходит.",
        "После выхода актера перевести свет в желтый."
      ],
      audio: [
        { color: "orange", label: "cocktails_intro", note: "Старт выбора" },
        { color: "pink", label: "bubblegum", note: "Первый вариант" },
        { color: "green", label: "mojito", note: "Второй вариант" },
        { color: "yellow", label: "melon", note: "Третий вариант" },
        { color: "orange", label: "cocktail_done", note: "После подсчета" },
        { color: "purple", label: "club", note: "Под первый выход актера" }
      ],
      nextPrep: "Подготовь бумажку актера: красный=1, синий=2, зеленый=3. Следом — код по люстре и повторяющийся цикл цветов.",
      result: "Дети получили бумажку с цветовым шифром."
    },
    {
      id: "scene_6",
      number: 6,
      color: "red",
      title: "Код по люстре",
      duration: "38:00-48:00",
      durationMin: 10,
      story: "Дети смотрят на люстру и переводят цвета в числа по бумажке актера. Код должен получиться 1213.",
      playerGoal: "Назвать код 1213.",
      operatorFocus: "Стабильно держать цикл люстры и не сбивать порядок цветов.",
      operatorSteps: [
        "Запустить цикл люстры: красный, синий, красный, зеленый.",
        "Каждый цвет держать по несколько секунд.",
        "После цикла вернуть желтый свет.",
        "Повторять цикл, пока дети не поймут.",
        "Если не понимают, включить scene 6.",
        "Когда дети называют 1213, включить system_success."
      ],
      audio: [
        { color: "brown", label: "scene 6", note: "Только если не считывают код" },
        { color: "green", label: "system_success", note: "После точного ответа 1213" }
      ],
      nextPrep: "Проверь умную розетку глобуса, ребус на глобусе и финальный конверт у актера. Следом будет второй выход актера.",
      result: "Код 1213 назван верно, сцена с глобусом разблокирована."
    },
    {
      id: "scene_7",
      number: 7,
      color: "slate",
      title: "Глобус и второй выход актера",
      duration: "48:00-55:00",
      durationMin: 7,
      story: "На столе загорается глобус с ребусом. Ответ — 'конверт'. После разгадки актер приносит финальный конверт.",
      playerGoal: "Разгадать ребус на глобусе и получить финальный конверт.",
      operatorFocus: "Точно включить глобус, дождаться слова 'конверт' и красиво собрать второй выход актера.",
      operatorSteps: [
        "Включить розетку глобуса.",
        "Ждать разгадки ребуса.",
        "После слова 'конверт' включить system_success.",
        "Поставить свет 'вечеринка'.",
        "Включить viski.",
        "Актер кладет финальный конверт.",
        "После ухода актера вернуть синий свет и ambient_dark."
      ],
      audio: [
        { color: "green", label: "system_success", note: "После слова 'конверт'" },
        { color: "purple", label: "viski", note: "Под второй выход актера" },
        { color: "purple", label: "ambient_dark", note: "После ухода актера" }
      ],
      nextPrep: "Подготовь final_success, music, белый свет, открытие штор и отключение вентилятора. Финал сразу после слова 'Свобода'.",
      result: "Финальный конверт у детей, они готовы к последнему слову."
    },
    {
      id: "scene_8",
      number: 8,
      color: "purple",
      title: "Финал",
      duration: "55:00-60:00",
      durationMin: 5,
      story: "Дети читают финальную записку и должны сказать слово 'Свобода'. После этого система восстанавливается.",
      playerGoal: "Произнести слово 'Свобода'.",
      operatorFocus: "Финал должен быть мгновенным: звук, шторы, белый свет, музыка, выключение вентилятора.",
      operatorSteps: [
        "Дождаться слова 'Свобода'.",
        "Сразу включить final_success и music.",
        "Открыть шторы.",
        "Перевести свет в белый режим.",
        "Выключить вентилятор."
      ],
      audio: [
        { color: "yellow", label: "final_success", note: "После слова 'Свобода'" },
        { color: "yellow", label: "music", note: "Финальная музыка" }
      ],
      nextPrep: "Игра завершена. После выхода детей выполни чек-лист сброса.",
      result: "Шторы открыты, свет белый, игра завершена."
    }
  ],
  cocktails: [
    { id: "bubblegum", name: "Bubblegum", color: "#ff8ecb" },
    { id: "mojito", name: "Mojito", color: "#79e5a4" },
    { id: "melon", name: "Melon", color: "#ffd86d" }
  ]
};

const state = { activeTab: "console", currentSceneIndex: 0, logs: [], tick: Date.now(), sceneStartedAt: Date.now(), questStarted: false, cocktails: { bubblegum: 0, mojito: 0, melon: 0 } };
const root = document.getElementById("app");
const cueClass = { red: "cue-red", blue: "cue-blue", green: "cue-green", yellow: "cue-yellow", orange: "cue-orange", pink: "cue-pink", teal: "cue-teal", brown: "cue-brown", cyan: "cue-cyan", slate: "cue-slate", indigo: "cue-indigo", purple: "cue-purple" };
const tabs = [{ id: "console", label: "Пульт" }, { id: "scenes", label: "Сцены" }, { id: "cocktails", label: "Коктейли" }];

setInterval(() => { state.tick = Date.now(); render(); }, 1000);
init();
function init() { logAction("Пульт готов", "Сценарий из quest_scenario_business_4p.docx загружен"); }
function nowTime() { return new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(new Date()); }
function logAction(label, text) { state.logs.unshift({ id: `${Date.now()}-${Math.random()}`, time: nowTime(), label, text }); state.logs = state.logs.slice(0, 80); render(); }
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
function pauseQuest() { logAction("Пауза", "Пауза для оператора: проверь темп сцены, свет, звук и готовность следующего перехода"); }
function resetTimer() { state.sceneStartedAt = Date.now(); logAction("Таймер сцены", `Таймер сброшен для сцены: ${currentScene().title}`); }
function jumpScene(index) { state.currentSceneIndex = index; state.sceneStartedAt = Date.now(); state.activeTab = "console"; logAction("Прыжок к сцене", currentScene().title); }
function setCocktail(id, delta) { state.cocktails[id] = Math.max(0, state.cocktails[id] + delta); const label = appData.cocktails.find((item) => item.id === id)?.name || id; logAction("Коктейли", `${label}: ${state.cocktails[id]}`); }
function clearCocktails() { Object.keys(state.cocktails).forEach((id) => { state.cocktails[id] = 0; }); logAction("Коктейли", "Выбор очищен"); }
function progressBar(value) { return `<div class="progress"><div class="progress-fill" style="width:${value}%"></div></div>`; }
function render() {
  const scene = currentScene();
  root.innerHTML = `<header class="topbar"><div><p class="eyebrow">${appData.meta.subtitle}</p><h1>${appData.meta.title}</h1><div class="fact-row">${appData.meta.facts.map((fact) => `<span class="fact-chip">${fact}</span>`).join("")}</div><p class="subline">Сцена ${scene.number} из ${appData.scenes.length}: ${scene.title}</p></div><div class="topbar-actions">${tabs.map((tab) => `<button class="top-btn ${state.activeTab === tab.id ? "active" : ""}" data-tab="${tab.id}">${tab.label}</button>`).join("")}</div></header><main>${renderView()}</main>`;
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
  return `<section class="console-layout"><div class="panel command-panel"><div class="panel-head"><h2>Управление</h2><span class="status-chip ${state.questStarted ? "live" : "ready"}">${state.questStarted ? "Игра идёт" : "Готов к старту"}</span></div><div class="command-grid"><button class="action primary" data-action="start">Старт</button><button class="action" data-action="prev">Назад</button><button class="action" data-action="next">Дальше</button><button class="action warn" data-action="pause">Пауза</button><button class="action" data-action="resetTimer">Сброс таймера</button></div><div class="meter-block"><div class="meter-row"><span>Прогресс сцены</span><strong>${scenePct}%</strong></div>${progressBar(scenePct)}<div class="timer-line">${fmt(elapsedSeconds())} / ${fmt(totalSeconds(scene))}</div></div><div class="meter-block"><div class="meter-row"><span>Прогресс квеста</span><strong>${questPct}%</strong></div>${progressBar(questPct)}</div><div class="check-block"><span class="mini-label">Перед началом</span><div class="check-list compact">${appData.preflight.slice(0, 5).map((item) => `<div>${item}</div>`).join("")}</div></div></div><div class="panel current-scene-panel"><div class="panel-head"><h2>${scene.title}</h2><span class="scene-mark ${cueClass[scene.color] || "cue-blue"}">${scene.duration}</span></div><div class="scene-summary">${scene.story}</div><div class="two-col"><div class="mini-card"><span class="mini-label">Что делают дети</span><p>${scene.playerGoal}</p></div><div class="mini-card"><span class="mini-label">Фокус оператора</span><p>${scene.operatorFocus}</p></div></div><div class="operator-list"><span class="mini-label">Что делать оператору</span>${scene.operatorSteps.map((step, index) => `<div class="operator-row"><span>${index + 1}</span><div>${step}</div></div>`).join("")}</div></div><div class="panel prep-panel"><div class="panel-head"><h2>Подготовить заранее</h2><span class="mini-soft">Следующий шаг</span></div><div class="prep-card"><span class="mini-label">Следующая сцена</span><p>${next ? `${next.number}. ${next.title}` : "Последняя сцена"}</p></div><div class="prep-card"><span class="mini-label">Что подготовить</span><p>${scene.nextPrep}</p></div><div class="prep-card"><span class="mini-label">Результат сцены</span><p>${scene.result}</p></div></div><div class="panel audio-panel"><div class="panel-head"><h2>Что включать оператору</h2><span class="mini-soft">Цвета и очередность</span></div><div class="cue-list">${scene.audio.length ? scene.audio.map((cue) => `<div class="cue-row ${cueClass[cue.color] || "cue-blue"}"><strong>${cue.label}</strong><span>${cue.note}</span></div>`).join("") : `<div class="empty-note">На этой сцене отдельный звук не обязателен.</div>`}</div></div><div class="panel timeline-panel"><div class="panel-head"><h2>Сцены</h2><span class="mini-soft">Быстрый переход</span></div><div class="timeline-list">${appData.scenes.map((item, index) => `<button class="timeline-item ${index === state.currentSceneIndex ? "active" : ""}" data-scene-index="${index}"><span class="timeline-no">${item.number}</span><span class="timeline-main"><strong>${item.title}</strong><small>${item.duration}</small></span></button>`).join("")}</div></div><div class="panel log-panel"><div class="panel-head"><h2>Журнал</h2><span class="mini-soft">Последние действия</span></div><div class="log-list">${state.logs.map((item) => `<div class="log-row"><strong>${item.time} · ${item.label}</strong><span>${item.text}</span></div>`).join("")}</div></div></section>`;
}

function renderScenes() {
  return `<section class="scenes-page"><div class="panel wide-panel"><div class="panel-head"><h2>Все сцены</h2><span class="mini-soft">По документу quest_scenario_business_4p</span></div><div class="check-columns"><div class="check-block"><span class="mini-label">Полный чек-лист перед игрой</span><div class="check-list">${appData.preflight.map((item) => `<div>${item}</div>`).join("")}</div></div><div class="check-block"><span class="mini-label">Что должно быть у актера</span><div class="check-list">${appData.actorReady.map((item) => `<div>${item}</div>`).join("")}</div></div><div class="check-block"><span class="mini-label">Чек-лист сброса после игры</span><div class="check-list">${appData.reset.map((item) => `<div>${item}</div>`).join("")}</div></div></div><div class="scene-table">${appData.scenes.map((scene, index) => `<article class="scene-line ${index === state.currentSceneIndex ? "active" : ""}"><div class="scene-line-top"><div><span class="scene-mark ${cueClass[scene.color] || "cue-blue"}">Сцена ${scene.number}</span><h3>${scene.title}</h3><p>${scene.story}</p></div><button class="mini-jump" data-scene-index="${index}">Открыть</button></div><div class="scene-line-grid"><div><span class="mini-label">Оператор</span><p>${scene.operatorFocus}</p></div><div><span class="mini-label">Звуки</span><p>${scene.audio.map((cue) => cue.label).join(", ") || "Без отдельной команды"}</p></div><div><span class="mini-label">Подготовить дальше</span><p>${scene.nextPrep}</p></div></div></article>`).join("")}</div></div></section>`;
}

function renderCocktails() {
  const total = Object.values(state.cocktails).reduce((sum, value) => sum + value, 0);
  return `<section class="cocktail-page"><div class="panel wide-panel"><div class="panel-head"><h2>Подсчёт коктейлей</h2><span class="mini-soft">Сцена 5</span></div><div class="cocktail-grid">${appData.cocktails.map((item) => `<article class="cocktail-card"><div class="cocktail-color" style="background:${item.color}"></div><h3>${item.name}</h3><div class="cocktail-count">${state.cocktails[item.id]}</div><div class="cocktail-actions"><button class="count-btn" data-cocktail="${item.id}:-1">-1</button><button class="count-btn" data-cocktail="${item.id}:1">+1</button></div></article>`).join("")}</div><div class="cocktail-summary"><div class="summary-line"><span>Bubblegum</span><strong>${state.cocktails.bubblegum}</strong></div><div class="summary-line"><span>Mojito</span><strong>${state.cocktails.mojito}</strong></div><div class="summary-line"><span>Melon</span><strong>${state.cocktails.melon}</strong></div><div class="summary-line total"><span>Всего голосов</span><strong>${total}</strong></div></div><button class="clear-btn" data-action="clearCocktails">Очистить выбор</button></div></section>`;
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
