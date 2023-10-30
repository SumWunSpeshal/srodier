import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const asdasd = await request.formData();
  console.log(asdasd);

  return new Response(
    JSON.stringify({
      message: 'Success!',
    }),
    { status: 200 },
  );
};
