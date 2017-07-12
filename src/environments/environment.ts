// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDxI4BqrvUFDDZ26yO-GrY91JoRwrgHIe0',
    authDomain: 'gdg-ar.firebaseapp.com',
    databaseURL: 'https://gdg-ar.firebaseio.com',
    projectId: 'gdg-ar',
    storageBucket: 'gdg-ar.appspot.com',
    messagingSenderId: '648005065513'
  },
  EVENTBRITE_API: "https://eventbrite-api.now.sh/",
  MEETUP_API: "https://meetup-api.now.sh/",
  SPREADSHEET_API: "https://spreadsheet-api.now.sh/"
};
