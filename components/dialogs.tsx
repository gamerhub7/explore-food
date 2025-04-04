import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, Phone, MapPin, Book, Mail, MessageSquare } from 'lucide-react';
import { Category } from './ChooseSection'; // Import the type for Category

interface DialogsProps {
  selectedCard: Category | null;
  setSelectedCard: (category: Category | null) => void;
  showReviews: boolean;
  setShowReviews: (show: boolean) => void;
 
}

const Dialogs: React.FC<DialogsProps> = ({ selectedCard, setSelectedCard, showReviews, setShowReviews }) => {
  return (
    <>
      {/* Category Details Dialog */}
      <Dialog open={selectedCard !== null} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedCard?.title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              {/* Replace img tag with video tag */}
              <iframe
                    src="https://www.youtube.com/embed/c2zMap_PRfU" // Embed link for the YouTube video
                    className="w-full h-[250px] sm:h-[300px] object-cover rounded-xl shadow-lg border-0"
                    scrolling="no"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="video"
                  />
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Heart className="h-4 sm:h-5 w-4 sm:w-5 text-red-500 mr-2" />
                  <span className="text-sm sm:text-base">4.8 (2.4k reviews)</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowReviews(true)}
                >
                  Read Reviews
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <Button className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
                <Button className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  <MapPin className="h-4 w-4" />
                  Location
                </Button>
                <Button className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Book className="h-4 w-4" />
                  Menu
                </Button>
                <Button className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </div>
              <div className="prose prose-sm">
                <h4 className="text-base sm:text-lg font-semibold mb-2">About</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Experience the finest in {selectedCard?.title.toLowerCase()}. Our carefully curated selection
                  ensures an unforgettable experience with top-rated service and amenities.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Reviews Dialog */}
      <Dialog open={showReviews} onOpenChange={setShowReviews}>
        <DialogContent className="w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Top Reviews</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-b pb-4 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">User {i + 1}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-sm sm:text-base">{4 + Math.random().toFixed(1)}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Amazing experience! The atmosphere was perfect and the service was exceptional.
                  Would definitely recommend to others.
                </p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dialogs;
