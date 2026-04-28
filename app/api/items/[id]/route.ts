import items from "../data";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; 

  const body: { name: string } = await req.json();

  const index = items.findIndex((i) => i.id === Number(id));

  if (index === -1) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  items[index].name = body.name;

  return Response.json(items[index]);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const index = items.findIndex((i) => i.id === Number(id));

  if (index === -1) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  const deleted = items.splice(index, 1);

  return Response.json(deleted[0]);
}