> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# 🎉 Connect Your Tribe - UI-Events
![Mockup](https://github.com/JustinLung/connect-your-tribe-ui-events/blob/main/docs/mockup-ui-events.png?raw=true)

## 🔖 Beschrijving
applicatie waar je met behulp van verschillende eventlisteners de kleuren van de buttons kan veranderen.
<!-- Voeg een link toe naar Github Pages 🌐-->
[🌐 Live](justinuievents.student.fdnd.nl)

## 🔬 Experimenten
Tijdens het experimenteren, was ik bezig geweest door alle buttons te selecteren in javascript met behulp van document.querySelectorAll. Echter kwam ik hierbij dat als je een alle buttons aanroept, er maar 1 button de class wordt toegevoegd. Dit vond ik erg vreemd natuurlijk. Na het uitzoeken kwam ik achter dat als je document.querySelectorAll gaat "console.loggen", dat je hierbij een NodeList terug krijgt. Aan een NodeList kan je geen eventListener toevoegen. Hierbij moest ik een for loop gaan maken zodat elke button wordt aangeroepen.

![Screenshot Nodelist](https://github.com/JustinLung/connect-your-tribe-ui-events/blob/main/docs/console-nodelist.png?raw=true)

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
