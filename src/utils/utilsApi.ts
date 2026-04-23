export function getId (url: string) {
  const tab = url.split('/')

  return Number.parseInt(tab[tab.length - 1])
}

export function getRomanEpisode (num: number) {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  return romanNumerals[num - 1] || num
}

export function formatDate (dateString: string) {
  try {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('fr-FR').format(date)
  } catch {
    return dateString
  }
}