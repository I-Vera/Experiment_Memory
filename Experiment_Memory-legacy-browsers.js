/************************** 
 * Experiment_Memory Test *
 **************************/


// store info about the experiment session:
let expName = 'Experiment_Memory';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instr1RoutineBegin());
flowScheduler.add(Instr1RoutineEachFrame());
flowScheduler.add(Instr1RoutineEnd());
flowScheduler.add(Instr2RoutineBegin());
flowScheduler.add(Instr2RoutineEachFrame());
flowScheduler.add(Instr2RoutineEnd());
flowScheduler.add(ExQnARoutineBegin());
flowScheduler.add(ExQnARoutineEachFrame());
flowScheduler.add(ExQnARoutineEnd());
flowScheduler.add(Instr3RoutineBegin());
flowScheduler.add(Instr3RoutineEachFrame());
flowScheduler.add(Instr3RoutineEnd());
const testing_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testing_trialsLoopBegin(testing_trialsLoopScheduler));
flowScheduler.add(testing_trialsLoopScheduler);
flowScheduler.add(testing_trialsLoopEnd);
flowScheduler.add(Instr4RoutineBegin());
flowScheduler.add(Instr4RoutineEachFrame());
flowScheduler.add(Instr4RoutineEnd());
const trials_RecognLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_RecognLoopBegin(trials_RecognLoopScheduler));
flowScheduler.add(trials_RecognLoopScheduler);
flowScheduler.add(trials_RecognLoopEnd);
flowScheduler.add(GoodbyeRoutineBegin());
flowScheduler.add(GoodbyeRoutineEachFrame());
flowScheduler.add(GoodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'conditions_memory_recogn.xlsx', 'path': 'conditions_memory_recogn.xlsx'},
    {'name': 'conditions_memory_loop.xlsx', 'path': 'conditions_memory_loop.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Instr1Clock;
var Instr1_text;
var Instr1_keyresp;
var Instr2Clock;
var Instr2_text;
var Instr2_keyresp;
var ExQnAClock;
var ExQuestion;
var ExWordL;
var ExWordR;
var ExHint;
var ExAns;
var Instr3Clock;
var Instr3_text;
var Instr3_keyresp;
var TestQnAClock;
var TestQuestion;
var TestWordL;
var TestWordR;
var TestHint;
var TestKeyresp;
var Instr4Clock;
var Instr4_text;
var Instr4_keyresp;
var RecognClock;
var Recogn_word;
var Recogn_hint;
var Recogn_Ans;
var GoodbyeClock;
var Goodbye_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instr1"
  Instr1Clock = new util.Clock();
  Instr1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr1_text',
    text: 'Дорогой участник исследования! \nМы изучаем, как люди принимают решения в ситуации выбора из двух возможных вариантов. \n\nСейчас вам будут показаны вопросы с двумя вариантами ответа. Вам будет нужно прочитать вопрос и выбрать сторону (слева или справа), на которой находится правильный ответ.\n\nСначала на экране появится вопрос на 5 секунд. Затем он исчезнет и на 2 секунды появятся варианты ответа - один слева, один справа. После этого слова исчезнут, и вам нужно будет дать ответ, используя русские клавиши “А” (если правильный ответ слева) или “О” (если правильный ответ справа). \n\nКогда будете готовы приступить к заданиям, нажмите ПРОБЕЛ.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instr1_keyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr2"
  Instr2Clock = new util.Clock();
  Instr2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr2_text',
    text: 'Первое задание будет тренировочным. Его результат не будет учитываться. \nКогда будете готовы, нажмите ПРОБЕЛ.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instr2_keyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ExQnA"
  ExQnAClock = new util.Clock();
  ExQuestion = new visual.TextStim({
    win: psychoJS.window,
    name: 'ExQuestion',
    text: 'Что рифмуется со словом "молодец"?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ExWordL = new visual.TextStim({
    win: psychoJS.window,
    name: 'ExWordL',
    text: 'конец',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  ExWordR = new visual.TextStim({
    win: psychoJS.window,
    name: 'ExWordR',
    text: 'пора',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  ExHint = new visual.TextStim({
    win: psychoJS.window,
    name: 'ExHint',
    text: 'Нажмите А, если СЛЕВА              Нажмите О, если СПРАВА',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  ExAns = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr3"
  Instr3Clock = new util.Clock();
  Instr3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr3_text',
    text: 'Молодец! :) Сейчас начнется основная часть исследования, в нем будет 20 заданий. \nКогда будете готовы приступить, нажмите ПРОБЕЛ.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instr3_keyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TestQnA"
  TestQnAClock = new util.Clock();
  TestQuestion = new visual.TextStim({
    win: psychoJS.window,
    name: 'TestQuestion',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  TestWordL = new visual.TextStim({
    win: psychoJS.window,
    name: 'TestWordL',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  TestWordR = new visual.TextStim({
    win: psychoJS.window,
    name: 'TestWordR',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  TestHint = new visual.TextStim({
    win: psychoJS.window,
    name: 'TestHint',
    text: 'Нажмите А если СЛЕВА              Нажмите О если СПРАВА',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  TestKeyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr4"
  Instr4Clock = new util.Clock();
  Instr4_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr4_text',
    text: 'Далее Вам будут последовательно показаны слова. Ваша задача - отметить, какие из них встречались на предыдущем этапе исследования.\n\nЕсли слово ВСТРЕЧАЛОСЬ - нажмите "О".\nЕсли НЕ ВСТРЕЧАЛОСЬ - нажмите "А".\n\nЧтобы продолжить, нажмите ПРОБЕЛ.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instr4_keyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Recogn"
  RecognClock = new util.Clock();
  Recogn_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'Recogn_word',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Recogn_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'Recogn_hint',
    text: 'Нажмите А если НЕ БЫЛО             Нажмите О если БЫЛО',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Recogn_Ans = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Goodbye"
  GoodbyeClock = new util.Clock();
  Goodbye_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Goodbye_text',
    text: 'Спасибо за участие в исследовании!! \nВы наконец-то свободны.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _Instr1_keyresp_allKeys;
var Instr1Components;
function Instr1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr1'-------
    t = 0;
    Instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instr1_keyresp.keys = undefined;
    Instr1_keyresp.rt = undefined;
    _Instr1_keyresp_allKeys = [];
    // keep track of which components have finished
    Instr1Components = [];
    Instr1Components.push(Instr1_text);
    Instr1Components.push(Instr1_keyresp);
    
    Instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr1'-------
    // get current time
    t = Instr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr1_text* updates
    if (t >= 0.0 && Instr1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr1_text.tStart = t;  // (not accounting for frame time here)
      Instr1_text.frameNStart = frameN;  // exact frame index
      
      Instr1_text.setAutoDraw(true);
    }

    
    // *Instr1_keyresp* updates
    if (t >= 0.0 && Instr1_keyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr1_keyresp.tStart = t;  // (not accounting for frame time here)
      Instr1_keyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr1_keyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr1_keyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr1_keyresp.clearEvents(); });
    }

    if (Instr1_keyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr1_keyresp.getKeys({keyList: ['space'], waitRelease: false});
      _Instr1_keyresp_allKeys = _Instr1_keyresp_allKeys.concat(theseKeys);
      if (_Instr1_keyresp_allKeys.length > 0) {
        Instr1_keyresp.keys = _Instr1_keyresp_allKeys[_Instr1_keyresp_allKeys.length - 1].name;  // just the last key pressed
        Instr1_keyresp.rt = _Instr1_keyresp_allKeys[_Instr1_keyresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr1'-------
    Instr1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    Instr1_keyresp.stop();
    // the Routine "Instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr2_keyresp_allKeys;
var Instr2Components;
function Instr2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr2'-------
    t = 0;
    Instr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instr2_keyresp.keys = undefined;
    Instr2_keyresp.rt = undefined;
    _Instr2_keyresp_allKeys = [];
    // keep track of which components have finished
    Instr2Components = [];
    Instr2Components.push(Instr2_text);
    Instr2Components.push(Instr2_keyresp);
    
    Instr2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr2'-------
    // get current time
    t = Instr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr2_text* updates
    if (t >= 0.0 && Instr2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr2_text.tStart = t;  // (not accounting for frame time here)
      Instr2_text.frameNStart = frameN;  // exact frame index
      
      Instr2_text.setAutoDraw(true);
    }

    
    // *Instr2_keyresp* updates
    if (t >= 0.0 && Instr2_keyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr2_keyresp.tStart = t;  // (not accounting for frame time here)
      Instr2_keyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr2_keyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr2_keyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr2_keyresp.clearEvents(); });
    }

    if (Instr2_keyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr2_keyresp.getKeys({keyList: ['space'], waitRelease: false});
      _Instr2_keyresp_allKeys = _Instr2_keyresp_allKeys.concat(theseKeys);
      if (_Instr2_keyresp_allKeys.length > 0) {
        Instr2_keyresp.keys = _Instr2_keyresp_allKeys[_Instr2_keyresp_allKeys.length - 1].name;  // just the last key pressed
        Instr2_keyresp.rt = _Instr2_keyresp_allKeys[_Instr2_keyresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr2'-------
    Instr2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    Instr2_keyresp.stop();
    // the Routine "Instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _ExAns_allKeys;
var ExQnAComponents;
function ExQnARoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ExQnA'-------
    t = 0;
    ExQnAClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ExAns.keys = undefined;
    ExAns.rt = undefined;
    _ExAns_allKeys = [];
    // keep track of which components have finished
    ExQnAComponents = [];
    ExQnAComponents.push(ExQuestion);
    ExQnAComponents.push(ExWordL);
    ExQnAComponents.push(ExWordR);
    ExQnAComponents.push(ExHint);
    ExQnAComponents.push(ExAns);
    
    ExQnAComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function ExQnARoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ExQnA'-------
    // get current time
    t = ExQnAClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ExQuestion* updates
    if (t >= 0.0 && ExQuestion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExQuestion.tStart = t;  // (not accounting for frame time here)
      ExQuestion.frameNStart = frameN;  // exact frame index
      
      ExQuestion.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ExQuestion.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ExQuestion.setAutoDraw(false);
    }
    
    // *ExWordL* updates
    if (t >= 3.0 && ExWordL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExWordL.tStart = t;  // (not accounting for frame time here)
      ExWordL.frameNStart = frameN;  // exact frame index
      
      ExWordL.setAutoDraw(true);
    }

    frameRemains = 3.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ExWordL.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ExWordL.setAutoDraw(false);
    }
    
    // *ExWordR* updates
    if (t >= 3.0 && ExWordR.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExWordR.tStart = t;  // (not accounting for frame time here)
      ExWordR.frameNStart = frameN;  // exact frame index
      
      ExWordR.setAutoDraw(true);
    }

    frameRemains = 3.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ExWordR.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ExWordR.setAutoDraw(false);
    }
    
    // *ExHint* updates
    if (t >= 5.0 && ExHint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExHint.tStart = t;  // (not accounting for frame time here)
      ExHint.frameNStart = frameN;  // exact frame index
      
      ExHint.setAutoDraw(true);
    }

    
    // *ExAns* updates
    if (t >= 5.0 && ExAns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExAns.tStart = t;  // (not accounting for frame time here)
      ExAns.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ExAns.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ExAns.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ExAns.clearEvents(); });
    }

    if (ExAns.status === PsychoJS.Status.STARTED) {
      let theseKeys = ExAns.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _ExAns_allKeys = _ExAns_allKeys.concat(theseKeys);
      if (_ExAns_allKeys.length > 0) {
        ExAns.keys = _ExAns_allKeys[_ExAns_allKeys.length - 1].name;  // just the last key pressed
        ExAns.rt = _ExAns_allKeys[_ExAns_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ExQnAComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ExQnARoutineEnd() {
  return async function () {
    //------Ending Routine 'ExQnA'-------
    ExQnAComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    ExAns.stop();
    // the Routine "ExQnA" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr3_keyresp_allKeys;
var Instr3Components;
function Instr3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr3'-------
    t = 0;
    Instr3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instr3_keyresp.keys = undefined;
    Instr3_keyresp.rt = undefined;
    _Instr3_keyresp_allKeys = [];
    // keep track of which components have finished
    Instr3Components = [];
    Instr3Components.push(Instr3_text);
    Instr3Components.push(Instr3_keyresp);
    
    Instr3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr3'-------
    // get current time
    t = Instr3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr3_text* updates
    if (t >= 0.0 && Instr3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr3_text.tStart = t;  // (not accounting for frame time here)
      Instr3_text.frameNStart = frameN;  // exact frame index
      
      Instr3_text.setAutoDraw(true);
    }

    
    // *Instr3_keyresp* updates
    if (t >= 0.0 && Instr3_keyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr3_keyresp.tStart = t;  // (not accounting for frame time here)
      Instr3_keyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr3_keyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr3_keyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr3_keyresp.clearEvents(); });
    }

    if (Instr3_keyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr3_keyresp.getKeys({keyList: ['space'], waitRelease: false});
      _Instr3_keyresp_allKeys = _Instr3_keyresp_allKeys.concat(theseKeys);
      if (_Instr3_keyresp_allKeys.length > 0) {
        Instr3_keyresp.keys = _Instr3_keyresp_allKeys[_Instr3_keyresp_allKeys.length - 1].name;  // just the last key pressed
        Instr3_keyresp.rt = _Instr3_keyresp_allKeys[_Instr3_keyresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr3'-------
    Instr3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    Instr3_keyresp.stop();
    // the Routine "Instr3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var testing_trials;
var currentLoop;
function testing_trialsLoopBegin(testing_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testing_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions_memory_loop.xlsx', '1:20'),
      seed: undefined, name: 'testing_trials'
    });
    psychoJS.experiment.addLoop(testing_trials); // add the loop to the experiment
    currentLoop = testing_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    testing_trials.forEach(function() {
      const snapshot = testing_trials.getSnapshot();
    
      testing_trialsLoopScheduler.add(importConditions(snapshot));
      testing_trialsLoopScheduler.add(TestQnARoutineBegin(snapshot));
      testing_trialsLoopScheduler.add(TestQnARoutineEachFrame());
      testing_trialsLoopScheduler.add(TestQnARoutineEnd());
      testing_trialsLoopScheduler.add(endLoopIteration(testing_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function testing_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(testing_trials);

  return Scheduler.Event.NEXT;
}


var trials_Recogn;
function trials_RecognLoopBegin(trials_RecognLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_Recogn = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_memory_recogn.xlsx',
      seed: undefined, name: 'trials_Recogn'
    });
    psychoJS.experiment.addLoop(trials_Recogn); // add the loop to the experiment
    currentLoop = trials_Recogn;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_Recogn.forEach(function() {
      const snapshot = trials_Recogn.getSnapshot();
    
      trials_RecognLoopScheduler.add(importConditions(snapshot));
      trials_RecognLoopScheduler.add(RecognRoutineBegin(snapshot));
      trials_RecognLoopScheduler.add(RecognRoutineEachFrame());
      trials_RecognLoopScheduler.add(RecognRoutineEnd());
      trials_RecognLoopScheduler.add(endLoopIteration(trials_RecognLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_RecognLoopEnd() {
  psychoJS.experiment.removeLoop(trials_Recogn);

  return Scheduler.Event.NEXT;
}


var _TestKeyresp_allKeys;
var TestQnAComponents;
function TestQnARoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'TestQnA'-------
    t = 0;
    TestQnAClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    TestQuestion.setText(question);
    TestWordL.setColor(new util.Color(wordcolorL));
    TestWordL.setText(wordL);
    TestWordR.setColor(new util.Color(wordcolorR));
    TestWordR.setText(wordR);
    TestKeyresp.keys = undefined;
    TestKeyresp.rt = undefined;
    _TestKeyresp_allKeys = [];
    // keep track of which components have finished
    TestQnAComponents = [];
    TestQnAComponents.push(TestQuestion);
    TestQnAComponents.push(TestWordL);
    TestQnAComponents.push(TestWordR);
    TestQnAComponents.push(TestHint);
    TestQnAComponents.push(TestKeyresp);
    
    TestQnAComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function TestQnARoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'TestQnA'-------
    // get current time
    t = TestQnAClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TestQuestion* updates
    if (t >= 0.0 && TestQuestion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TestQuestion.tStart = t;  // (not accounting for frame time here)
      TestQuestion.frameNStart = frameN;  // exact frame index
      
      TestQuestion.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TestQuestion.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TestQuestion.setAutoDraw(false);
    }
    
    // *TestWordL* updates
    if (t >= 3.0 && TestWordL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TestWordL.tStart = t;  // (not accounting for frame time here)
      TestWordL.frameNStart = frameN;  // exact frame index
      
      TestWordL.setAutoDraw(true);
    }

    frameRemains = 3.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TestWordL.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TestWordL.setAutoDraw(false);
    }
    
    // *TestWordR* updates
    if (t >= 3.0 && TestWordR.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TestWordR.tStart = t;  // (not accounting for frame time here)
      TestWordR.frameNStart = frameN;  // exact frame index
      
      TestWordR.setAutoDraw(true);
    }

    frameRemains = 3.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TestWordR.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TestWordR.setAutoDraw(false);
    }
    
    // *TestHint* updates
    if (t >= 5.0 && TestHint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TestHint.tStart = t;  // (not accounting for frame time here)
      TestHint.frameNStart = frameN;  // exact frame index
      
      TestHint.setAutoDraw(true);
    }

    
    // *TestKeyresp* updates
    if (t >= 5.0 && TestKeyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TestKeyresp.tStart = t;  // (not accounting for frame time here)
      TestKeyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TestKeyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TestKeyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TestKeyresp.clearEvents(); });
    }

    if (TestKeyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = TestKeyresp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _TestKeyresp_allKeys = _TestKeyresp_allKeys.concat(theseKeys);
      if (_TestKeyresp_allKeys.length > 0) {
        TestKeyresp.keys = _TestKeyresp_allKeys[_TestKeyresp_allKeys.length - 1].name;  // just the last key pressed
        TestKeyresp.rt = _TestKeyresp_allKeys[_TestKeyresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TestQnAComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TestQnARoutineEnd() {
  return async function () {
    //------Ending Routine 'TestQnA'-------
    TestQnAComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    TestKeyresp.stop();
    // the Routine "TestQnA" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr4_keyresp_allKeys;
var Instr4Components;
function Instr4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr4'-------
    t = 0;
    Instr4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instr4_keyresp.keys = undefined;
    Instr4_keyresp.rt = undefined;
    _Instr4_keyresp_allKeys = [];
    // keep track of which components have finished
    Instr4Components = [];
    Instr4Components.push(Instr4_text);
    Instr4Components.push(Instr4_keyresp);
    
    Instr4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr4'-------
    // get current time
    t = Instr4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr4_text* updates
    if (t >= 0.0 && Instr4_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr4_text.tStart = t;  // (not accounting for frame time here)
      Instr4_text.frameNStart = frameN;  // exact frame index
      
      Instr4_text.setAutoDraw(true);
    }

    
    // *Instr4_keyresp* updates
    if (t >= 0.0 && Instr4_keyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr4_keyresp.tStart = t;  // (not accounting for frame time here)
      Instr4_keyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr4_keyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr4_keyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr4_keyresp.clearEvents(); });
    }

    if (Instr4_keyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr4_keyresp.getKeys({keyList: ['space'], waitRelease: false});
      _Instr4_keyresp_allKeys = _Instr4_keyresp_allKeys.concat(theseKeys);
      if (_Instr4_keyresp_allKeys.length > 0) {
        Instr4_keyresp.keys = _Instr4_keyresp_allKeys[_Instr4_keyresp_allKeys.length - 1].name;  // just the last key pressed
        Instr4_keyresp.rt = _Instr4_keyresp_allKeys[_Instr4_keyresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr4'-------
    Instr4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    Instr4_keyresp.stop();
    // the Routine "Instr4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Recogn_Ans_allKeys;
var RecognComponents;
function RecognRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Recogn'-------
    t = 0;
    RecognClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Recogn_word.setText(stimuluswords);
    Recogn_Ans.keys = undefined;
    Recogn_Ans.rt = undefined;
    _Recogn_Ans_allKeys = [];
    // keep track of which components have finished
    RecognComponents = [];
    RecognComponents.push(Recogn_word);
    RecognComponents.push(Recogn_hint);
    RecognComponents.push(Recogn_Ans);
    
    RecognComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function RecognRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Recogn'-------
    // get current time
    t = RecognClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Recogn_word* updates
    if (t >= 0.0 && Recogn_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Recogn_word.tStart = t;  // (not accounting for frame time here)
      Recogn_word.frameNStart = frameN;  // exact frame index
      
      Recogn_word.setAutoDraw(true);
    }

    
    // *Recogn_hint* updates
    if (t >= 0.0 && Recogn_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Recogn_hint.tStart = t;  // (not accounting for frame time here)
      Recogn_hint.frameNStart = frameN;  // exact frame index
      
      Recogn_hint.setAutoDraw(true);
    }

    
    // *Recogn_Ans* updates
    if (t >= 0.0 && Recogn_Ans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Recogn_Ans.tStart = t;  // (not accounting for frame time here)
      Recogn_Ans.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Recogn_Ans.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Recogn_Ans.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Recogn_Ans.clearEvents(); });
    }

    if (Recogn_Ans.status === PsychoJS.Status.STARTED) {
      let theseKeys = Recogn_Ans.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _Recogn_Ans_allKeys = _Recogn_Ans_allKeys.concat(theseKeys);
      if (_Recogn_Ans_allKeys.length > 0) {
        Recogn_Ans.keys = _Recogn_Ans_allKeys[_Recogn_Ans_allKeys.length - 1].name;  // just the last key pressed
        Recogn_Ans.rt = _Recogn_Ans_allKeys[_Recogn_Ans_allKeys.length - 1].rt;
        // was this correct?
        if (Recogn_Ans.keys == corrAns) {
            Recogn_Ans.corr = 1;
        } else {
            Recogn_Ans.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    RecognComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RecognRoutineEnd() {
  return async function () {
    //------Ending Routine 'Recogn'-------
    RecognComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (Recogn_Ans.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         Recogn_Ans.corr = 1;  // correct non-response
      } else {
         Recogn_Ans.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('Recogn_Ans.keys', Recogn_Ans.keys);
    psychoJS.experiment.addData('Recogn_Ans.corr', Recogn_Ans.corr);
    if (typeof Recogn_Ans.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Recogn_Ans.rt', Recogn_Ans.rt);
        routineTimer.reset();
        }
    
    Recogn_Ans.stop();
    // the Routine "Recogn" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var GoodbyeComponents;
function GoodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Goodbye'-------
    t = 0;
    GoodbyeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    GoodbyeComponents = [];
    GoodbyeComponents.push(Goodbye_text);
    
    GoodbyeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Goodbye'-------
    // get current time
    t = GoodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Goodbye_text* updates
    if (t >= 0.0 && Goodbye_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Goodbye_text.tStart = t;  // (not accounting for frame time here)
      Goodbye_text.frameNStart = frameN;  // exact frame index
      
      Goodbye_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Goodbye_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Goodbye_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GoodbyeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeRoutineEnd() {
  return async function () {
    //------Ending Routine 'Goodbye'-------
    GoodbyeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
