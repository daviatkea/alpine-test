import "./style.css";

import { cardData } from "./data.js";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("cardData", cardData);

Alpine.start();
