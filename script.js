//[1. 이미지 설정 및 각도 계산기]
const IMAGE_CONFIG = {
    'A': { scale: 0.6, offsetY: 0 },
    'B': { scale: 1.0, offsetY: 0 },
    'C': { scale: 1.5, offsetY: 0 },
    'D': { scale: 1.2, offsetY: 0 },
    'E': { scale: 1.35, offsetY: 0 },
    'F': { scale: 1.1, offsetY: 0 },
    'G': { scale: 2.0, offsetY: 0 },
    'H': { scale: 1.3, offsetY: 0 },
    'I': { scale: 1.3, offsetY: 0 },
    'J': { scale: 0.9, offsetY: 0 },
    'K': { scale: 1.7, offsetY: 0 },
    'L': { scale: 1.5, offsetY: 0 },
    'M': { scale: 1.28, offsetY: 0 },
    'N': { scale: 1.22, offsetY: 0 },
    'O': { scale: 1.3, offsetY: 0 },
    'P': { scale: 1.46, offsetY: 0 },
    'Q': { scale: 1.3, offsetY: 0 },
    'R': { scale: 2.39, offsetY: 0 },
    'S': { scale: 1.95, offsetY: 0 },
    'T': { scale: 0.9, offsetY: 0 },
    'U': { scale: 0.95, offsetY: 0 },
    'V': { scale: 1.15, offsetY: 0 },
    'W': { scale: 1.6, offsetY: 0 },
    'X': { scale: 1.6, offsetY: 0 },
    'Y': { scale: 0.8, offsetY: 0 },
    'Z': { scale: 1.0, offsetY: 0 },

    'A1': { scale: 0.9, isMutant: true },
    'A2': { scale: 1.0, isMutant: true },
    'A3': { scale: 1.2, isMutant: true },
    'A4': { scale: 1.3, isMutant: true },
    'A5': { scale: 1.4, isMutant: true },
    'A6': { scale: 1.6, isMutant: true },
    'A7': { scale: 1.7, isMutant: true },
    'A8': { scale: 1.9, isMutant: true },

    'A_STACK1': { scale: 0.6, isMutant: true },
    'A_STACK2': { scale: 0.6, isMutant: true },
    'A_STACK3': { scale: 0.6, isMutant: true },
    'A_STACK4': { scale: 0.6, isMutant: true },
    'A_STACK5': { scale: 0.6, isMutant: true },

    'Q1': { scale: 0.6, isMutant: true },
    'IC_INTER': { scale: 1.3, isMutant: true },
    'AK_INTER': { scale: 1.3, isMutant: true },
    'AK_INTER1': { scale: 1.7, offsetY: -50, isMutant: true },
    'AB_INTER': { scale: 1.3, offsetY: -10, isMutant: true },
    'AC_COMBO': { scale: 1.8, isMutant: true },
    'AC_INTER1': { scale: 1.5, offsetY: -60, isMutant: true },
    'RANDOM_CHAR': { scale: 0.93, isMutant: true },
    'DT_INTER': { scale: 1.4, offsetY: -5, isMutant: true },
    'HT_INTER': { scale: 1.2, isMutant: true },
    'IMAGE_CONFIG': { scale: 2.9, offsetY: -90, isMutant: true },

    'K_INTER1': { scale: 0.9, isMutant: true },
    'K_INTER2': { scale: 1.3, isMutant: true },
    'K_INTER3': { scale: 1.9, isMutant: true },

    'W1': { scale: 1.0, isMutant: true },
    'W2': { scale: 1.1, isMutant: true },
    'W3': { scale: 1.0, isMutant: true },
    'W4': { scale: 0.9, isMutant: true },
    'W5': { scale: 1.2, isMutant: true },
    'W6': { scale: 1.0, isMutant: true },
    'W7': { scale: 1.1, isMutant: true },
    'W8': { scale: 1.2, isMutant: true },
    'W9': { scale: 1.3, isMutant: true },

    'Z2': { scale: 1.0, isMutant: true },

    'ECHEVERIA_MASTER': { scale: 2.8, isMutant: true }
};

const IMAGE_FALLBACK_MAP = {
    'AC_INTER1': 'AC_COMBO',
    'W5': 'W4',
    'Z2': 'Z'
};

