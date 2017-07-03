// If constructor() parameters share the exact same name as class properties, TypeScript will automatically assign them to a public property of the same name and type.
class Task {
  done: boolean = false;

   constructor(public description: string, public priority: string ){}

   markDone() {
     this.done = true;
   }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium' ));
tasks.push(new Task('Buy chocolate.', 'Low' ));
tasks.push(new Task('Do laundry.', 'High' ));

tasks[0].markDone();

//TypeScript for loop syntx
for(var task of tasks ) {
  console.log(tasks );
};
