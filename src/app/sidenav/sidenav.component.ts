import { Component, Output , EventEmitter, OnInit, HostListener} from '@angular/core';
import { navbarData } from './nav-data';
import {animate, animation, keyframes, style, transition, trigger} from '@angular/animations'
import { Router } from '@angular/router';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'], // Utilisez styleUrls au lieu de styleUrl
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
        style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
        style({opacity: 0})
        )
      ])
    ])
  ]
})

export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }
  
  showChatDiv(): boolean {
    const isChatRoute = this.router.url.includes('chat');
    return isChatRoute;
  }
  showKnowledgeDiv(): boolean {
    const isknowledgeRoute = this.router.url.includes('knowledge');
    return isknowledgeRoute;
  }




  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;


  navData = navbarData;

  @HostListener('window:resize', ['$event'])
 
  ngOnInit(): void {
  
    this.collapsed = true;
  }


}
