import { Injectable } from '@angular/core';
import {Label} from './label';
declare var dymo: any;

@Injectable({
  providedIn: 'root'
})
export class PrintService {
	constructor() { }


	printLabel(myLabel:Label,copies):void{
		// Create and Setup Label Framework
		let label = dymo.label.framework.openLabelXml(myLabel.xml);
		let labelSetBuilder = new dymo.label.framework.LabelSetBuilder();

		let record = labelSetBuilder.addRecord();

		// Modify Text
		for(let item in myLabel.links){
			record.setText(item,myLabel.links[item]);
		}


		// Print
		try{
			let printers = dymo.label.framework.getPrinters();
			if(printers.length == 0)
				throw "No DYMO printers are installed, Install DYMO Printers.";

			let printerName = "";
			for(var i = 0; i < printers.length;i++){
				let printer = printers[i];
				if(printer.printerType == "LabelWriterPrinter"){
					printerName = printer.name;
					break;
				}
			}
			if(printerName == "")
				throw "No LabelWriter printers found. Install LabelWriter printer.";

			for(var i = 0; i<copies;i++){
				label.print(printerName,"",labelSetBuilder);
			}

		}catch(e){
			alert(e.message || e);
		}


	}
}