const SPECIES_MAP = {
    'A': '에케베리아 치와와엔시스 / Echeveria chihuahuensis',
    'B': '홍포도 / Graptoveria Amethorum',
    'C': '황금세덤 / Sedum acre',
    'D': '천탑 / Crassula capitella',
    'E': '수련 / Echeveria Suryeon',
    'F': '러블리 로즈 / Graptoveria Lovely Rose',
    'G': '루비틴트 / Sedum Ruby Tint',
    'H': '비스코사 / Haworthiopsis viscosa',
    'I': '옵투사 / Haworthia cymbiformis var. obtusa',
    'J': '트리코디아데마 덴섬 / Trichodiadema densum',
    'K': '황금사 / Mammillaria elongata',
    'L': '하월시아 교배종 / Haworthia hyb.',
    'M': '십이지권 / Haworthiopsis attenuata',
    'N': '백화기린 / Euphorbia mammillaris cv. variegata',
    'O': '가스테리아 백복륜금 / Gasteria White Variegated',
    'P': '에케베리아 환엽 버밀리언',
    'Q': '가스테리아 그라실리스 / Gasteria armstrongii',
    'R': '원종 프리티금 / Echeveria cv. Rezry',
    'S': '아미산 / Euphorbia gabizan',
    'T': '오층탑 / Haworthia hyb. Manda',
    'U': '리톱스 / Lithops',
    'V': '리톱스 / Lithops',
    'W': '리톱스 군생',
    'X': '왕서각 꽃 / Stapelia',
    'Y': '왕서각 / Stapelia',
    'Z': '왕서각 군생',

    'A1': 'A sequence mutant',
    'A2': 'A sequence mutant',
    'A3': 'A sequence mutant',
    'A4': 'A sequence mutant',
    'A5': 'A sequence mutant',
    'A6': 'A sequence mutant',
    'A7': 'A sequence mutant',
    'A8': 'A sequence mutant',
    'A_STACK1': 'A vertical stack mutant',
    'A_STACK2': 'A vertical stack mutant',
    'A_STACK3': 'A vertical stack mutant',
    'A_STACK4': 'A vertical stack mutant',
    'A_STACK5': 'A vertical stack mutant',

    'AB_INTER': '에케베리아 홍포도 변이종 / Echeveria chihuahuensis mut.',
    'AC_COMBO': 'A-C hybridized mutant',
    'AC_INTER1': 'A-C derived mutant',
    'AK_INTER': 'A-K intermediate mutant',
    'AK_INTER1': 'A-K derived mutant',
    'IC_INTER': 'I-C intermediate mutant',
    'DT_INTER': 'D-T intermediate mutant',
    'HT_INTER': 'H-T intermediate mutant',
    'IMAGE_CONFIG': 'D-T delayed mutant',
    'Q1': 'Q derived mutant',
    'RANDOM_CHAR': 'random generated mutant',
    'K_INTER1': 'K diagonal mutant',
    'K_INTER2': 'K diagonal mutant',
    'K_INTER3': 'K diagonal mutant',
    'W1': 'W derived cluster',
    'W2': 'W derived cluster',
    'W3': 'W derived cluster',
    'W4': 'W derived cluster',
    'W5': 'W derived cluster',
    'W6': 'W derived cluster',
    'W7': 'W derived cluster',
    'W8': 'W derived cluster',
    'W9': 'W derived cluster',
    'Z2': 'Z derived cluster',
    'ECHEVERIA_MASTER': 'Echeveria master cluster'
};

const GENETIC_MAP = {
    'A': { x: 190, y: -200 },
    'B': { x: 220, y: -170 },
    'C': { x: 70, y: -80 },
    'D': { x: 30, y: -50 },
    'E': { x: 160, y: -220 },
    'F': { x: 240, y: -190 },
    'G': { x: 100, y: -60 },
    'H': { x: 140, y: -40 },
    'I': { x: 160, y: -20 },
    'J': { x: -70, y: 120 },
    'K': { x: 300, y: 200 },
    'L': { x: 190, y: 100 },
    'M': { x: 70, y: 150 },
    'N': { x: -150, y: 150 },
    'O': { x: 210, y: 70 },
    'P': { x: 280, y: -160 },
    'Q': { x: 180, y: 120 },
    'R': { x: 200, y: -230 },
    'S': { x: -110, y: 180 },
    'T': { x: 230, y: 90 },
    'U': { x: -170, y: 220 },
    'V': { x: 110, y: -20 },
    'W': { x: -200, y: 240 },
    'X': { x: -250, y: 180 },
    'Y': { x: -270, y: 160 },
    'Z': { x: -230, y: 200 }
};

