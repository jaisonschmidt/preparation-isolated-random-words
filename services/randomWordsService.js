// create a service that will generate random words for the client to use in the game

const randomWordsService = async (numberOfWords = 5) => {
  try {
    const response = await fetch(
      `${process.env.RANDOM_WORDS_API_URL}=${numberOfWords}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch random words");
  }
};

module.exports = { randomWordsService };