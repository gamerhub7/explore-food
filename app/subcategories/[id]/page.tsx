import SubCategorySection from "@/components/subcategory";

// This is required for static generation with `output: export`
export async function generateStaticParams() {
  // Replace this with your logic to fetch all available subcategory IDs.
  // For example, you might fetch it from an API or database.
  const subcategories = await fetchSubcategoryIds(); // Example function to fetch subcategory IDs

  // Return an array of objects representing each possible `id`
  return subcategories.map((id) => ({
    id: id.toString(), // Ensure that the `id` is a string
  }));
}

export default function SubCategoriesPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <SubCategorySection categoryId={Number.parseInt(params.id)} />
    </main>
  );
}

// Example function to simulate fetching subcategory IDs
async function fetchSubcategoryIds() {
  // Replace this with your actual logic for fetching the IDs from an API, database, etc.
  return [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14]; // Example data representing the IDs of your subcategories
}
