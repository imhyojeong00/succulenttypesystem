<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Cluster System</title>

    <link rel="stylesheet" href="style.css">

    <!-- html2canvas -->
    <script
        src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"
        defer>
    </script>

    <!-- main script -->
    <script src="script.js" defer></script>
</head>

<body>

    <!-- 좌표 토글 -->
    <button
        id="coord-toggle"
        aria-label="좌표 보기"
        title="Coordinate">
        ⊕
    </button>

    <!-- 타이핑 UI -->
    <div id="ui-layer">

        <input
            type="text"
            id="succulent-input"
            placeholder="TYPE A-Z"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            autofocus
        >

        <div id="data-log">

            <span>
                DIST:
                <span id="dist-val">-</span>
            </span>

            <span>|</span>

            <span>
                ANGLE:
                <span id="angle-val">-</span>
            </span>

            <button id="decode-btn">
                [MUTANT VIEW]
            </button>

        </div>
    </div>

    <!-- 우측 하단 유틸 -->
    <div id="utility-layer">

        <button
            id="receipt-btn"
            title="Receipt">
            ▤
        </button>

        <button
            id="save-btn"
            title="Save">
            ↓
        </button>

    </div>

    <!-- 영수증 -->
    <div id="receipt-panel">

        <div id="receipt-header">

            <span>
                CLUSTER RECEIPT
            </span>

            <button id="receipt-close">
                ×
            </button>

        </div>

        <pre id="receipt-content"></pre>

        <button id="receipt-download">
            [DOWNLOAD TXT]
        </button>

    </div>

    <!-- 렌더 스테이지 -->
    <div id="render-stage">

        <!-- 좌표 레이어 -->
        <div id="coord-layer"></div>

    </div>

</body>
</html>
