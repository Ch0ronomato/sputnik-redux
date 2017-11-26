import re
from bs4 import BeautifulSoup as soup
from urllib2 import urlopen, Request
import ssl
from string import Template
from Review import Review

class SputnikMusicStaffReviewPage:
    def __init__(self):
        self.link_template = Template('https://www.sputnikmusic.com/reviews/staff/albums/$page')
        self.review_template = Template('https://www.sputnikmusic.com/$review')

    def getPageOfReviews(self, i):
        reviews = urlopen(Request(self.link_template.substitute(page=i)), context=ssl._create_unverified_context())
        page = soup(reviews, 'lxml')
        for review in page.find_all(lambda x: x.parent.name == "td" and x.name == "a" and x.parent.has_attr('class') and 'bestnewmusic' in x.parent['class']):
            yield self.getReview(self.review_template.substitute(review=review['href']))

    def getReview(self, reviewlink):
        review = urlopen(Request(reviewlink), context=ssl._create_unverified_context())
        review_soup = soup(review, 'lxml')
        root_container = review_soup.find("img", attrs={"src": re.compile('album')})
        score_container = root_container.find_next_sibling('div').find('span')
        name_container = root_container.find_next_sibling('h1').find('a')
        album_container = root_container.find_next_sibling('h1').find('span')
        return Review(float(score_container.text), reviewlink, name_container.text, album_container.text)
