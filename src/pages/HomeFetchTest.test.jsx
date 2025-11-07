import { describe, it, expect, vi } from "vitest";

describe("fetch test", () => {
  it("fetch returns something", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ response: { docs: [{ id: 1 }] } }),
      })
    );

    const response = await fetch("/nyt/svc/search/v2/articlesearch.json?q=test");
    const data = await response.json();

    expect(response).toBeTruthy();
    expect(data).toHaveProperty("response");
    expect(data.response.docs.length).toBeGreaterThan(0);
  });
});
