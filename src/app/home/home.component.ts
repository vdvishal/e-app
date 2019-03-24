import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  ]
})
export class HomeComponent implements OnInit {
  public group = [];
  public groupChunk = [];
  public subGroup: Number = 3;
  showPost: boolean = false;
  displayData = [];
  counter: number = 1;

  constructor() { }

  ngOnInit() {

    // this.cardF(),

      $("#sidebarToggle").click(function () {
        $("#mySidenav").width("20vw");
        $("#mySidenav").animate({ opacity: 1 }, 200)
      })

    $("#sidebarBack").click(function () {
      $("#mySidenav").width("0px")
      $(".main").animate({ opacity: 1 }, 200)
    })

    $("#dropdown").hover(function () {
      $("#menu").animate({ opacity: 1 }, 500)
    }, function () {
      $("#menu").animate({ opacity: 0, display: "none" }, 500)
    })

    $("#menu li").hover(function () {
      $("#menu li").css({
        visibility: 'visible',
        transform: 'scaleX(' + 1 + ')'
      })
    })

    $("#dropdown2").hover(function () {
      $("#menu2").animate({ opacity: 1 }, 500)
    }, function () {
      $("#menu2").animate({ opacity: 0, display: "none" }, 500)
    })

    $("#menu2 li").hover(function () {
      $("#menu2 li").css({
        visibility: 'visible',
        transform: 'scaleX(' + 1 + ')'
      })
    })
  }

  public featuredLink = [
    {
      link:"../../assets/art-boutique-clothes-920735.jpg",
      title:"Title",
      price:"123",
      info:"A brief Info"
    },
    {
      link:"../../assets/coat-cold-female-54206.jpg",
      title:"Title",
      price:"1",
      info:"A brief Info"
    },
    {
      link:"../../assets/trekking-hiking-group-alpine-53214.jpeg",
      title:"Title",
      price:"2",
      info:"A brief Info"
    }
  ]
  slideConfig = {
    "slidesToShow":1,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    speed:1500,
    fade:true,
    accessibility: true,
};  

  public card = [
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    },
    {
      cardTitle: "hello",
      cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardLink: "../../assets/trekking-hiking-group-alpine-53214.jpeg"
    }
  ]
  slideConfig2 = {
    "slidesToShow":3,
    "slidesToScroll": 1,
    "infinite": true,
    cssEase:'ease',
    variableWidth: true,
    centerMode:true
}; 
  // public cardF: any = () => {
  //   for (let i = 0; i < this.card.length; i++) {
  //     if (i >= this.card.length - 1) {
  //       this.chunkArr();
  //     } else {
  //       this.group.push(this.card[i])
  //     }
  //   }
  // }

  // public chunkArr = () => {
  //   let j = 0;
  //   for (let i = 0; j < this.group.length; i++) {
  //     j = i * 3;
  //     if (this.group.slice(j, j + 3).length != 0) {
  //       this.groupChunk.push(this.group.slice(j, j + 3))
  //     }
  //   }
  //   this.displayData.push(this.groupChunk[0])
  // }

  // public getPostList = () => {
  //   if (this.counter < this.group.length) {
  //     for (let i = this.counter; i < this.counter + 1; i++) {
  //       this.displayData.push(this.groupChunk[i])
  //     }
  //     this.counter += 1
  //   }
  //   else {

  //   }
  // }
}
