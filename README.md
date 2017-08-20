# Ezhil Chit App

## Table of Contents

1. [Application Summary](#Application Summary)
2. [Blueprints & Code Packages](#Blueprints & Code Pacakages)
4. [Installation](#Installation)
5. [Configuration](#Configuration)
	* [Authentication](#Authentication)
	* [Content Management System Configuration](#ContentManagement System Configuration)
	* [Heroku URLs](#Heroku Configuration)
	* [Heroku CI Configuration](#Heroku CI Confogiration)
	* [Cookie Banner Details](#Cookie Banner Details)
	* [Analytics](#Analytics)
	* [Active Directory](#Janrain Configuration)
	* [Janrain Configuration](#Janrain Configuration)
	* [Folder Structure](#Folder Structure)
4. [Additional Functionality](#Important Features)
5. [Testing](#Testing)
5. [Notes](#Notes)

## Application Summary

**Application Name:** Ezhil Chit

**Prefix (short name):** 

**Author:** Flux 21D Technologies

**Support Team:** Flux 21D Technlogies

**Therapy Area** 

**Service Now CI** 

**Application Description:** The application is a Financial related application for Chit funds.

**Country(s):** India

## Blueprint and Code Packages

**Blueprint:** Simple Website

	Development Language(s): Node.js, React.js
	Development Framework(s): 
	Development Add-Ons: Redis, PaperTrail, New Relic,  Postgres SQL
	Development Standards:  esLint
	Content Management System: Contentful
	Analytics:** Google Analytics
	Tag Management Tool: Google Tag Manager
	Customer Authentication: 

	Blueprint Deviations:  Heroku MLR Preview App as not required for the master version.

**Code Package(s):**

	CIRR_WEB_ACCELERATOR

## Installation:

1. Clone the repository by command 'git clone https://github.com/mdineshari/ezhilchit.git'

2. Install node in your local system, if not already installed.

3. Rename .env-sample file with .env

4. Update .env file with the desired environment variables.

5. Run the application by command 'npm start'

Addititonal steps needs to be updated further by developer.

## Configuration

* * *

#### SSO:

[Please see the 'Authentication' section of the Web Accelerator vx.xx ReadMe File](https://github.com/EliLillyCo/CIRR_WEB_ACCELERATOR/blob/master/README.md)

* * *
#### Content Management System Configuration:

**CMS:** Contentful

	ContentfulDevSpace: 
	ContentfulPrdSpace: 
* * *

### Heroku App URLs

	Heroku App Dev URL: https://ezchitapp.herokuapp.com/
	
	NOTE: MLR review app not included within master version

* * *

### Analytics

**Analytics Tool:**  Google Analytics

**Tag Management Tool:** Google Tag Manager

**Tag Manager Code Version (if applicable):**

	```javascript

**Power Users:**

	| Name  |  Contact Email |
	|---|---|
	|   |  |

* * *

### Active Directory Name

	Name:  ezhilchit
	Owner: Dinesh M


* * *

#### Folder Structure:

**-bin** :: This folder contains the file which starts the node server [DO NOT CHANGE THIS FILE]

**-lib** :: This folder contains the transpiled code from the src folder. [DO NOT CHANGE ANYTHING FROM THIS FOLDER]
**-src** :: This folder contains all the server controllers, server routes and front end files as well

**--controllers** :: This file contains all the server side controllers [TRY AND MAKE MODULAR CODE ]

**--public** :: This folder contains all the front end scss javascript and images

**---scss** :: SASS files

**---img** :: All Images

**---js** :: All Client-Side JavaScript files. Browserify is ran on these files so you are able to write modularcode

**--routes** :: All the Express Routes belong in this file

**-views** :: Contains all the handlebars views

* * *

## Additional Functionality

Application does not deliver any additional functionality beyond Osiris approved standard requirements.  Validation activities covered within change request.



## Testing

Application follows Osiris testing standards as documented by the Osiris Quality approach.  This includes the following:

**Heroku CI**

* esLint compliance
* Checkmarx security compliance

**Code Review**
* Code review by the Flux 21D Technologies

**Additional Testing**
No additional testing is required for this application




## Note(s):
