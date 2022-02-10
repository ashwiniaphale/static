import os
import requests
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

BASE_URL = "https://api.themoviedb.org/3"

CONFIG_URL = BASE_URL + "/configuration" 

QUERY_PARAMS = {
    'api_key': os.getenv('API_KEY'),
}
CONFIG_RESPONSE = requests.get(CONFIG_URL, params=QUERY_PARAMS)
CONFIGURATION = CONFIG_RESPONSE .json()

def get_title(movies):
    '''returns title of movie'''
    return movies["title"]

def get_tagline(movies):
    '''returns tagline of movie'''
    return movies["tagline"]

def get_genre(movies):
    '''returns genres of movie after looping through list of dictionaries'''
    movie_genre = movies["genres"]
    genres = ""
    for movie in movie_genre:
        genres = genres + str(movie['name']) + "," + " "
    genres = genres[:-2]
    return genres

def get_image(movies):
    '''uses configuration api and builds and returns movie poster image'''
    image_base_url = CONFIGURATION["images"]["base_url"]
    image_size = CONFIGURATION["images"]["poster_sizes"][4]
    final_url = image_base_url + "/" + image_size + movies["poster_path"]
    return final_url

#used the sample code within the media wiki (API:Search)
def get_wiki_page(movies):
    '''uses wiki api:search to build the wikipedia full url and return wikipedia page'''
    session = requests.Session()

    wiki_base_url = "https://en.wikipedia.org/w/api.php"
    what_to_search = get_title(movies)

    params = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srsearch": what_to_search
    }

    response = session.get(url=wiki_base_url, params=params)
    wiki_page = response.json()

    movie_title = wiki_page["query"]["search"][0]["title"]
    url_with_space = "https://en.wikipedia.org/wiki/" + movie_title
    return url_with_space.replace(" ", "_")
