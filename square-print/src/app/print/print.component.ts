import { Component, OnInit } from '@angular/core';
import { LabelService } from '../label.service';
import { PrintService } from '../print.service';
import { Label } from '../label';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

	selectedLabels;
	listOfLabels;
	copies = 1;

	subtractCopies(){
		this.copies -= 1;
		if(this.copies<0){
			this.copies = 0;
		}
	}

	print(){
		console.log("List of Labels")
		console.log(this.listOfLabels);
		console.log("Selected Labels")
		console.log(this.selectedLabels);
		if(this.selectedLabels.length>1){
			alert("Please only select One Label at a time");
		}else if(this.selectedLabels.length == 0){

			alert("You must choose a Label to Print It. ["+this.selectedLabels+"]");
		}else{
			//this.printService.printLabel(this.selectedLabels[0],copies);
		}
	}


	constructor(private labelService: LabelService) {
		this.listOfLabels = labelService.getLabels();
		this.selectedLabels = labelService.getSelected();
		//this.selectedLabels = this.listOfLabels;
	}

	ngOnInit() {
	}

}
