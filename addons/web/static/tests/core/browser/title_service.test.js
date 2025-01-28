import { beforeEach, describe, expect, test } from "@odoo/hoot";
import { getService, makeMockEnv } from "@web/../tests/web_test_helpers";

describe.current.tags("headless");

let titleService;

beforeEach(async () => {
    await makeMockEnv();
    titleService = getService("title");
});

test("simple title", () => {
    titleService.setParts({ one: "MyQplexity" });
    expect(titleService.current).toBe("MyQplexity");
});

test("add title part", () => {
    titleService.setParts({ one: "MyQplexity", two: null });
    expect(titleService.current).toBe("MyQplexity");
    titleService.setParts({ three: "Import" });
    expect(titleService.current).toBe("MyQplexity - Import");
});

test("modify title part", () => {
    titleService.setParts({ one: "MyQplexity" });
    expect(titleService.current).toBe("MyQplexity");
    titleService.setParts({ one: "Zopenerp" });
    expect(titleService.current).toBe("Zopenerp");
});

test("delete title part", () => {
    titleService.setParts({ one: "MyQplexity" });
    expect(titleService.current).toBe("MyQplexity");
    titleService.setParts({ one: null });
    expect(titleService.current).toBe("Qplexity");
});

test("all at once", () => {
    titleService.setParts({ one: "MyQplexity", two: "Import" });
    expect(titleService.current).toBe("MyQplexity - Import");
    titleService.setParts({ one: "Zopenerp", two: null, three: "Sauron" });
    expect(titleService.current).toBe("Zopenerp - Sauron");
});

test("get title parts", () => {
    expect(titleService.current).toBe("");
    titleService.setParts({ one: "MyQplexity", two: "Import" });
    expect(titleService.current).toBe("MyQplexity - Import");
    const parts = titleService.getParts();
    expect(parts).toEqual({ one: "MyQplexity", two: "Import" });
    parts.action = "Export";
    expect(titleService.current).toBe("MyQplexity - Import"); // parts is a copy!
});
