
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/types/books';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return of([
      {
        "kind": "books#volume",
        "id": "X4luPiGW140C",
        "etag": "ug8PhIpDPSA",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/X4luPiGW140C",
        "volumeInfo": {
          "title": "Migraine",
          "authors": [
            "Oliver Sacks",
            "Oliver W. Sacks"
          ],
          "publisher": "Univ of California Press",
          "publishedDate": "1992-01-01",
          "description": "Describes the symptoms and history of migraine headaches, identifies foods and conditions which may provoke attacks, and discusses the possible treatments",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0520082230"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780520082236"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 338,
          "printType": "BOOK",
          "categories": [
            "Medical"
          ],
          "averageRating": 4,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.2.6.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=X4luPiGW140C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=X4luPiGW140C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=X4luPiGW140C&printsec=frontcover&dq=oliver+sacks&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=X4luPiGW140C&dq=oliver+sacks&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Migraine.html?hl=&id=X4luPiGW140C"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Migraine-sample-epub.acsm?id=X4luPiGW140C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=X4luPiGW140C&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Describes the symptoms and history of migraine headaches, identifies foods and conditions which may provoke attacks, and discusses the possible treatments"
        }
      },
      {
        "kind": "books#volume",
        "id": "4uzAmjQRcuoC",
        "etag": "hS5lzgOyirE",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/4uzAmjQRcuoC",
        "volumeInfo": {
          "title": "A Leg to Stand On",
          "authors": [
            "Oliver Sacks"
          ],
          "publisher": "Pan Macmillan",
          "publishedDate": "2011-06-16",
          "description": "‘Oliver Sacks is a perfect antidote to the anaesthetic of familiarity. His writing turns brains and minds transparent’ Observer When Oliver Sacks, a physician by profession, injured his leg while climbing a mountain, he found himself in an unusual position – that of patient. The injury itself was severe, but straightforward to fix; the psychological effects, however, were far less easy to predict, explain, or resolve: Sacks experienced paralysis and an inability to perceive his leg as his own, instead seeing it as some kind of alien and inanimate object, over which he had no control. A Leg to Stand On is both an account of Sacks’ ordeal and subsequent recovery, and an exploration of the ways in which mind and body are inextricably linked.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781447204954"
            },
            {
              "type": "ISBN_10",
              "identifier": "1447204956"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 208,
          "printType": "BOOK",
          "categories": [
            "Literary Collections"
          ],
          "averageRating": 3.5,
          "ratingsCount": 4,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.10.8.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=4uzAmjQRcuoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=4uzAmjQRcuoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=4uzAmjQRcuoC&printsec=frontcover&dq=oliver+sacks&hl=&cd=2&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=4uzAmjQRcuoC&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=4uzAmjQRcuoC"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 1010.76,
            "currencyCode": "RUB"
          },
          "retailPrice": {
            "amount": 909.68,
            "currencyCode": "RUB"
          },
          "buyLink": "https://play.google.com/store/books/details?id=4uzAmjQRcuoC&rdid=book-4uzAmjQRcuoC&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 1010760000,
                "currencyCode": "RUB"
              },
              "retailPrice": {
                "amountInMicros": 909680000,
                "currencyCode": "RUB"
              }
            }
          ]
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/A_Leg_to_Stand_On-sample-epub.acsm?id=4uzAmjQRcuoC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=4uzAmjQRcuoC&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "A Leg to Stand On is both an account of Sacks’ ordeal and subsequent recovery, and an exploration of the ways in which mind and body are inextricably linked."
        }
      },
      {
        "kind": "books#volume",
        "id": "_H12DwAAQBAJ",
        "etag": "3Hj74DM6TYc",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/_H12DwAAQBAJ",
        "volumeInfo": {
          "title": "Everything in Its Place",
          "subtitle": "First Loves and Last Tales",
          "authors": [
            "Oliver Sacks"
          ],
          "publisher": "Pan Macmillan",
          "publishedDate": "2019-05-02",
          "description": "From the bestselling author of On Gratitude and On the Move. In this spirited volume, Oliver Sacks examines the many passions of his own life – both as a doctor engaged with the central questions of human existence, and as a polymath conversant in all the sciences. Why do humans need gardens? How, and when, does a physician tell his patient she has Alzheimer's? What is social media doing to our brains? In several of the compassionate case histories collected here, Sacks considers for the first time the enigmas of depression, psychosis, and schizophrenia, and in others he returns to conditions that have long fascinated him: Tourette’s syndrome, ageing, dementia, and hallucinations. In counterpoint to these elegant investigations of what makes us human, this volume also includes pieces that celebrate Sacks’s love of the natural world – and his last meditations on life in the twenty-first century. Everything in Its Place gives us an intimate portrait of a master writer and thinker at work.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781509821815"
            },
            {
              "type": "ISBN_10",
              "identifier": "1509821813"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "printType": "BOOK",
          "categories": [
            "Literary Collections"
          ],
          "averageRating": 4,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "1.3.3.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=_H12DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=_H12DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=_H12DwAAQBAJ&printsec=frontcover&dq=oliver+sacks&hl=&cd=3&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=_H12DwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=_H12DwAAQBAJ"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 1010.76,
            "currencyCode": "RUB"
          },
          "retailPrice": {
            "amount": 909.68,
            "currencyCode": "RUB"
          },
          "buyLink": "https://play.google.com/store/books/details?id=_H12DwAAQBAJ&rdid=book-_H12DwAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 1010760000,
                "currencyCode": "RUB"
              },
              "retailPrice": {
                "amountInMicros": 909680000,
                "currencyCode": "RUB"
              }
            }
          ]
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Everything_in_Its_Place-sample-epub.acsm?id=_H12DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=_H12DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "In this spirited volume, Oliver Sacks examines the many passions of his own life – both as a doctor engaged with the central questions of human existence, and as a polymath conversant in all the sciences. Why do humans need gardens?"
        }
      },
      {
        "kind": "books#volume",
        "id": "e7VuDwAAQBAJ",
        "etag": "xHcT3E7eTYU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/e7VuDwAAQBAJ",
        "volumeInfo": {
          "title": "And How Are You, Dr. Sacks?",
          "subtitle": "A Biographical Memoir of Oliver Sacks",
          "authors": [
            "Lawrence Weschler"
          ],
          "publisher": "Farrar, Straus and Giroux",
          "publishedDate": "2019-08-13",
          "description": "The untold story of Dr. Oliver Sacks, his own most singular patient \"[An] engrossing biographical memoir. This is Sacks at full blast: on endless ward rounds, observing his post-encephalitic patients . . . exulting over horseshoe crabs and chunks of Iceland spar.\" —Barbara Kiser, Nature The author Lawrence Weschler began spending time with Oliver Sacks in the early 1980s, when he set out to profile the neurologist for his own new employer, The New Yorker. Almost a decade earlier, Dr. Sacks had published his masterpiece Awakenings—the account of his long-dormant patients’ miraculous but troubling return to life in a Bronx hospital ward. But the book had hardly been an immediate success, and the rumpled clinician was still largely unknown. Over the ensuing four years, the two men worked closely together until, for wracking personal reasons, Sacks asked Weschler to abandon the profile, a request to which Weschler acceded. The two remained close friends, however, across the next thirty years and then, just as Sacks was dying, he urged Weschler to take up the project once again. This book is the result of that entreaty. Weschler sets Sacks’s brilliant table talk and extravagant personality in vivid relief, casting himself as a beanpole Sancho to Sacks’s capacious Quixote. We see Sacks rowing and ranting and caring deeply; composing the essays that would form The Man Who Mistook His Wife for a Hat; recalling his turbulent drug-fueled younger days; helping his patients and exhausting his friends; and waging intellectual war against a medical and scientific establishment that failed to address his greatest concern: the spontaneous specificity of the individual human soul. And all the while he is pouring out a stream of glorious, ribald, hilarious, and often profound conversation that establishes him as one of the great talkers of the age. Here is the definitive portrait of Sacks as our preeminent romantic scientist, a self-described “clinical ontologist” whose entire practice revolved around the single fundamental question he effectively asked each of his patients: How are you? Which is to say, How do you be? A question which Weschler, with this book, turns back on the good doctor himself.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9780374714949"
            },
            {
              "type": "ISBN_10",
              "identifier": "0374714940"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 400,
          "printType": "BOOK",
          "categories": [
            "Biography & Autobiography"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "1.6.6.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=e7VuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=e7VuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=e7VuDwAAQBAJ&printsec=frontcover&dq=oliver+sacks&hl=&cd=4&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=e7VuDwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=e7VuDwAAQBAJ"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 1119.27,
            "currencyCode": "RUB"
          },
          "retailPrice": {
            "amount": 1007.34,
            "currencyCode": "RUB"
          },
          "buyLink": "https://play.google.com/store/books/details?id=e7VuDwAAQBAJ&rdid=book-e7VuDwAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 1119270000,
                "currencyCode": "RUB"
              },
              "retailPrice": {
                "amountInMicros": 1007340000,
                "currencyCode": "RUB"
              }
            }
          ]
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/And_How_Are_You_Dr_Sacks-sample-epub.acsm?id=e7VuDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=e7VuDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This is Sacks at full blast: on endless ward rounds, observing his post-encephalitic patients . . . exulting over horseshoe crabs and chunks of Iceland spar.&quot; —Barbara Kiser, Nature The author Lawrence Weschler began spending time with ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "mW7CBgAAQBAJ",
        "etag": "sVz5RV7Fy+A",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/mW7CBgAAQBAJ",
        "volumeInfo": {
          "title": "On the Move",
          "subtitle": "A Life",
          "authors": [
            "Oliver Sacks"
          ],
          "publisher": "Pan Macmillan",
          "publishedDate": "2015-05-01",
          "description": "When Oliver Sacks was twelve years old, a perceptive schoolmaster wrote in his report: 'Sacks will go far, if he does not go too far'. It is now abundantly clear that Sacks has never stopped going. From its opening pages on his youthful obsession with motorcycles and speed, On the Move is infused with his restless energy. As he recounts his experiences as a young neurologist in the early 1960s, first in California and then in New York, where he discovered a long-forgotten illness in the back wards of a chronic hospital, as well as with a group of patients who would define his life, it becomes clear that Sacks's earnest desire for engagement has occasioned unexpected encounters and travels - sending him through bars and alleys, over oceans, and across continents. With unbridled honesty and humour, Sacks shows us that the same energy that drives his physical passions - bodybuilding, weightlifting, and swimming - also drives his cerebral passions. He writes about his love affairs, both romantic and intellectual, his guilt over leaving his family to come to America, his bond with his schizophrenic brother, and the writers and scientists - Thom Gunn, A. R. Luria, W. H. Auden, Gerald M. Edelman, Francis Crick - who influenced him. On the Move is the story of a brilliantly unconventional physician and writer - and of the man who has illuminated the many ways that the brain makes us human.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781447265450"
            },
            {
              "type": "ISBN_10",
              "identifier": "1447265459"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 256,
          "printType": "BOOK",
          "categories": [
            "Biography & Autobiography"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.12.11.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=mW7CBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=mW7CBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=mW7CBgAAQBAJ&printsec=frontcover&dq=oliver+sacks&hl=&cd=5&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=mW7CBgAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=mW7CBgAAQBAJ"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 1010.76,
            "currencyCode": "RUB"
          },
          "retailPrice": {
            "amount": 909.68,
            "currencyCode": "RUB"
          },
          "buyLink": "https://play.google.com/store/books/details?id=mW7CBgAAQBAJ&rdid=book-mW7CBgAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 1010760000,
                "currencyCode": "RUB"
              },
              "retailPrice": {
                "amountInMicros": 909680000,
                "currencyCode": "RUB"
              }
            }
          ]
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/On_the_Move-sample-epub.acsm?id=mW7CBgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=mW7CBgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "On the Move is the story of a brilliantly unconventional physician and writer – and of the man who has illuminated the many ways that the brain makes us human."
        }
      }
    ]);
  }
}