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

const CLASS_ORDER = ['Play Group', 'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12']

export function getSeatRows(settings) {
  const classFrom = settings?.classFrom || 'Play Group'
  const classTo = settings?.classTo || 'Class 8'
  const fromIdx = CLASS_ORDER.indexOf(classFrom)
  const toIdx = CLASS_ORDER.indexOf(classTo)
  const inRange = (c) => {
    const idx = CLASS_ORDER.indexOf(c)
    return idx >= fromIdx && idx <= toIdx
  }
  const rows = []
  if (inRange('Play Group')) rows.push({ label: '🌟 Play School (TZP)', key: 'seatPlayGroup' })
  if (inRange('Nursery')) rows.push({ label: '📚 Nursery', key: 'seatNursery' })
  if (inRange('LKG') || inRange('UKG')) rows.push({ label: '📚 LKG – UKG', key: 'seatLKGUKG' })
  const numberedTo = classTo.startsWith('Class') ? classTo : null
  if (['Class 1','Class 2','Class 3','Class 4','Class 5','Class 6','Class 7','Class 8','Class 9','Class 10','Class 11','Class 12'].some(inRange)) {
    rows.push({ label: `📚 Class 1 – ${numberedTo || classTo}`, key: 'seatClass1To' })
  }
  return rows
}