import { Injectable } from '@angular/core';
import { Label } from './label';

import { EditLabelComponent } from "./edit-label/edit-label.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

	constructor(public dialog: MatDialog) { }

	LABELS: Label[] = [];
	SELECTEDLABELS: Label[] = [];

	labelEditor(edit:boolean,thislabel:Label){
		let newLabel;

		let dialogRef = this.dialog.open(EditLabelComponent, {
			width:'auto',
			data: { edit:edit, oldlabel:thislabel}
		});

		dialogRef.afterClosed().subscribe(result =>{
			//console.log('The Dialog was Closed');
			newLabel = result;
		})

		return newLabel;
	}



	getLabels(): Label[]{
		return this.LABELS;
	}

	getSelected(): Label[]{
		return this.SELECTEDLABELS;
	}



	saveLabels(){

	}

	loadLabels(){
		
	}
}