const REQUIRED_FOR_MASTER = ['A', 'AB_INTER', 'AC_COMBO', 'DT_INTER', 'B', 'R', 'P', 'E', 'F'];

let collectedSet = new Set();
let masterSpawned = false;

let stage, input, distLog, angleLog;

const START_X = 25000;
const START_Y = 25000;

let lastKey = null;
let lastPos = { x: START_X, y: START_Y };

let wCounter = 0;
let aCounter = 0;
let zCounter = 0;
let firstASequenceSpawned = false;

let receiptRecords = [];
let typedHistory = [];

window.onload = () => {
    stage = document.getElementById('render-stage');
    input = document.getElementById('succulent-input');
    distLog = document.getElementById('dist-val');
    angleLog = document.getElementById('angle-val');

    document.getElementById('save-btn')?.addEventListener('click', captureFullStage);
    document.getElementById('decode-btn')?.addEventListener('click', toggleMutantOnly);
    document.getElementById('receipt-btn')?.addEventListener('click', toggleReceipt);
    document.getElementById('receipt-close')?.addEventListener('click', closeReceipt);
    document.getElementById('receipt-download')?.addEventListener('click', downloadReceipt);
    document.getElementById('coord-toggle')?.addEventListener('click', toggleCoordinateLayer);

    createCoordinateLayer();

    input?.addEventListener('keydown', handleKeydown);
    input?.addEventListener('input', handleInput);

    moveCamera(START_X, START_Y + (window.innerHeight * 0.2), 'auto');
};

function toggleMutantOnly() {
    const isDecoding = stage.classList.toggle('only-mutant-view');
    const btn = document.getElementById('decode-btn');

    if (btn) {
        btn.innerText = isDecoding ? "[FULL VIEW]" : "[MUTANT VIEW]";
    }
}

function checkMasterLogic(imgName) {
    if (REQUIRED_FOR_MASTER.includes(imgName)) collectedSet.add(imgName);

    if (collectedSet.size === REQUIRED_FOR_MASTER.length && !masterSpawned) {
        masterSpawned = true;
        createSucculentElement('ECHEVERIA_MASTER', lastPos.x + 220, lastPos.y - 120, 0, 'MASTER');
    }
}

function handleKeydown(e) {
    if (e.key === 'Enter') {
        input.value = '';
        lastKey = null;
        lastPos = { x: START_X, y: START_Y };

        wCounter = 0;
        aCounter = 0;
        zCounter = 0;
        firstASequenceSpawned = false;

        collectedSet.clear();
        masterSpawned = false;

        receiptRecords = [];
        typedHistory = [];

        updateDataLog(0, 0, false);
        moveCamera(START_X, START_Y + (window.innerHeight * 0.2), 'auto');
        closeReceipt();
    }

    if (e.key.toLowerCase() === 'h' && document.activeElement !== input) {
        stage.classList.toggle('hide-succulent');
    }
}

