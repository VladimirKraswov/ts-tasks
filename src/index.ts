import { basicTypesTask } from './01-basic-types';
import { interfacesTask } from './02-interfaces';
import { arraysTuplesTask } from './03-arrays-tuples';
import { functionsTask } from './04-functions';
import { unionIntersectionTask } from './05-union-intersection';
import { enumsTask } from './06-enums';
import { utilityTypesTask } from './07-utility-types';
import { genericsTask } from './08-generics';
import { omitPickTask } from './09-omit-pick';
import { classesTask } from './10-classes';

function runTasks() {
  basicTypesTask();
  interfacesTask();
  arraysTuplesTask();
  functionsTask();
  unionIntersectionTask();
  enumsTask();
  utilityTypesTask();
  genericsTask();
  omitPickTask();
  classesTask();
}

runTasks();
