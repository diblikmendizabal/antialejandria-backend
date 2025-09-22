import { useContext, useState } from "react";
import { BookContext } from "../../../contexts/BookContext";
import { GenderContext } from "../../../contexts/GenderContext";
import BookGrid from "../BookGrid/BookGrid";
import "../BookSection/BookSection.css";

function BookSection() {
  const { books, showMoreBooks } = useContext(BookContext);
  const [visibleCount, setVisibleCount] = useState(24);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedGender } = useContext(GenderContext);

  const showMore = async () => {
    setIsLoading(true);
    const nextBlock = visibleCount + 12;

    if (nextBlock > books.length) {
      await showMoreBooks();
    }

    setVisibleCount(nextBlock);
    setIsLoading(false);
  };

  const visibleBooks = books.slice(0, visibleCount);

  const genreQuotes = {
    Fantasy: {
      quote:
        "La fantasía sirve para profundizar tu comprensión del mundo y de tu destino.",
      author: "Ursula K. Le Guin ",
    },
    Ensayos: {
      quote:
        "La literatura es una forma de resistencia a los egoísmos del presente",
      author: "Nuccio Ordine",
    },
    Biography: {
      quote:
        "Quienes no entienden su pasado están condenados a repetirlo.",
      author: "George Santayana",
    },
    Horror: {
      quote: "Aprender a qué tememos es aprender quiénes somos. El horror define nuestros límites e ilumina nuestras almas.",
      author: "Shirley Jackson",
    },
    Romance: {
      quote:
        "El amor no tiene nada que ver con lo que esperas recibir, solo con lo que esperas dar, que es todo.",
      author: "Katharine Hepburn",
    },
    Mystery: {
      quote:
        "Una vez descartado lo imposible, lo que queda, por improbable que parezca, debe ser la verdad.",
      author: "Arthur Conan Doyle",
    },
    "Science Fiction": {
      quote:
        "La ciencia ficción es la percepción del cambio a través de la tecnología, predice el cambio.",
      author: "Isaac Asimov",
    },
    Drama: {
      quote:
        "A veces la realidad es demasiado compleja. Las historias le dan forma.",
      author: "Jean Luc Godard",
    },
  };

  return (
    <section className="max-w-[1536px] mx-auto my-10 px-5 md:px-10">
      <div className="mb-6">
        <h2 className="text-lg md:text-3xl mb-2 text-center font-medium italic">
          “{genreQuotes[selectedGender]?.quote || genreQuotes["Fantasy"].quote}”
        </h2>
        <h3 className="text-sm md:text-xl text-center text-gray-600">
          —{" "}
          {genreQuotes[selectedGender]?.author || genreQuotes["Fantasy"].author}
        </h3>
      </div>
      <BookGrid books={visibleBooks} />

      {visibleBooks.length < books.length + 24 && (
        <div className="text-center mt-10">
          {isLoading ? (
            <p className="text-sm text-gray-500">Cargando más libros...</p>
          ) : (
            <button
              onClick={showMore}
              className="bg-[#390099] px-6 py-3 rounded hover:bg-[#390099]/50 transition cursor-pointer"
            >
              Ver más
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default BookSection;