function handleInput(e) {
    const char = e.target.value.toUpperCase().slice(-1);

    if (!char) return;

    typedHistory.push(char);

    if (char === "?") {
        renderRandomNode("RANDOM_CHAR", char);
        checkMasterLogic("RANDOM_CHAR");
        lastKey = "?";
        wCounter = 0;
        aCounter = 0;
        zCounter = 0;
        return;
    }

    if (GENETIC_MAP[char] || char === "+") {
        if ((lastKey === 'D' && char === 'T') || (lastKey === 'T' && char === 'D')) {
            renderDTSequence(char);
            checkMasterLogic("DT_INTER");
        }

        if ((lastKey === 'H' && char === 'T') || (lastKey === 'T' && char === 'H')) {
            renderIntermediateNode("HT_INTER", char);
            checkMasterLogic("HT_INTER");
        }

        if ((lastKey === 'I' && char === 'C') || (lastKey === 'C' && char === 'I')) {
            renderIntermediateNode("IC_INTER", char);
            checkMasterLogic("IC_INTER");
        }

        if ((lastKey === 'A' && char === 'C') || (lastKey === 'C' && char === 'A')) {
            renderACSequence(char);
            checkMasterLogic("AC_COMBO");
        }

        if ((lastKey === 'A' && char === 'K') || (lastKey === 'K' && char === 'A')) {
            renderAKSequence(char);
            checkMasterLogic("AK_INTER");
        }

        if ((lastKey === 'A' && char === 'B') || (lastKey === 'B' && char === 'A')) {
            renderIntermediateNode("AB_INTER", char);
            checkMasterLogic("AB_INTER");
        }

        if (char === 'W') {
            handleWVariant(char);
        } else if (char === 'Z' && lastKey === 'Z') {
            handleZVariant(char);
        } else if (char === 'A' && lastKey === 'A') {
            handleAVariant(char);
            checkMasterLogic('A');
        } else {
            processTyping(char);

            if (char === 'A' && !firstASequenceSpawned) {
                firstASequenceSpawned = true;
                renderAHorizontalSequence(lastPos.x, lastPos.y, char);
            }

            if (char === 'K') renderKDiagonalSequence(char);
            if (char === 'Q') renderQSequence(lastPos.x, lastPos.y, char);

            checkMasterLogic(char);

            if (char !== 'A') aCounter = 0;
            if (char !== 'W') wCounter = 0;
            if (char !== 'Z') zCounter = 0;
        }
    }
}

function getDistanceAndAngle(prevChar, currentChar) {
    let distance = 0;
    let angle = 90;

    if (prevChar && GENETIC_MAP[prevChar] && GENETIC_MAP[currentChar] && currentChar !== prevChar) {
        const p1 = GENETIC_MAP[prevChar];
        const p2 = GENETIC_MAP[currentChar];

        distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

        if (distance < 60) angle = 90;
        else if (distance < 140) angle = 75;
        else if (distance < 240) angle = 60;
        else if (distance < 350) angle = 45;
        else if (distance < 500) angle = 30;
        else angle = 15;
    }

    return { distance, angle };
}

function processTyping(char) {
    const prevChar = lastKey;
    const { distance, angle } = getDistanceAndAngle(prevChar, char);
    const { nX, nY, rot } = calculateCoords(distance, angle, char === lastKey);

    createSucculentElement(char, nX, nY, rot, char, prevChar, distance, angle);

    lastPos = { x: nX, y: nY };
    moveCamera(nX, nY, 'auto');
    updateDataLog(distance, angle, char === lastKey);
    lastKey = char;
}

function renderAHorizontalSequence(baseX, baseY, sourceInput = 'A') {
    const spacing = 230;
    const aImages = ['A1','A2','A3','A4','A5','A6','A7','A8'];

    for (let i = 0; i < aImages.length; i++) {
        setTimeout(() => {
            createSucculentElement(aImages[i], baseX + spacing * (i + 1), baseY, 0, sourceInput, 'A', null, null);
        }, 120 * (i + 1));
    }
}

function handleAVariant(sourceInput = 'A') {
    aCounter = (aCounter % 5) + 1;
    const imgName = `A_STACK${aCounter}`;
    const nY = lastPos.y - 95;

    createSucculentElement(imgName, lastPos.x, nY, 0, sourceInput, 'A', 0, 90);

    lastPos = { x: lastPos.x, y: nY };
    moveCamera(lastPos.x, nY, 'auto');

    lastKey = 'A';
    wCounter = 0;
    zCounter = 0;
}

function handleZVariant(sourceInput = 'Z') {
    zCounter = (zCounter % 2) + 1;
    const imgName = zCounter === 1 ? 'Z2' : 'Z';
    const nX = lastPos.x + 120;
    const nY = lastPos.y + 20;

    createSucculentElement(imgName, nX, nY, 0, sourceInput, 'Z', 0, 90);

    lastPos = { x: nX, y: nY };
    moveCamera(nX, nY, 'auto');

    lastKey = 'Z';
    wCounter = 0;
    aCounter = 0;
}

