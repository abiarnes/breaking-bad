import suggestions from "./suggestions.json";

function buildResponse(response) {
  return {
    body: JSON.stringify(response),
    init: { headers: { "Content-Type": "application/json" } },
  };
}

export function mockResponses() {
    return Promise.resolve(buildResponse(suggestions));
  }
