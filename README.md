# Hopes and Dreams

An app for a list of whatever -- your hopes, your dreams, everything inbetween.

- Live app: [Hopes and Dreams](https://lisamsmith100.github.io/hnd-client/)
- Live API: [HND API](https://hnd-api.herokuapp.com/)
- API repo on GitHub: [lisamsmith100/hnd-api](https://github.com/lisamsmith100/hnd-api)

![Screenshot of Hopes and Dreams](hnd-client/HopesAndDreamsScreenShot.png)

## About Hopes and Dreams

[Hopes And Dreams](https://lisamsmith100.github.io/hnd-client/) lets users generate a list of any type of item.  The list can be created from the browser, updated, and deleted.

Hopes and Dreams is built using HTML, Javascript, CSS, Handlebars and relies on a Rails API/Postgres to persist data. Code for that API can be found at [lisamsmith100 api](https://github.com/lisamsmith100/hnd-api).

## Project Planning

[hnd-client/wdi-proj2-plan.xlsx]

### User Stories

- (COMPLETED) I want to be able to generate random patterns w/o logging in
- (COMPLETED) I want to be able to upload multiple photos of each quilt that I make
- I want to be able to sort the project gallery by quilt size, block size, and # of colors
- I want to view a pattern that includes the following: block counts for each type/color, fabric amounts for each color, and basic instructions
- (COMPLETED) The user will only be able to log in, log out upon first navigating to the site but after signing in, will be able to sign out or change password or use the site functionality once signed-in.
- (COMPLETED)The user will be able to create entries for their "own" list of hopes and dreams.
- (PARTIALLY COMPLETED) The user will be able to view all entries or one entry in their "own" list of hopes and dreams.
- (COMPLETED) The user will be able to update one entry at a time from their "own" list of hopes and dreams.
- The user will be able to check off entries and retrieve completed entries from their "own" list of hopes and dreams.
- (PARTIALLY COMPLETED) The user will be able to delete entries and retrieve the deleted entries from their "own" list of hopes and dreams.

The user story and the partial of other user stories that were not completed, were bonuses.

### Wireframes
- [Original Wirefram](http://imgur.com/a/G4Gr3)
  Due to time constraints, I was unable to spend the time needed to conform to the original appearance/shape in the UI.

### Data Model

- [ERD](http://imgur.com/8BPw6qv)
- For full details, see the api repo [lisamsmith100/hnd-api](https://github.com/lisamsmith100/hnd-api)
- For preliminary project notes, see the Full-Stack Project Practice repo [https://github.com/ga-wdi-boston/full-stack-project-practice/pull/48/commits/aa529ed455aeaf8d5819d7c897729eaa57fb5b75?short_path=0394c7c#diff-0394c7cf5380b3a7437e6f8e1226e20a]

## Development Process

I started thinking about the process from project 1 (game project), as well as the repeated routing in class for building apis (scaffold, model, database creation).

I created a spreadsheet listing high level Tasks and then broken them down into smaller tasks.

Once I had a list of tasks, I looked at them each day, prioritized, and marked progress.  The spreadsheet is saved in this repo here [hnd-client/wdi-proj2-plan.xlsx].

Based on advice from consultants, I decided to start building the API.  I reviewed class notes, solution branches, and diagnostics for ideas, as well as reviewing homework material/resources.

I kept problems and tasks to the smallest possible in order to fully tackle each problem at hand.  I ran into an issue while construction the create entry function.  The curl requests were working correctly. The issue was the forms in html used name=entry while Rails expected 'entries.'  This was a helpful discovery as it solved issues for update and delete.

I kept the html work to a minimum, using code from authentication and handlebars from our lecture.  Given more time, I would have incorporated use of modals to handle the form input.

## Dependencies

Install build dependencies with `npm install`.

-   [Webpack](https://webpack.github.io/)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com/)

## Next Steps

- Build functionality to add buttons at end of each entry for delete and update.
- Build functionality to update the list without having to click button to show all entries.
- Improve UI appearance with making the headers/legends hyperlinks, hiding buttons
  and text boxes, only to display when clicking on the hyperlinks.
- Improve UI appearance with borders, boxes.
- Make use of additional attributes of the table.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3.
