// Minimaler CORS-Proxy. Aufruf:
// https://board-game-database.l-dxx.workers.dev/https://api.geekdo.com/xmlapi2/thing?id=13

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,User-Agent"
};

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const target = url.pathname.slice(1) + url.search; // alles hinter dem ersten /

    if (!/^https?:\/\//i.test(target)) {
      return new Response(
        "Pass a full URL after /, e.g. /https://api.geekdo.com/xmlapi2/thing?id=13",
        { status: 400, headers: corsHeaders }
      );
    }

    const resp = await fetch(target, {
      headers: { "User-Agent": "Mozilla/5.0" }, // harmloser UA hilft manchmal
      method: "GET"
    });

    const headers = new Headers(resp.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    headers.delete("content-security-policy");
    headers.delete("x-frame-options");

    return new Response(resp.body, { status: resp.status, headers });
  }
};
