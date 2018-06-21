import { Component, OnInit } from '@angular/core';
import { LabelService } from '../label.service';
import { Label } from '../label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
	handleSelection(event) {
	    if (event.option.selected) {
	      event.source.deselectAll();
	      event.option._setSelected(true);
	      event.source.selectedOptions._selection = [event.option];
	      //console.log(event.source);
	      //console.log(event.option);
	      //event.source.selectedOptions=[event.option];
	      
	    }
	}

	listOfLabels;
	selectedLabels:Label[];
	selectedOptions;

	updateSelectModel(){
		console.log("Updating Selection");
		for(let i in this.selectedLabels){
			this.selectedLabels.pop();
		}
		for(let i in this.selectedOptions){
			let sLabel = this.selectedOptions[i];
			this.selectedLabels.push(sLabel);
		}
	}

	addLabel(){
		let newLabel = new Label;
		newLabel.name = "Demo Name";
		newLabel.xml = "Placeholder XML";
		newLabel.links = [];

		this.labelService.labelEditor(false,newLabel);

		this.listOfLabels.push(newLabel);		
	}

	editLabel(){

		console.log("List of Labels")
		console.log(this.listOfLabels);
		console.log("Selected Labels")
		console.log(this.selectedLabels);

		if(this.selectedLabels.length>1){
			alert("Please only select One Label at a time");
		}else if(this.selectedLabels.length == 0){
			alert("You must choose a Label to Edit It.")
		}else{
			this.labelService.labelEditor(true,this.selectedLabels[0]);
		}
		
		


	}

	deleteLabel(){
		for (let i in this.selectedLabels){
			this.listOfLabels = this.remove(this.listOfLabels,this.selectedLabels[i]);
		}
		//console.log(this.listOfLabels);
	}

	remove(array,element){
		return array.filter(e => e !== element);
	}

	constructor(private labelService: LabelService) {
		this.listOfLabels = labelService.getLabels();
		this.selectedLabels = labelService.getSelected();
		//this.selectedLabels = this.listOfLabels;
	}

	ngOnInit() {
	}

}
