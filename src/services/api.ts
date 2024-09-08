export async function fetchCloseApproachData(): Promise<any> {
  const response = await fetch('https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&date-min=2018-01-01&sort=dist');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
