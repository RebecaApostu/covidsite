---
title: News Timeline
author: Rebeca Apostu
date: 2020-09-15
excerpt: Interactive timeline showcasing international news stories and the
  effect on cancellations of Airbnb bookings in Copenhagen.
hero: images/screenshot-2020-09-19-at-21.49.07.png
---
*This article is based on the MSc. Thesis: "Travel Disruption during COVID-19: An exploratory data analysis on Airbnb in Copenhagen", written by Rebeca Apostu and Aurora Beres. It explains the process of creating the timeline analysis and extracting subsequent findings.* 

The timeline is designed as an interactive prototype, displaying official news from five selected countries, booking cancellation peaks during the COVID-19 timeframe, and the Airbnb response to the events. It sets to explore the timeframe at a granular level, from the perspective of international news stories related to the event, and the potential effect on cancellations of Airbnb bookings in Copenhagen. 

The final version of the interactive timeline can be accessed via Github [here](https://rebecaapostu.github.io/CovidNewsTimeline/?fbclid=IwAR3jIaxB_DCTmtbCRvJIHqh4EmUSADMzEV6fdECJYXiQOPoNr-fOqQtsM1c). 

## Building the timeline

To reach the final timeline version, three main steps in adding the data were gradually followed: 

### 1. Collecting the news

Completed in a threefold process that entailed: 

* Geolocating the booking origin to identify the top locations guests travelling to Copenhagen booked from (United States, United Kingdom and Germany). The mapped guest's locations can be accessed in an interactive format through this [link](https://rebecaapostu.github.io/GuestMap/index.html). 

![](images/screenshot-2020-08-14-at-13.38.26.png "Booking Origin Location")

Apart from countries with highest booking numbers, local news related to Denmark were included on the timeline, alongside with news related to China, as the first country to experience signs of COVID-19. 

* Narrowing the search of official COVID-19 related news to two main aspects: ***travel restrictions*** and ***lockdown measures***.
* Collecting relevant pieces of official news, from sources with highest circulation. 

The selected pieces of news were then set on a timeline, in chronological order. 

![](images/screenshot-2020-08-22-at-22.41.43.png "News added to timeline")

### 2. Adding cancellations data

Next, the main bookings dataset has been sampled to only include the bookings marked as 'cancelled'. The data was then crossed with the official news data and set on the same timeline. News are displayed in a card view, while cancellations are formatted as bars.   

![](images/screenshot-2020-09-19-at-21.49.07.png "Timeline of News versus Cancellations")

### 3. Integrating Airbnb's response

The final version of the timeline was reached by adding the available online communication related to Airbnb's response to the COVID-19 outbreak.

![](images/screenshot-2020-09-20-at-17.08.15.png "Final Timeline Version")

## Findings

Combining the official news with the cancellations levels recorded per day on the timeline offered an overview on the unfolding of events that might have had an influence on the traveler's decision towards their booking.

While observing the first effects on bookings, it becomes noticeable that the cancellation levels occur over **four major peaks** during the COVID-19 timeframe. 

* ***14th of March (***contained in a cluster of daily cancellations from the 11th to the 17th of March)
* ***30th of March***
* **June 11th** 
* **July 9th**

### **News Stories Effect**

Analysing the time connections between the peaks in bookings cancellations and official news, **five potential factors** emerged as influential.  

The first observed unusual increase in cancellation levels starts with March 11th. The driving factors identified refer to **fear of travel over health concerns factor**, given the recent global pandemic declaration by WHO, and the US announcement on imposing a **travel restriction** from the EU. 

The news narrative surrounding the first peak on March 14th, reveals **Denmark's lockdown and borders closure announcement** on the day before as the main factor for the unprecedented level of cancellations. 

''*While it might seem evident that the lockdown of the destination country factor, followed by the borders closure might have such an impact, what is intriguing is the fast reaction time of the travellers in cancelling their bookings.*''

As for the other cancellation peaks, the 30th of March is explained through **external travel restrictions** - such as the recent announcement on Germany's lockdown and UK's official advise for their citizens to avoid any type of travel. 

Another factor seen as significant towards the third cancellation peak relates to the **Danish limited border opening** and the 6 nights stay requirement for travellers, announced for the 15th of June. It is seen to have influenced travellers that did not fit the criteria to cancel their travel booking.

Given that news were collected up until end June, no factors have been identified for the cancellations recorded on July 9th.

### **Airbnb's response**

The insights obtained through compelling Airbnb's response on the timeline referred to the strategies the platform took in adapting their extenuating circumstance policy to the COVID-19 context, allowing travellers to receive refunds on their booking if unable to travel.  

'*'Through the timeline analysis we observed that, in most cases, there is a 0-1 days interval of time between official news and the decision to cancel the booking. This allows platforms such as Airbnb little time to react and adapt, when a disruption of this scale occurs.''*

### **Summary**

The timeline narrative and the method of analysis are seen as to highlight a unique relationship between official news, booking behaviour and geographical locations. 

*''A similar method can be employed when studying large or isolated scale travel disruption, as it has the potential to contribute to understanding events at a granular level and extract meaningful insights.''*
