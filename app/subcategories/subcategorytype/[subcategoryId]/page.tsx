// subcategorytype/[subcategoryId]/page.tsx
import SubCategoryTypeSection from "@/components/SubCategoryTypeSection";

export async function generateStaticParams() {
  // Fetch or define all possible `subcategoryId` values
  const subcategoryIds = await fetchSubcategoryTypeIds(); // Replace with your actual logic

  // Return an array of objects with each possible `subcategoryId`
  return subcategoryIds.map((id) => ({
    subcategoryId: id.toString(), // Ensure `subcategoryId` is a string
  }));
}

export default function SubcategoryTypePage({ params }: { params: { subcategoryId: string } }) {
  return (
    <main>
      <SubCategoryTypeSection subcategoryId={Number.parseInt(params.subcategoryId)}/>
      {/* Add your subcategory-specific logic or components here */}
    </main>
  );
}

// Example function to simulate fetching IDs (replace with real API call or logic)
async function fetchSubcategoryTypeIds() {
  return [1, 2, 3, 4, 5]; // Example subcategory type IDs
}
