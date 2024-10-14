import { redirect } from 'next/navigation'

export default function LauncherRedirect() {
  redirect('https://raw.githubusercontent.com/madara-alliance/madara/refs/heads/main/scripts/launcher')
}