function renderACSequence(sourceInput = 'C') {
    renderIntermediateNode("AC_COMBO", sourceInput);
    setTimeout(() => {
        createSucculentElement('AC_INTER1', lastPos.x, lastPos.y - 120, 0, sourceInput, 'A/C', null, null);
    }, 500);
}

function renderAKSequence(sourceInput = 'K') {
    createSucculentElement('AK_INTER', lastPos.x, lastPos.y - 70, 0, sourceInput, 'A/K', null, null);

    setTimeout(() => {
        createSucculentElement('AK_INTER1', lastPos.x, lastPos.y - 140, 0, sourceInput, 'A/K', null, null);
    }, 500);
}

function renderQSequence(baseX, baseY, sourceInput = 'Q') {
    setTimeout(() => {
        createSucculentElement('Q1', baseX + 180, baseY, 0, sourceInput, 'Q', null, null);
    }, 250);
}

function renderDTSequence(sourceInput = 'T') {
    createSucculentElement('DT_INTER', lastPos.x, lastPos.y - 70, 0, sourceInput, 'D/T', null, null);

    setTimeout(() => {
        createSucculentElement('IMAGE_CONFIG', lastPos.x, lastPos.y - 90, 0, sourceInput, 'D/T', null, null);
        checkMasterLogic("IMAGE_CONFIG");
    }, 800);
}

function renderKDiagonalSequence(sourceInput = 'K') {
    const angle = Math.atan2(GENETIC_MAP['K'].y, GENETIC_MAP['K'].x);
    const kImages = ['K_INTER1', 'K_INTER2', 'K_INTER3'];

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const nX = lastPos.x + Math.cos(angle) * 195 * (i + 1);
            const nY = lastPos.y + Math.sin(angle) * 195 * (i + 1);
            createSucculentElement(kImages[i], nX, nY, 0, sourceInput, 'K', null, null);
        }, 120 * (i + 1));
    }
}

function handleWVariant(sourceInput = 'W') {
    let imgName, nX, nY;

    if (lastKey !== 'W') {
        wCounter = 0;
        imgName = 'W';
        const coords = calculateCoords(0, 90, false);
        nX = coords.nX;
        nY = coords.nY;
    } else {
        wCounter = (wCounter % 9) + 1;
        imgName = `W${wCounter}`;
        nX = lastPos.x;
        nY = lastPos.y - 80;
    }

    createSucculentElement(imgName, nX, nY, 0, sourceInput, lastKey, 0, 90);

    lastPos = { x: nX, y: nY };
    moveCamera(nX, nY, 'auto');

    lastKey = 'W';
    checkMasterLogic('W');
    aCounter = 0;
    zCounter = 0;
}

function renderIntermediateNode(imgName, sourceInput = '-') {
    createSucculentElement(
        imgName,
        lastPos.x + (Math.random() * 60 - 30),
        lastPos.y - 70,
        0,
        sourceInput,
        lastKey,
        null,
        null
    );
}

function renderRandomNode(imgName, sourceInput = '?') {
    createSucculentElement(
        imgName,
        window.scrollX + (Math.random() * window.innerWidth),
        window.scrollY + (Math.random() * window.innerHeight),
        Math.random() * 360,
        sourceInput,
        lastKey,
        null,
        null
    );
}

