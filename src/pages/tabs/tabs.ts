import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BowlingPage } from '../bowling/bowling';
import { IcePage } from '../ice/ice';
import { CinemaPage } from '../cinema/cinema';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BowlingPage;
  tab3Root = CinemaPage;
  tab4Root = IcePage;
  tab5Root = ContactPage;

  constructor() {

  }
}
