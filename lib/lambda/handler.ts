export async function handler(event: string, context: string) {
  console.log("Stage Name is: " + process.env.stage);
  return {
    body: "Hello from a lambda function",
    statusCode: 200,
  };
}
