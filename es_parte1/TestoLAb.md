# Esercizio: Gestore di Promemoria (Task Manager)

Questo esercizio serve a verificare l'apprendimento dei concetti principali di JavaScript in ambiente Node.js, inclusi l'uso di oggetti/classi, moduli (CommonJS), programmazione funzionale (`map`, `filter`), gestione delle date (`dayjs`) e programmazione asincrona con database SQLite (`async/await` e Promise).

## Obiettivo
Creare un'applicazione modulare in Node.js che interroghi un database SQLite contenente dei promemoria (task), li mappi in oggetti JavaScript, filtri i dati utilizzando la programmazione funzionale e gestisca le date. Il tutto deve essere eseguito in modo asincrono.

## Requisiti del Progetto

### 1. Classe `Task`
Definisci una classe o una funzione costruttrice `Task` per rappresentare un promemoria. Deve avere le seguenti proprietà:
- `id`: identificativo univoco (numero).
- `description`: testo del promemoria (stringa).
- `urgent`: indica se il task è urgente (booleano).
- `deadline`: la data di scadenza (salvata come oggetto `dayjs` o `null` se non presente).

### 2. Modulo DAO (`task_dao.js`)
Crea un modulo chiamato `task_dao.js` che gestisca l'accesso al database. Il modulo deve esportare (tramite `exports` o `module.exports`) le seguenti funzioni asincrone che restituiscono una `Promise`:
- `getAllTasks()`: Recupera tutti i task dal database e restituisce un array di oggetti `Task`.
- `getUrgentTasks()`: Recupera tutti i task e usa i metodi funzionali degli array (es. `.filter()`) per restituire solo quelli urgenti (`urgent == true`).

### 3. Programma Principale (`main.js`)
Crea un file `main.js` che importi il modulo DAO e la libreria `dayjs`. Utilizza `async/await` per richiamare i metodi del DAO e stampare in console:
1. Tutti i task presenti nel database.
2. Solo i task urgenti.

## Struttura del Database (`tasks.db`)
Il database SQLite contiene una tabella `tasks` configurata con i seguenti campi:
- `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT)
- `description` (TEXT, NOT NULL)
- `urgent` (INTEGER, NOT NULL)
- `deadline` (TEXT, formato `YYYY-MM-DD` o NULL)