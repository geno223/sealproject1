# Holidays
### By Eugenio Jimenez

DEPLOYED SITE: [Click Here](https://github.com/geno223/sealproject1)
## Description on Project

A paragraph discussing the idea of your project, the API you are using and desired user experience.

> I am creating a Holiday calender that generates all of the holdays in 2024 using 'https://calendarific.com/api/v2/holidays' api. Users can see all of the holdays in the upcoming year.

## Details about the API

Give me a brief description of the API you are using and how you plan on using it. Does it use some sort of authentication like an APIkey. List some of the urls are using below.

 'https://calendarific.com/api/v2/holidays?&api_key=muC7CCeq3O6a65ciSGxf3Nion28NaItp&country=US&year=2024' : This returns a json array with all the different holidays in the US in the year 2024.
This api requires an api key.
Sample Fetch/Ajax called:
```js
const url = 'https://calendarific.com/api/v2/holidays?&api_key=muC7CCeq3O6a65ciSGxf3Nion28NaItp&country=US&year=2024&type=national'
const api_key = "muC7CCeq3O6a65ciSGxf3Nion28NaItp"
let year = 2024
let country = "US"
let type = 'national'

fetch((url))
.then((res) => res.json())
.then((data) => console.log(data))
```
The Data I get back:
```json
// 20231202154645
// https://calendarific.com/api/v2/holidays?&api_key=muC7CCeq3O6a65ciSGxf3Nion28NaItp&country=US&year=2024&type=national

{
  "meta": {
    "code": 200
  },
  "response": {
    "holidays": [
      {
        "name": "New Year's Day",
        "description": "New Year's Day is the first day of the Gregorian calendar, which is widely used in many countries such as the USA.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-01-01",
          "datetime": {
            "year": 2024,
            "month": 1,
            "day": 1
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/new-year-day",
        "urlid": "us/new-year-day",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Martin Luther King Jr. Day",
        "description": "Martin Luther King Day marks the anniversary of the date of birth of the influential American civil right leader of the same name.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-01-15",
          "datetime": {
            "year": 2024,
            "month": 1,
            "day": 15
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/martin-luther-king-day",
        "urlid": "us/martin-luther-king-day",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Presidents' Day",
        "description": "Washington's Birthday, or Presidents' Day, honors the life and work of the first president of the United States, George Washington.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-02-19",
          "datetime": {
            "year": 2024,
            "month": 2,
            "day": 19
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/washington-birthday",
        "urlid": "us/washington-birthday",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Memorial Day",
        "description": "Memorial Day commemorates all Americans who have died in military service for the United States.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-05-27",
          "datetime": {
            "year": 2024,
            "month": 5,
            "day": 27
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/memorial-day",
        "urlid": "us/memorial-day",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Juneteenth",
        "description": "Juneteenth, also known as Freedom Day and Emancipation Day, is a holiday or observance in many US states to celebrate the anniversary of the abolition of slavery in Texas on June 19, 1865.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-06-19",
          "datetime": {
            "year": 2024,
            "month": 6,
            "day": 19
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/juneteenth",
        "urlid": "us/juneteenth",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Independence Day",
        "description": "On Independence Day, Americans celebrate the anniversary of publication of the Declaration of Independence from Great Britain in 1776.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-07-04",
          "datetime": {
            "year": 2024,
            "month": 7,
            "day": 4
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/independence-day",
        "urlid": "us/independence-day",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Labor Day",
        "description": "Labor Day is a federal holiday in the United States. It gives workers a day of rest and it celebrates their contribution to the American economy.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-09-02",
          "datetime": {
            "year": 2024,
            "month": 9,
            "day": 2
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/labor-day",
        "urlid": "us/labor-day",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Columbus Day",
        "description": "Columbus Day celebrates 15th century explorer Christopher Columbus's arrival in America in 1492.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-10-14",
          "datetime": {
            "year": 2024,
            "month": 10,
            "day": 14
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/columbus-day",
        "urlid": "us/columbus-day",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Veterans Day",
        "description": "Veterans Day in the USA is a holiday to honor all who have served in the United States Military Services.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-11-11",
          "datetime": {
            "year": 2024,
            "month": 11,
            "day": 11
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/veterans-day",
        "urlid": "us/veterans-day",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Thanksgiving Day",
        "description": "Thanksgiving Day in the United States is traditionally a holiday to give thanks for the food collected at the end of the harvest season.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-11-28",
          "datetime": {
            "year": 2024,
            "month": 11,
            "day": 28
          }
        },
        "type": [
          "National holiday"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/thanksgiving-day",
        "urlid": "us/thanksgiving-day",
        "locations": "All",
        "states": "All"
      },
      {
        "name": "Christmas Day",
        "description": "Christmas Day celebrates Jesus Christ's birth.",
        "country": {
          "id": "us",
          "name": "United States"
        },
        "date": {
          "iso": "2024-12-25",
          "datetime": {
            "year": 2024,
            "month": 12,
            "day": 25
          }
        },
        "type": [
          "National holiday",
          "Christian"
        ],
        "primary_type": "Federal Holiday",
        "canonical_url": "https://calendarific.com/holiday/us/christmas-day",
        "urlid": "us/christmas-day",
        "locations": "All",
        "states": "All"
      }
    ]
  }
}
```

## Mockup

My site/applicaton will allow users to input their "Fav Holiday" then generate the date of that holiday and an appropriately themed holiday picture.


#### Mobile View (https://imgur.com/Ag9VjBr)

###[My Mobile View] (https://imgur.com/Ag9VjBr)

## Schedule of Work
|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | |
| Sun | Build fetch of data in JS file ||
| Mon | Render data from API on screen ||
| Tues| Build form for user to interact with ||
| Wed | wrap up functionality ||
|Thurs| mobile layout styling ||
| Fri | Desktop layout styling ||
| Sat | Present Project ||