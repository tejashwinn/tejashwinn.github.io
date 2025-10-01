import { redirect } from 'next/navigation'

export default async function Root({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  redirect('/home')
}
