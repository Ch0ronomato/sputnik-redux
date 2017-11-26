from sputnik import StaffReview
reviews = StaffReview()
for review in reviews.getPageOfReviews(1):
	print review

