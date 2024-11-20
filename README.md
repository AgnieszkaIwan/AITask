# Aplikacja do Przetwarzania Artykułów na HTML z OpenAI API

Aplikacja umożliwia przetwarzanie artykułów tekstowych na kod HTML przy użyciu OpenAI API. Zawiera funkcjonalność generowania kodu HTML na podstawie artykułu, a także tworzenia pliku podglądu HTML w odpowiednim szablonie.

## Funkcjonalności

- Łączy się z API OpenAI, aby przetworzyć artykuł tekstowy na kod HTML.
- Generuje kod HTML z odpowiednimi tagami strukturalnymi oraz obrazkami w miejscach wskazanych przez AI.
- Zapisuje wygenerowany kod HTML do pliku `artykul.html`.
- Generuje plik `podglad.html`, który zawiera pełny podgląd artykułu w szablonie HTML.
- Oferuje pusty szablon HTML, który można wykorzystać do wyświetlenia artykułu w atrakcyjny sposób.

## Wymagania

- Node.js (w wersji co najmniej 14.x)
- NPM (Node Package Manager)
- Konto w OpenAI z kluczem API

## Instalacja

1. **Pobierz repozytorium:**
   Jeśli jeszcze tego nie zrobiłeś, sklonuj repozytorium:

   ```bash
   git clone <link-do-repozytorium>
   cd <folder-z-repozytorium>
   ```

2. **Zainstaluj zależności:**
   Zainstaluj wymagane biblioteki Node.js:

   ```bash
   npm install
   ```

3. **Skonfiguruj OpenAI API:**
   Utwórz plik `.env` w głównym katalogu projektu, zawierający Twój klucz API OpenAI:

   ```bash
   OPENAI_API_KEY=<twój-klucz-api>
   ```

   Możesz uzyskać klucz API OpenAI, rejestrując się na stronie: [OpenAI API](https://platform.openai.com/signup).

4. **Przygotuj artykuł:**
   Stwórz plik `article.txt` w tym samym katalogu co plik `app.js` i wklej artykuł, który chcesz przetworzyć.

## Uruchomienie aplikacji

1. **Uruchom aplikację:**
   Aby uruchomić aplikację, wpisz w terminalu:

   ```bash
   node app.js
   ```

2. **Wyniki działania:**
   Po zakończeniu działania aplikacji, w folderze projektu pojawią się dwa pliki:

   - `artykul.html`: Zawiera wygenerowany kod HTML na podstawie artykułu.
   - `podglad.html`: Zawiera pełny podgląd artykułu w szablonie HTML.

3. **Sprawdzenie wyników:**
   Otwórz plik `podglad.html` w przeglądarce, aby zobaczyć, jak artykuł wygląda w formie sformatowanego HTML.

## Struktura katalogu

- `app.js` - Główny plik aplikacji, odpowiedzialny za interakcję z OpenAI i generowanie plików HTML.
- `article.txt` - Plik zawierający artykuł do przetworzenia.
- `szablon.html` - Szablon HTML do generowania podglądu artykułu.
- `artykul.html` - Plik z wygenerowanym kodem HTML na podstawie artykułu.
- `podglad.html` - Plik zawierający pełny podgląd artykułu w szablonie HTML.
- `.env` - Plik konfiguracyjny zawierający klucz API OpenAI.

## Wskazówki

- Upewnij się, że plik `article.txt` zawiera pełny artykuł w formacie tekstowym, aby OpenAI mogło go przetworzyć na kod HTML.
- Jeśli chcesz zmienić sposób generowania HTML (np. inne formatowanie, style), edytuj plik `szablon.html`.

## Licencja

Ten projekt jest licencjonowany na warunkach [MIT License](LICENSE).