function createSucculentElement(imgName, x, y, rot, sourceInput = '-', prevInput = '-', distance = null, angle = null) {
    if (!stage) return;

    const node = document.createElement('div');
    node.className = 'succulent-node';

    const config = IMAGE_CONFIG[imgName] || { scale: 1.0, offsetY: 0, isMutant: false };

    node.classList.add(config.isMutant ? 'mutant-type' : 'normal-type');

    node.style.zIndex = (imgName.includes('INTER') || imgName === 'IMAGE_CONFIG')
        ? 9000
        : Math.floor(5000 - (y - START_Y));

    recordReceipt(imgName, x, y, rot, sourceInput, prevInput, distance, angle, config);

    const img = document.createElement('img');
    const baseWidth = 320 * config.scale;

    img.style.width = baseWidth + "px";
    img.style.height = "auto";

    img.onload = () => {
        node.style.left = `${x - (baseWidth / 2)}px`;
        node.style.top = `${y - (img.offsetHeight / 2) + (config.offsetY || 0)}px`;
    };

    img.onerror = () => {
        const fallbackName = IMAGE_FALLBACK_MAP[imgName] || 'A';

        if (img.dataset.fallbackTried === "true") {
            img.style.display = 'none';
            node.innerHTML = `<span style="color:#000; font-size:10px; background:#fff; border:1px solid red;">Missing: ${imgName}</span>`;
            console.warn("Missing image:", imgName);
            return;
        }

        img.dataset.fallbackTried = "true";
        img.src = `./images/${fallbackName}.png`;
        console.warn(`Missing image: ${imgName}. Fallback to ${fallbackName}.`);
    };

    img.src = `./images/${imgName}.png`;

    node.style.transform = `rotate(${rot}deg)`;
    node.appendChild(img);
    stage.appendChild(node);
}

function recordReceipt(imgName, x, y, rot, sourceInput, prevInput, distance, angle, config) {
    const genetic = GENETIC_MAP[sourceInput] || GENETIC_MAP[imgName] || null;

    receiptRecords.push({
        no: receiptRecords.length + 1,
        input: sourceInput,
        previous: prevInput || '-',
        image: imgName,
        species: SPECIES_MAP[imgName] || SPECIES_MAP[sourceInput] || imgName,
        type: config.isMutant ? 'MUTANT / HYBRIDIZED' : 'BASE',
        geneticX: genetic ? genetic.x : '-',
        geneticY: genetic ? genetic.y : '-',
        distance: distance === null ? '-' : Math.round(distance),
        angle: angle === null ? '-' : `${angle}°`,
        stageX: Math.round(x - START_X),
        stageY: Math.round(START_Y - y),
        rotation: `${Math.round(rot)}°`
    });

    updateReceiptIfOpen();
}

function buildReceiptText() {
    const lines = [];

    lines.push("==========================================");
    lines.push("        SUCCULENT GENETIC RECEIPT");
    lines.push("==========================================");
    lines.push(`INPUT SEQUENCE : ${typedHistory.join("") || "-"}`);
    lines.push(`TOTAL RECORDS  : ${receiptRecords.length}`);
    lines.push(`DATE           : ${new Date().toLocaleString()}`);
    lines.push("------------------------------------------");

    receiptRecords.forEach(item => {
        lines.push(`#${String(item.no).padStart(3, "0")}`);
        lines.push(`TYPE      : ${item.type}`);
        lines.push(`INPUT     : ${item.input}`);
        lines.push(`PREVIOUS  : ${item.previous}`);
        lines.push(`IMAGE     : ${item.image}`);
        lines.push(`SPECIES   : ${item.species}`);
        lines.push(`GENETIC   : x ${item.geneticX}, y ${item.geneticY}`);
        lines.push(`DISTANCE  : ${item.distance}`);
        lines.push(`ANGLE     : ${item.angle}`);
        lines.push(`POSITION  : x ${item.stageX}, y ${item.stageY}`);
        lines.push(`ROTATION  : ${item.rotation}`);
        lines.push("------------------------------------------");
    });

    lines.push("          END OF GERMINATION");
    lines.push("==========================================");

    return lines.join("\n");
}

function updateReceiptIfOpen() {
    const panel = document.getElementById('receipt-panel');
    const content = document.getElementById('receipt-content');

    if (!panel || !content) return;

    if (panel.classList.contains('show')) {
        content.textContent = buildReceiptText();
        content.scrollTop = content.scrollHeight;
    }
}

function toggleReceipt() {
    const panel = document.getElementById('receipt-panel');
    const content = document.getElementById('receipt-content');

    if (!panel || !content) return;

    if (panel.classList.contains('show')) {
        panel.classList.remove('show');
    } else {
        content.textContent = buildReceiptText();
        panel.classList.add('show');
        content.scrollTop = content.scrollHeight;
    }
}

function showReceipt() {
    const panel = document.getElementById('receipt-panel');
    const content = document.getElementById('receipt-content');

    if (!panel || !content) return;

    content.textContent = buildReceiptText();
    panel.classList.add('show');
    content.scrollTop = content.scrollHeight;
}

