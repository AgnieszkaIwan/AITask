/* global require, process */

require("dotenv").config();
const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const writeFile = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

async function processArticle() {
  try {
    const articleContent = fs.readFileSync("article.txt", "utf8");

    const prompt = `
    Przetwórz poniższy artykuł na kod HTML, spełniając następujące wytyczne:
    1. Użyj odpowiednich tagów HTML do strukturyzacji treści.
    2. Określ miejsca, gdzie warto wstawić grafiki. Oznacz je tagiem <img> z atrybutem src="image_placeholder.jpg".
    3. Dodaj atrybut alt do każdego obrazka z dokładnym promptem do wygenerowania grafiki.
    4. Umieść podpisy pod grafikami używając odpowiedniego tagu HTML.
    5. Nie dodawaj kodu CSS ani JavaScript.
    6. Zwróć tylko zawartość do wstawienia między tagami <body> i </body>.
    7. Nie dołączaj znaczników <html>, <head> ani <body>.

    Oto treść artykułu:
    ${articleContent}
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    let generatedHtml = completion.choices[0].message.content;

    generatedHtml = generatedHtml
      .replace(/^```html\s*/, "")
      .replace(/```$/, "");

    fs.writeFileSync("artykul.html", generatedHtml);

    console.log("Plik artykul.html został pomyślnie utworzony.");

    await createPreviewFile();
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  }
}

async function createPreviewFile() {
  try {
    console.log("Tworzenie pliku podglad.html...");

    const templateContent = await readFile("./szablon.html");

    const articleContent = await readFile("./artykul.html");

    const updatedContent = templateContent.replace(
      '<div class="container">',
      `<div class="container">\n${articleContent}`
    );

    await writeFile("./podglad.html", updatedContent);

    console.log("Gotowe! Plik podglad.html został utworzony.");
  } catch (error) {
    console.error("Wystąpił błąd podczas tworzenia pliku podglad.html:", error);
  }
}

processArticle();
