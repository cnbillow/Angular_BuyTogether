import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface TabItem {
  title:string;
  icon:string;
  link:string;
  selectedIcon:string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  @Output() tabSelected = new EventEmitter<TabItem>();
  constructor() { }

  ngOnInit() {
  }


  tabItems: TabItem[] = [
    {
      title: '首页',
      icon: '/assets/tabs/home.png',
      link: 'home',
      selectedIcon: '/assets/tabs/home_selected.png'
    },
    {
      title: '推荐',
      icon: '/assets/tabs/recommend.png',
      link: 'recommend',
      selectedIcon: '/assets/tabs/recommend_selected.png'
    },
    {
      title: '分类',
      icon: '/assets/tabs/category.png',
      link: 'category',
      selectedIcon: '/assets/tabs/category_selected.png'
    },
    {
      title: '聊天',
      icon: '/assets/tabs/chat.png',
      link: 'chat',
      selectedIcon: '/assets/tabs/chat_selected.png'
    },
    {
      title: '个人中心',
      icon: '/assets/tabs/my.png',
      link: 'my',
      selectedIcon: '/assets/tabs/my_selected.png'
    }
  ];

  @Input() selectedIndex = 0;
  toggleSelected(idx: number){
    this.selectedIndex = idx;   //对应idx
    this.tabSelected.emit(this.tabItems[this.selectedIndex]);  //发射事件到外部
  }

}