function closeReceipt() {
    const panel = document.getElementById('receipt-panel');
    if (panel) panel.classList.remove('show');
}

function downloadReceipt() {
    const text = buildReceiptText();

    const blob = new Blob([text], {
        type: "text/plain;charset=utf-8"
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `succulent_genetic_receipt_${Date.now()}.txt`;
    link.click();

    URL.revokeObjectURL(link.href);
}

function calculateCoords(dist, angle, isSame) {
    const vSpace = 100;
    const hSpace = 160;

    if (isSame) {
        return {
            nX: lastPos.x + (hSpace * (Math.random() > 0.5 ? 1 : -1)),
            nY: lastPos.y + (Math.random() * 40 - 20),
            rot: Math.random() * 16 - 8
        };
    }

    const rad = (angle * Math.PI) / 180;
    const dir = (Math.random() > 0.5) ? 1 : -1;

    return {
        nX: lastPos.x + Math.cos(rad) * vSpace * dir,
        nY: lastPos.y - Math.sin(rad) * vSpace,
        rot: (90 - angle) * dir
    };
}

function moveCamera(x, y, behavior = 'auto') {
    window.scrollTo({
        left: x - (window.innerWidth / 2),
        top: y - (window.innerHeight * 0.35),
        behavior
    });
}

function updateDataLog(dist, angle, isSame) {
    if (!distLog || !angleLog) return;

    distLog.innerText = isSame ? "CLUSTER" : Math.round(dist) + "mm";
    angleLog.innerText = isSame ? "HORIZON" : angle + "°";
}

function captureFullStage() {
    const nodes = document.querySelectorAll('.succulent-node');

    if (nodes.length === 0) return;

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    nodes.forEach(node => {
        const left = parseFloat(node.style.left);
        const top = parseFloat(node.style.top);

        minX = Math.min(minX, left);
        minY = Math.min(minY, top);
        maxX = Math.max(maxX, left + 600);
        maxY = Math.max(maxY, top + 600);
    });

    html2canvas(stage, {
        useCORS: true,
        x: minX - 450,
        y: minY - 450,
        width: (maxX - minX) + 900,
        height: (maxY - minY) + 900,
        windowWidth: 50000,
        windowHeight: 50000
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = `succulent_${Date.now()}.png`;
        link.click();
    });
}

function toggleCoordinateLayer() {
    const coordLayer = document.getElementById('coord-layer');
    const btn = document.getElementById('coord-toggle');

    if (!coordLayer || !btn) return;

    coordLayer.classList.toggle('show');
    btn.classList.toggle('active');
}

function createCoordinateLayer() {
    const coordLayer = document.getElementById('coord-layer');

    if (!coordLayer) return;

    coordLayer.innerHTML = '';

    const spacing = 100;
    const labelSpacing = 500;
    const stageSize = 50000;

    for (let x = 0; x <= stageSize; x += spacing) {
        const line = document.createElement('div');
        line.className = 'coord-line vertical';

        if (x === START_X) {
            line.classList.add('coord-axis');
        }

        line.style.left = `${x}px`;
        line.style.top = `0px`;
        coordLayer.appendChild(line);

        if (x % labelSpacing === 0) {
            const label = document.createElement('div');
            label.className = 'coord-label';
            label.style.left = `${x + 5}px`;
            label.style.top = `${START_Y + 8}px`;
            label.innerText = `x ${x - START_X}`;
            coordLayer.appendChild(label);
        }
    }

    for (let y = 0; y <= stageSize; y += spacing) {
        const line = document.createElement('div');
        line.className = 'coord-line horizontal';

        if (y === START_Y) {
            line.classList.add('coord-axis');
        }

        line.style.left = `0px`;
        line.style.top = `${y}px`;
        coordLayer.appendChild(line);

        if (y % labelSpacing === 0) {
            const label = document.createElement('div');
            label.className = 'coord-label';
            label.style.left = `${START_X + 8}px`;
            label.style.top = `${y + 5}px`;
            label.innerText = `y ${START_Y - y}`;
            coordLayer.appendChild(label);
        }
    }
}
