# Aplikacja kierowcy – instalacja (jednorazowo)

## 1. Skrypt
1. Wklej nowy kod `ZleceniaTransportowe.gs` do edytora i zapisz.
2. **Wdróż → Zarządzaj wdrożeniami → ✏️** → *Kto ma dostęp*: **Każdy** → *Wersja*: **Nowa wersja** → Wdróż.
3. W arkuszu: **🚚 Zlecenia → 📱 Aplikacja kierowcy – adres do config.js** – skopiuj linię `var API_URL = '…';`.

## 2. GitHub Pages
1. github.com → **+** (prawy górny róg) → **New repository**.
   Nazwa np. `kursy`, zaznacz **Public**, kliknij **Create repository**.
2. Na stronie repozytorium kliknij link **uploading an existing file**.
3. Przeciągnij **wszystkie pliki z tego folderu** (index.html, config.js, manifest.webmanifest, sw.js, ikony .png) → **Commit changes**.
4. Kliknij plik **config.js** → ołówek ✏️ (Edit) → zamień całą linię `var API_URL = …` na skopiowaną z arkusza → **Commit changes**.
5. **Settings → Pages** → *Branch*: **main**, folder **/(root)** → **Save**.
   Po 1–2 minutach u góry pojawi się adres, np. `https://twojlogin.github.io/kursy/`.

## 3. Telefon kierowcy
1. Otwórz adres aplikacji w **Chrome** (Android) albo **Safari** (iPhone).
2. Zaloguj się loginem i hasłem kierowcy (konto z rolą „kierowca”).
3. Android: pasek „📲 Zainstaluj” albo menu ⋮ → **Zainstaluj aplikację**.
   iPhone: **Udostępnij ⬆ → Do ekranu początkowego**.

Telefon pamięta logowanie 30 dni od ostatniego użycia. Zmiana hasła, auta albo wyłączenie konta wylogowuje.

## Zmiany w przyszłości
Nowe wersje plików aplikacji wgrywa się tak samo (Add file → Upload files, te same nazwy zastępują stare).
Telefony pobiorą nową wersję same przy następnym uruchomieniu.
W repozytorium jest tylko kod aplikacji – żadnych danych firmy. Dane są tylko w arkuszu i wydaje je skrypt po zalogowaniu kierowcy.
