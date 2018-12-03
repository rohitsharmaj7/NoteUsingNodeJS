console.log("Starting app.");

const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

const argv=yargs.argv;
var command=process.argv[2];
console.log('Command:',command);
console.log('Process:',process.argv);
console.log('ProcessY:',yargs.argv);


if(command === 'add')
{
	var note=notes.addNote(argv.title,argv.body);
	if(note)
	{
		console.log("Added successfully");
	}
	else{
		console.log("Unsuccessfull");
	}
}
else if(command==='list')
{
	var allNotes=notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note)=>console.log(note));
}
else if(command==='read')
{
	var note=notes.getNote(argv.title);
	if(note)
	{
          console.log('note found');
          console.log("---");
          console.log(`Title:${note.title}`);
          console.log(`Body:${note.body}`);
	}
	else
	{
		console.log("note not found");
	}
}
else if(command==='remove')
{
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}
else
{
	console.log('command not recognised');
}