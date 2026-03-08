// push 03/08/2026 02:05:43
export default {
  async fetch(){
    return new Response("docs", {
      headers: {"content-type":"text/plain"}
    })
  }
}
