// subcategorytype/[subcategoryId]/page.tsx
import FinalPage from "@/components/finalpage"

export async function generateStaticParams() {
  // Fetch or define all possible `subcategoryId` values
  const finalpageIds = await fetchfinalpageIds(); // Replace with your actual logic

  // Return an array of objects with each possible `subcategoryId`
  return finalpageIds.map((id) => ({
    finalId: id.toString(), // Ensure `subcategoryId` is a string
  }));
}

export default function finalPage({ params }: { params: { finalId: string } }) {
  return (
    <main>
      <FinalPage finalpageId={Number.parseInt(params.finalId)}/>
      {/* Add your subcategory-specific logic or components here */}
    </main>
  );
}

// Example function to simulate fetching IDs (replace with real API call or logic)
async function fetchfinalpageIds() {
  return [1, 2, 3, 4, 5]; // Example subcategory type IDs
}
