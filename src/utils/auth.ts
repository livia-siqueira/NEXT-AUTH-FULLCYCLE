export function isTokenExpired(token: string) {
  const payload = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString("utf8")
  );
  console.log(payload);
}
