
import { Component, OnInit } from '@angular/core';
import { SchoolClub } from 'src/app/models/sclclub';
import { UniClub } from 'src/app/models/uniclub';

import { ClubService } from '../../services/club.service';


@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.css']
})
export class PointTableComponent implements OnInit {

  public schoolClubs = [];
  public uniClubs = [];
  
  

  constructor(private _clubService: ClubService){ }
  

  ngOnInit(): void {
    // setting up the loaded data to array and sort them
    this._clubService.getSchoolClubs()
          .subscribe(data => {
            data.sort((a,b) => {
              if(a.points == b.points){          // checks whether points are same
                if(a.goalScored < b.goalScored){  // if same compare with goal scored
                  return 1;
                }else{
                  return -1;
                }
              }else{
                if(a.points < b.points){  // if not same then compare with points
                  return 1;
                }else{
                  return -1;
                }
              }
            });
            this.schoolClubs = data;
          });

    this._clubService.getUniClubs()
    // same for uni clubs
          .subscribe(data => {
            data.sort((a,b) =>{
              if(a.points == b.points){
                if(a.goalScored < b.goalScored){
                  return 1;
                }else{
                  return -1;
                }
              }else{
                if(a.points < b.points){
                  return 1;
                }else{
                  return -1;
                }
              }
            });
            this.uniClubs = data;
          });  
          
   
  }



  getSortSclClubs(value){
  
    // on user select sort the clubs 

    if(value == "Points"){    // for points
      this.schoolClubs.sort((a,b) => {
        if( a.points == b.points){
          if ( a.goalScored < b.goalScored){
            return 1;
          }else{
            return -1;
          }
        }else{
          if( a.points < b.points){
            return 1;
          }else{
            return -1;
          }
        }
      });
  }else if(value == "Goals"){
      this.schoolClubs.sort((c,d) => c.goalScored < d.goalScored ? 1 : -1); // for goals
    }else if(value == "Wins"){
      this.schoolClubs.sort((x,y) => x.numOfWins < y.numOfWins ? 1 : -1); // for wins
    }

    
  }

  getSortUniClubs(value){
    // same for uni clubs
      if(value == "Points"){
      this.uniClubs.sort((a,b) => {
        if( a.points == b.points){
          if ( a.goalScored < b.goalScored){
            return 1;
          }else{
            return -1;
          }
        }else{
          if( a.points < b.points){
            return 1;
          }else{
            return -1;
          }
        }
      });
  }else if(value == "Goals"){
      this.uniClubs.sort((a,b) => a.goalScored < b.goalScored ? 1 : -1);
    }else if(value == "Wins"){
      this.uniClubs.sort((a,b) => a.numOfWins < b.numOfWins ? 1 : -1);
    }

    
  }

 

}
