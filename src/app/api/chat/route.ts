// import OpenAI from 'openai'
// import { OpenAIStream, StreamingTextResponse } from 'ai'

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// })

// export const runtime = 'edge'

// export async function POST(req: Request) {
//   const { messages } = await req.json()
//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     stream: true,
//     messages,
//   })

//   const stream = OpenAIStream(response)

//   return new StreamingTextResponse(stream)
// }

export const dynamic = 'force-dynamic' // defaults to auto
import { fetchLatestInvoices } from '@/lib/data';
export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()

  // return Response.json({ data })

  const latestInvoices = await fetchLatestInvoices();

  const data = { text: "返回内容chat-route", latestInvoices };
  return Response.json({ data })
}