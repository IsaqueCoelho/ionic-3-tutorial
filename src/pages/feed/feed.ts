import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]    
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  public objeto_feed = {
    titulo:"Isaque Coelho",
    data: "Fevereiro 16, 2018",
    descricao: "Criando primeiro Post via Json",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public list_movie = new Array<any>();

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        this.list_movie = JSON.parse((data as any)._body).results;

        console.log();
      }, error => {
        console.log(error);
      }
    );
  }

}
