document.addEventListener("DOMContentLoaded", () => {
    const pieces = document.querySelectorAll(".puzzle-piece");
    const dropZones = document.querySelectorAll(".drop-zone");

    pieces.forEach(piece => {
        piece.addEventListener("dragstart", dragStart);
    });

    dropZones.forEach(zone => {
        zone.addEventListener("dragover", dragOver);
        zone.addEventListener("drop", drop);
    });

    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const pieceId = event.dataTransfer.getData("text/plain");
        const piece = document.getElementById(pieceId);

        if (!event.target.hasChildNodes()) {
            event.target.appendChild(piece);
        }
    }
});
