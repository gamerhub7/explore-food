import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { SubCategoryType } from "./SubCategoryTypeSection"

interface TypeDialogsProps {
  selectedCategory: SubCategoryType | null
  setSelectedCategory: (category: SubCategoryType | null) => void
  showReviews: boolean
  setShowReviews: (show: boolean) => void
}

export default function TypeDialogs({
  selectedCategory,
  setSelectedCategory,
  showReviews,
  setShowReviews,
}: TypeDialogsProps) {
  return (
    <>
      <Dialog open={selectedCategory !== null} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedCategory?.title}</DialogTitle>
            <DialogDescription>
              This is a placeholder description for {selectedCategory?.title}. You can add more details here.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button onClick={() => setShowReviews(true)}>Show Details</Button>
            <Button onClick={() => setSelectedCategory(null)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showReviews} onOpenChange={() => setShowReviews(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Details for {selectedCategory?.title}</DialogTitle>
          </DialogHeader>
          <div>
            <p>This is where you would display detailed information for {selectedCategory?.title}.</p>
          </div>
          <Button onClick={() => setShowReviews(false)}>Close Details</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

