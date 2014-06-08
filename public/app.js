 

//Define some sample data 
var aData = getFlights();

//Create an instance of the table control
var oTable = new sap.ui.table.Table({
    title: "Table Example",
    visibleRowCount: 7,
    firstVisibleRow: 3,
    selectionMode: sap.ui.table.SelectionMode.Single,
    toolbar: new sap.ui.commons.Toolbar({items: [ 
        new sap.ui.commons.Button({text: "Button in the Toolbar", press: function() { alert("Button pressed!"); }})
    ]}),
    extension: [
        new sap.ui.commons.Button({text: "Button in the Extension Area", press: function() { alert("Button pressed!"); }})
    ]
});

//Define the columns and the control templates to be used
var oColumn = new sap.ui.table.Column({
    label: new sap.ui.commons.Label({text: "Last Name"}),
    template: new sap.ui.commons.TextView().bindProperty("text", "lastName"),
    sortProperty: "lastName",
    filterProperty: "lastName",
    width: "200px"
});
var oCustomMenu = new sap.ui.commons.Menu();
oCustomMenu.addItem(new sap.ui.commons.MenuItem({
    text:"Custom Menu",
    select:function() {
        alert("Custom Menu");
    }
}));
oColumn.setMenu(oCustomMenu);
oTable.addColumn(oColumn);
oTable.addColumn(new sap.ui.table.Column({
    label: new sap.ui.commons.Label({text: "First Name"}),
    template: new sap.ui.commons.TextField().bindProperty("value", "name"),
    sortProperty: "name",
    filterProperty: "name",
    width: "100px"
}));
oTable.addColumn(new sap.ui.table.Column({
    label: new sap.ui.commons.Label({text: "Checked"}),
    template: new sap.ui.commons.CheckBox().bindProperty("checked", "checked"),
    sortProperty: "checked",
    filterProperty: "checked",
    width: "75px",
    hAlign: "Center"
}));
oTable.addColumn(new sap.ui.table.Column({
    label: new sap.ui.commons.Label({text: "Web Site"}),
    template: new sap.ui.commons.Link().bindProperty("text", "linkText").bindProperty("href", "href"),
    sortProperty: "linkText",
    filterProperty: "linkText"
}));
oTable.addColumn(new sap.ui.table.Column({
    label: new sap.ui.commons.Label({text: "Image"}),
    template: new sap.ui.commons.Image().bindProperty("src", "src"),
    width: "75px",
    hAlign: "Center"
}));
oTable.addColumn(new sap.ui.table.Column({
    label: new sap.ui.commons.Label({text: "Gender"}),
    template: new sap.ui.commons.ComboBox({items: [
        new sap.ui.core.ListItem({text: "female"}),
        new sap.ui.core.ListItem({text: "male"})
    ]}).bindProperty("value","gender"),
    sortProperty: "gender",
    filterProperty: "gender"
}));
oTable.addColumn(new sap.ui.table.Column({
    label: new sap.ui.commons.Label({text: "Rating"}),
    template: new sap.ui.commons.RatingIndicator().bindProperty("value", "rating"),
    sortProperty: "rating",
    filterProperty: "rating"
}));

//Create a model and bind the table rows to this model
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
oTable.setModel(oModel);
oTable.bindRows("/modelData");

//Initially sort the table
oTable.sort(oTable.getColumns()[0]);

//Bring the table onto the UI 
oTable.placeAt("sample1");
