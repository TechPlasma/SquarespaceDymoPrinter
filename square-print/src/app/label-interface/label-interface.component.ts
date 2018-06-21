import { Component, OnInit } from '@angular/core';
declare var dymo: any;

@Component({
  selector: 'app-label-interface',
  templateUrl: './label-interface.component.html',
  styleUrls: ['./label-interface.component.css']
})
export class LabelInterfaceComponent implements OnInit {
	handleSelection(event) {
	    if (event.option.selected) {
	      event.source.deselectAll();
	      event.option._setSelected(true);
	    }
	}

	listOfLabels = [];

	value = "";

	testItem = "";

	labelName = "";
	labelCode = "";
	copies = 1

	labelXml: string;
	label:any;
	labelSetBuilder:any;
	record:any;

	addLabel(){
		let newLabel = {
			name: this.labelName,
			XML: this.labelCode
		}

		this.listOfLabels.push(newLabel);
	}

	newPrintLabel(){
		//Get label
		
		//Get Number of copies to Print
		
		//Build list of Entries
		
		//Print
		try{
			// select printer to print on
	        // for simplicity sake just use the first LabelWriter printer
	        var printers = dymo.label.framework.getPrinters();
	        if (printers.length == 0)
	            throw "No DYMO printers are installed. Install DYMO printers.";

	        var printerName = "";
	        for (var i = 0; i < printers.length; ++i)
	        {
	            var printer = printers[i];
	            if (printer.printerType == "LabelWriterPrinter")
	            {
	                printerName = printer.name;
	                break;
	            }
	        }
	        if (printerName == "")
	            throw "No LabelWriter printers found. Install LabelWriter printer";
	        for(i=0;i<this.copies;i++){
	        	this.label.print(printerName, "",this.labelSetBuilder);
	        }
	        
		}catch(e){
			alert(e.message || e);
		}

	}

	printLabel(){
		console.log(this.labelName);
		console.log(this.labelCode);
		let myXML = this.labelCode;
		console.log("got here");

		this.label = dymo.label.framework.openLabelXml(myXML);
		this.labelSetBuilder = new dymo.label.framework.LabelSetBuilder();

		this.record = this.labelSetBuilder.addRecord();
		this.record.setText("Text",this.labelName);

		try{
			// select printer to print on
	        // for simplicity sake just use the first LabelWriter printer
	        var printers = dymo.label.framework.getPrinters();
	        if (printers.length == 0)
	            throw "No DYMO printers are installed. Install DYMO printers.";

	        var printerName = "";
	        for (var i = 0; i < printers.length; ++i)
	        {
	            var printer = printers[i];
	            if (printer.printerType == "LabelWriterPrinter")
	            {
	                printerName = printer.name;
	                break;
	            }
	        }
	        if (printerName == "")
	            throw "No LabelWriter printers found. Install LabelWriter printer";

	        this.label.print(printerName, "",this.labelSetBuilder);
		}catch(e){
			alert(e.message || e);
		}


		

}

    






  constructor() { }

  ngOnInit() {
  	this.labelXml = '<?xml version="1.0" encoding="utf-8"?>\
    <DieCutLabel Version="8.0" Units="twips">\
        <PaperOrientation>Landscape</PaperOrientation>\
        <Id>Address</Id>\
        <PaperName>30252 Address</PaperName>\
        <DrawCommands/>\
        <ObjectInfo>\
            <TextObject>\
                <Name>Text</Name>\
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                <LinkedObjectName></LinkedObjectName>\
                <Rotation>Rotation0</Rotation>\
                <IsMirrored>False</IsMirrored>\
                <IsVariable>True</IsVariable>\
                <HorizontalAlignment>Left</HorizontalAlignment>\
                <VerticalAlignment>Middle</VerticalAlignment>\
                <TextFitMode>ShrinkToFit</TextFitMode>\
                <UseFullFontHeight>True</UseFullFontHeight>\
                <Verticalized>False</Verticalized>\
                <StyledText/>\
            </TextObject>\
            <Bounds X="332" Y="150" Width="4455" Height="1260" />\
        </ObjectInfo>\
    </DieCutLabel>';
  }

}
