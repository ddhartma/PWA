exports.handler = async (event) => {
  const { httpMethod, body } = event;

  if (httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify([]),
    };
  }

  if (httpMethod === "POST") {
    // Hier kannst du die Logik zum Hinzufügen eines Todo-Elements einfügen
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Todo added successfully" }),
    };
  }

  if (httpMethod === "PUT") {
    // Hier kannst du die Logik zum Aktualisieren eines Todo-Elements einfügen
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Todo updated successfully" }),
    };
  }

  if (httpMethod === "DELETE") {
    // Hier kannst du die Logik zum Löschen eines Todo-Elements einfügen
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Todo deleted successfully" }),
    };
  }
};
