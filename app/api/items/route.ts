import items, { Item } from "./data";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(items);
}

export async function POST(req: Request) {
  try {
    const body: { name: string } = await req.json();

    if (!body.name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    const newItem: Item = {
      id: Date.now(),
      name: body.name,
    };

    items.push(newItem);
    return Response.json(newItem, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Invalid request" }, { status: 500 });
  }
}