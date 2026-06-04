export async function getSettings() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/settings`, {
      next: { revalidate: 60 }
    })
    return await res.json()
  } catch {
    return null
  }
}