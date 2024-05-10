## Skoluppgift - React Resume

Uppgiften var att skapa en personlig hemsida med hjälp av React. På hemsidan finns en kort introduktion om mig, min techstack, länkar till mina GitHub-projekt och ett kontaktformulär där du får en personlig bekräftelse när du skickar. På kontaktsidan finns länkar till mina profiler på LinkedIn, GitHub och mail. På samtliga sidor finns även möjligheten att växla mellan ljust och mörkt tema.


### Använda tekniker:
-	Redux för att växla mellan ljust och mörkt tema
-	GitHub API används för att hämta mina repositorys till ’Mina Projekt’-sidan
-	useState används för att lagra data från GitHub API och för hantering av kontaktformuläret
-	useEffect används för att hämta data från GitHub API när komponenten ’FetchData’ först renderas
-	Props används för att rendera olika rubriker beroende på sidan, samt för övergångseffekter mellan sidorna


### React Hooks / bibliotek som ej varit inkluderade i kursen:

#### Framer Motion	 
Framer Motion är ett bibliotek för animationskontroll. Med hjälp av React-komponenter och API:er kan man definiera och styra olika animationsegenskaper som start-, slut- och övergångsstatus.
Jag använde detta bibliotek för att skapa mjukare övergångar mellan sidorna samt för textanimationer på samtliga sidor, varav animationen på kontaksidan visas först när alla fält i kontaktformuläret är ifyllda och knappen ’Skicka’ trycks. Jag använde Framer Motion för att jag tycker att det passar väl i min applikation för att skapa en bättre användarupplevelse.

#### useLocation		
useLocation används tillsammans med AnimatePresence för att hantera sidövergångar med react-router-dom. AnimatePresence är en komponent från Framer Motion – biblioteket. useLocation används här för att hämta den nuvarande platsen i applikationen vilket är nödvändigt för att AnimatePresence ska kunna hantera övergångar när användaren navigerar mellan olika sidor. 


### Hur man kör projektet
1.	Klona detta repository
2.	Öppna terminalen och navigera till projektmappen
3.	Kör ’npm install’ för att installera alla projektets beroenden
4.	Kör ’npm start’ för att starta utvecklingsservern
5.	Öppna din webbläsare och gå till adressen som anges i terminalen för att se hemsidan
