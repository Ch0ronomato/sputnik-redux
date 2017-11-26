class Review:
    def __init__(self, score, link, artist, album):
        self.score = score
        self.link = link.encode('utf-8')
        self.artist = artist.encode('utf-8')
        self.album = album.encode('utf-8')

    def __str__(self):
        return "{0} - {1}: Scored a {2} / 5.0. Review at {3}".format(self.artist, self.album, self.score, self.link)

    def serialize(self):
        return {
            'artist': self.artist,
            'album': self.album,
            'rating': self.score,
            'link': self.link
        }
