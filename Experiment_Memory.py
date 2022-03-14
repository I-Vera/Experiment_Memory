#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on March 13, 2022, at 23:51
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'Experiment_Memory'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\paper\\Desktop\\PsychoPy\\Experiment_Memory\\Experiment_Memory.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Instr1"
Instr1Clock = core.Clock()
Instr1_text = visual.TextStim(win=win, name='Instr1_text',
    text='Дорогой участник исследования! \nМы изучаем, как люди принимают решения в ситуации выбора из двух возможных вариантов. \n\nСейчас вам будут показаны вопросы с двумя вариантами ответа. Вам будет нужно прочитать вопрос и выбрать сторону (слева или справа), на которой находится правильный ответ.\n\nСначала на экране появится вопрос на 5 секунд. Затем он исчезнет и на 2 секунды появятся варианты ответа - один слева, один справа. После этого слова исчезнут, и вам нужно будет дать ответ, используя русские клавиши “А” (если правильный ответ слева) или “О” (если правильный ответ справа). \n\nКогда будете готовы приступить к заданиям, нажмите ПРОБЕЛ.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Instr1_keyresp = keyboard.Keyboard()

# Initialize components for Routine "Instr2"
Instr2Clock = core.Clock()
Instr2_text = visual.TextStim(win=win, name='Instr2_text',
    text='Первое задание будет тренировочным. Его результат не будет учитываться. \nКогда будете готовы, нажмите ПРОБЕЛ.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Instr2_keyresp = keyboard.Keyboard()

# Initialize components for Routine "ExQnA"
ExQnAClock = core.Clock()
ExQuestion = visual.TextStim(win=win, name='ExQuestion',
    text='Что рифмуется со словом "молодец"?',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
ExWordL = visual.TextStim(win=win, name='ExWordL',
    text='конец',
    font='Open Sans',
    pos=(-0.2, 0), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
ExWordR = visual.TextStim(win=win, name='ExWordR',
    text='пора',
    font='Open Sans',
    pos=(0.2, 0), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
ExHint = visual.TextStim(win=win, name='ExHint',
    text='Нажмите А, если СЛЕВА              Нажмите О, если СПРАВА',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
ExAns = keyboard.Keyboard()

# Initialize components for Routine "Instr3"
Instr3Clock = core.Clock()
Instr3_text = visual.TextStim(win=win, name='Instr3_text',
    text='Молодец! :) Сейчас начнется основная часть исследования, в нем будет 20 заданий. \nКогда будете готовы приступить, нажмите ПРОБЕЛ.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Instr3_keyresp = keyboard.Keyboard()

# Initialize components for Routine "TestQnA"
TestQnAClock = core.Clock()
TestQuestion = visual.TextStim(win=win, name='TestQuestion',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
TestWordL = visual.TextStim(win=win, name='TestWordL',
    text='',
    font='Open Sans',
    pos=(-0.2, 0), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
TestWordR = visual.TextStim(win=win, name='TestWordR',
    text='',
    font='Open Sans',
    pos=(0.2, 0), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
TestHint = visual.TextStim(win=win, name='TestHint',
    text='Нажмите А если СЛЕВА              Нажмите О если СПРАВА',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
TestKeyresp = keyboard.Keyboard()

# Initialize components for Routine "Instr4"
Instr4Clock = core.Clock()
Instr4_text = visual.TextStim(win=win, name='Instr4_text',
    text='Далее Вам будут последовательно показаны слова. Ваша задача - отметить, какие из них встречались на предыдущем этапе исследования.\n\nЕсли слово ВСТРЕЧАЛОСЬ - нажмите "О".\nЕсли НЕ ВСТРЕЧАЛОСЬ - нажмите "А".\n\nЧтобы продолжить, нажмите ПРОБЕЛ.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Instr4_keyresp = keyboard.Keyboard()

# Initialize components for Routine "Recogn"
RecognClock = core.Clock()
Recogn_word = visual.TextStim(win=win, name='Recogn_word',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Recogn_hint = visual.TextStim(win=win, name='Recogn_hint',
    text='Нажмите А если НЕ БЫЛО             Нажмите О если БЫЛО',
    font='Open Sans',
    pos=(0, -0.4), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
Recogn_Ans = keyboard.Keyboard()

# Initialize components for Routine "Goodbye"
GoodbyeClock = core.Clock()
Goodbye_text = visual.TextStim(win=win, name='Goodbye_text',
    text='Спасибо за участие в исследовании!! \nВы наконец-то свободны.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instr1"-------
continueRoutine = True
# update component parameters for each repeat
Instr1_keyresp.keys = []
Instr1_keyresp.rt = []
_Instr1_keyresp_allKeys = []
# keep track of which components have finished
Instr1Components = [Instr1_text, Instr1_keyresp]
for thisComponent in Instr1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instr1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instr1"-------
while continueRoutine:
    # get current time
    t = Instr1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instr1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instr1_text* updates
    if Instr1_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr1_text.frameNStart = frameN  # exact frame index
        Instr1_text.tStart = t  # local t and not account for scr refresh
        Instr1_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr1_text, 'tStartRefresh')  # time at next scr refresh
        Instr1_text.setAutoDraw(True)
    
    # *Instr1_keyresp* updates
    waitOnFlip = False
    if Instr1_keyresp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr1_keyresp.frameNStart = frameN  # exact frame index
        Instr1_keyresp.tStart = t  # local t and not account for scr refresh
        Instr1_keyresp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr1_keyresp, 'tStartRefresh')  # time at next scr refresh
        Instr1_keyresp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Instr1_keyresp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Instr1_keyresp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Instr1_keyresp.status == STARTED and not waitOnFlip:
        theseKeys = Instr1_keyresp.getKeys(keyList=['space'], waitRelease=False)
        _Instr1_keyresp_allKeys.extend(theseKeys)
        if len(_Instr1_keyresp_allKeys):
            Instr1_keyresp.keys = _Instr1_keyresp_allKeys[-1].name  # just the last key pressed
            Instr1_keyresp.rt = _Instr1_keyresp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instr1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instr1"-------
for thisComponent in Instr1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Instr1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instr2"-------
continueRoutine = True
# update component parameters for each repeat
Instr2_keyresp.keys = []
Instr2_keyresp.rt = []
_Instr2_keyresp_allKeys = []
# keep track of which components have finished
Instr2Components = [Instr2_text, Instr2_keyresp]
for thisComponent in Instr2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instr2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instr2"-------
while continueRoutine:
    # get current time
    t = Instr2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instr2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instr2_text* updates
    if Instr2_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr2_text.frameNStart = frameN  # exact frame index
        Instr2_text.tStart = t  # local t and not account for scr refresh
        Instr2_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr2_text, 'tStartRefresh')  # time at next scr refresh
        Instr2_text.setAutoDraw(True)
    
    # *Instr2_keyresp* updates
    waitOnFlip = False
    if Instr2_keyresp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr2_keyresp.frameNStart = frameN  # exact frame index
        Instr2_keyresp.tStart = t  # local t and not account for scr refresh
        Instr2_keyresp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr2_keyresp, 'tStartRefresh')  # time at next scr refresh
        Instr2_keyresp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Instr2_keyresp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Instr2_keyresp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Instr2_keyresp.status == STARTED and not waitOnFlip:
        theseKeys = Instr2_keyresp.getKeys(keyList=['space'], waitRelease=False)
        _Instr2_keyresp_allKeys.extend(theseKeys)
        if len(_Instr2_keyresp_allKeys):
            Instr2_keyresp.keys = _Instr2_keyresp_allKeys[-1].name  # just the last key pressed
            Instr2_keyresp.rt = _Instr2_keyresp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instr2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instr2"-------
for thisComponent in Instr2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Instr2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "ExQnA"-------
continueRoutine = True
# update component parameters for each repeat
ExAns.keys = []
ExAns.rt = []
_ExAns_allKeys = []
# keep track of which components have finished
ExQnAComponents = [ExQuestion, ExWordL, ExWordR, ExHint, ExAns]
for thisComponent in ExQnAComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ExQnAClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "ExQnA"-------
while continueRoutine:
    # get current time
    t = ExQnAClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ExQnAClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ExQuestion* updates
    if ExQuestion.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ExQuestion.frameNStart = frameN  # exact frame index
        ExQuestion.tStart = t  # local t and not account for scr refresh
        ExQuestion.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ExQuestion, 'tStartRefresh')  # time at next scr refresh
        ExQuestion.setAutoDraw(True)
    if ExQuestion.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > ExQuestion.tStartRefresh + 3.0-frameTolerance:
            # keep track of stop time/frame for later
            ExQuestion.tStop = t  # not accounting for scr refresh
            ExQuestion.frameNStop = frameN  # exact frame index
            win.timeOnFlip(ExQuestion, 'tStopRefresh')  # time at next scr refresh
            ExQuestion.setAutoDraw(False)
    
    # *ExWordL* updates
    if ExWordL.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
        # keep track of start time/frame for later
        ExWordL.frameNStart = frameN  # exact frame index
        ExWordL.tStart = t  # local t and not account for scr refresh
        ExWordL.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ExWordL, 'tStartRefresh')  # time at next scr refresh
        ExWordL.setAutoDraw(True)
    if ExWordL.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > ExWordL.tStartRefresh + 2.0-frameTolerance:
            # keep track of stop time/frame for later
            ExWordL.tStop = t  # not accounting for scr refresh
            ExWordL.frameNStop = frameN  # exact frame index
            win.timeOnFlip(ExWordL, 'tStopRefresh')  # time at next scr refresh
            ExWordL.setAutoDraw(False)
    
    # *ExWordR* updates
    if ExWordR.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
        # keep track of start time/frame for later
        ExWordR.frameNStart = frameN  # exact frame index
        ExWordR.tStart = t  # local t and not account for scr refresh
        ExWordR.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ExWordR, 'tStartRefresh')  # time at next scr refresh
        ExWordR.setAutoDraw(True)
    if ExWordR.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > ExWordR.tStartRefresh + 2.0-frameTolerance:
            # keep track of stop time/frame for later
            ExWordR.tStop = t  # not accounting for scr refresh
            ExWordR.frameNStop = frameN  # exact frame index
            win.timeOnFlip(ExWordR, 'tStopRefresh')  # time at next scr refresh
            ExWordR.setAutoDraw(False)
    
    # *ExHint* updates
    if ExHint.status == NOT_STARTED and tThisFlip >= 5.0-frameTolerance:
        # keep track of start time/frame for later
        ExHint.frameNStart = frameN  # exact frame index
        ExHint.tStart = t  # local t and not account for scr refresh
        ExHint.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ExHint, 'tStartRefresh')  # time at next scr refresh
        ExHint.setAutoDraw(True)
    
    # *ExAns* updates
    waitOnFlip = False
    if ExAns.status == NOT_STARTED and tThisFlip >= 5.0-frameTolerance:
        # keep track of start time/frame for later
        ExAns.frameNStart = frameN  # exact frame index
        ExAns.tStart = t  # local t and not account for scr refresh
        ExAns.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ExAns, 'tStartRefresh')  # time at next scr refresh
        ExAns.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(ExAns.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(ExAns.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if ExAns.status == STARTED and not waitOnFlip:
        theseKeys = ExAns.getKeys(keyList=['f', 'j'], waitRelease=False)
        _ExAns_allKeys.extend(theseKeys)
        if len(_ExAns_allKeys):
            ExAns.keys = _ExAns_allKeys[-1].name  # just the last key pressed
            ExAns.rt = _ExAns_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ExQnAComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ExQnA"-------
for thisComponent in ExQnAComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "ExQnA" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instr3"-------
continueRoutine = True
# update component parameters for each repeat
Instr3_keyresp.keys = []
Instr3_keyresp.rt = []
_Instr3_keyresp_allKeys = []
# keep track of which components have finished
Instr3Components = [Instr3_text, Instr3_keyresp]
for thisComponent in Instr3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instr3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instr3"-------
while continueRoutine:
    # get current time
    t = Instr3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instr3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instr3_text* updates
    if Instr3_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr3_text.frameNStart = frameN  # exact frame index
        Instr3_text.tStart = t  # local t and not account for scr refresh
        Instr3_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr3_text, 'tStartRefresh')  # time at next scr refresh
        Instr3_text.setAutoDraw(True)
    
    # *Instr3_keyresp* updates
    waitOnFlip = False
    if Instr3_keyresp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr3_keyresp.frameNStart = frameN  # exact frame index
        Instr3_keyresp.tStart = t  # local t and not account for scr refresh
        Instr3_keyresp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr3_keyresp, 'tStartRefresh')  # time at next scr refresh
        Instr3_keyresp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Instr3_keyresp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Instr3_keyresp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Instr3_keyresp.status == STARTED and not waitOnFlip:
        theseKeys = Instr3_keyresp.getKeys(keyList=['space'], waitRelease=False)
        _Instr3_keyresp_allKeys.extend(theseKeys)
        if len(_Instr3_keyresp_allKeys):
            Instr3_keyresp.keys = _Instr3_keyresp_allKeys[-1].name  # just the last key pressed
            Instr3_keyresp.rt = _Instr3_keyresp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instr3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instr3"-------
for thisComponent in Instr3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Instr3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
testing_trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions_memory_loop.xlsx', selection='1:20'),
    seed=None, name='testing_trials')
thisExp.addLoop(testing_trials)  # add the loop to the experiment
thisTesting_trial = testing_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTesting_trial.rgb)
if thisTesting_trial != None:
    for paramName in thisTesting_trial:
        exec('{} = thisTesting_trial[paramName]'.format(paramName))

for thisTesting_trial in testing_trials:
    currentLoop = testing_trials
    # abbreviate parameter names if possible (e.g. rgb = thisTesting_trial.rgb)
    if thisTesting_trial != None:
        for paramName in thisTesting_trial:
            exec('{} = thisTesting_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "TestQnA"-------
    continueRoutine = True
    # update component parameters for each repeat
    TestQuestion.setText(question)
    TestWordL.setColor(wordcolorL, colorSpace='rgb')
    TestWordL.setText(wordL)
    TestWordR.setColor(wordcolorR, colorSpace='rgb')
    TestWordR.setText(wordR)
    TestKeyresp.keys = []
    TestKeyresp.rt = []
    _TestKeyresp_allKeys = []
    # keep track of which components have finished
    TestQnAComponents = [TestQuestion, TestWordL, TestWordR, TestHint, TestKeyresp]
    for thisComponent in TestQnAComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    TestQnAClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "TestQnA"-------
    while continueRoutine:
        # get current time
        t = TestQnAClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=TestQnAClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *TestQuestion* updates
        if TestQuestion.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            TestQuestion.frameNStart = frameN  # exact frame index
            TestQuestion.tStart = t  # local t and not account for scr refresh
            TestQuestion.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TestQuestion, 'tStartRefresh')  # time at next scr refresh
            TestQuestion.setAutoDraw(True)
        if TestQuestion.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TestQuestion.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                TestQuestion.tStop = t  # not accounting for scr refresh
                TestQuestion.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TestQuestion, 'tStopRefresh')  # time at next scr refresh
                TestQuestion.setAutoDraw(False)
        
        # *TestWordL* updates
        if TestWordL.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            TestWordL.frameNStart = frameN  # exact frame index
            TestWordL.tStart = t  # local t and not account for scr refresh
            TestWordL.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TestWordL, 'tStartRefresh')  # time at next scr refresh
            TestWordL.setAutoDraw(True)
        if TestWordL.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TestWordL.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                TestWordL.tStop = t  # not accounting for scr refresh
                TestWordL.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TestWordL, 'tStopRefresh')  # time at next scr refresh
                TestWordL.setAutoDraw(False)
        
        # *TestWordR* updates
        if TestWordR.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            TestWordR.frameNStart = frameN  # exact frame index
            TestWordR.tStart = t  # local t and not account for scr refresh
            TestWordR.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TestWordR, 'tStartRefresh')  # time at next scr refresh
            TestWordR.setAutoDraw(True)
        if TestWordR.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TestWordR.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                TestWordR.tStop = t  # not accounting for scr refresh
                TestWordR.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TestWordR, 'tStopRefresh')  # time at next scr refresh
                TestWordR.setAutoDraw(False)
        
        # *TestHint* updates
        if TestHint.status == NOT_STARTED and tThisFlip >= 5.0-frameTolerance:
            # keep track of start time/frame for later
            TestHint.frameNStart = frameN  # exact frame index
            TestHint.tStart = t  # local t and not account for scr refresh
            TestHint.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TestHint, 'tStartRefresh')  # time at next scr refresh
            TestHint.setAutoDraw(True)
        
        # *TestKeyresp* updates
        waitOnFlip = False
        if TestKeyresp.status == NOT_STARTED and tThisFlip >= 5.0-frameTolerance:
            # keep track of start time/frame for later
            TestKeyresp.frameNStart = frameN  # exact frame index
            TestKeyresp.tStart = t  # local t and not account for scr refresh
            TestKeyresp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TestKeyresp, 'tStartRefresh')  # time at next scr refresh
            TestKeyresp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(TestKeyresp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(TestKeyresp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if TestKeyresp.status == STARTED and not waitOnFlip:
            theseKeys = TestKeyresp.getKeys(keyList=['f', 'j'], waitRelease=False)
            _TestKeyresp_allKeys.extend(theseKeys)
            if len(_TestKeyresp_allKeys):
                TestKeyresp.keys = _TestKeyresp_allKeys[-1].name  # just the last key pressed
                TestKeyresp.rt = _TestKeyresp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in TestQnAComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "TestQnA"-------
    for thisComponent in TestQnAComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "TestQnA" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'testing_trials'


# ------Prepare to start Routine "Instr4"-------
continueRoutine = True
# update component parameters for each repeat
Instr4_keyresp.keys = []
Instr4_keyresp.rt = []
_Instr4_keyresp_allKeys = []
# keep track of which components have finished
Instr4Components = [Instr4_text, Instr4_keyresp]
for thisComponent in Instr4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instr4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instr4"-------
while continueRoutine:
    # get current time
    t = Instr4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instr4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instr4_text* updates
    if Instr4_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr4_text.frameNStart = frameN  # exact frame index
        Instr4_text.tStart = t  # local t and not account for scr refresh
        Instr4_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr4_text, 'tStartRefresh')  # time at next scr refresh
        Instr4_text.setAutoDraw(True)
    
    # *Instr4_keyresp* updates
    waitOnFlip = False
    if Instr4_keyresp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instr4_keyresp.frameNStart = frameN  # exact frame index
        Instr4_keyresp.tStart = t  # local t and not account for scr refresh
        Instr4_keyresp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instr4_keyresp, 'tStartRefresh')  # time at next scr refresh
        Instr4_keyresp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Instr4_keyresp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Instr4_keyresp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Instr4_keyresp.status == STARTED and not waitOnFlip:
        theseKeys = Instr4_keyresp.getKeys(keyList=['space'], waitRelease=False)
        _Instr4_keyresp_allKeys.extend(theseKeys)
        if len(_Instr4_keyresp_allKeys):
            Instr4_keyresp.keys = _Instr4_keyresp_allKeys[-1].name  # just the last key pressed
            Instr4_keyresp.rt = _Instr4_keyresp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instr4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instr4"-------
for thisComponent in Instr4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Instr4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_Recogn = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions_memory_recogn.xlsx'),
    seed=None, name='trials_Recogn')
thisExp.addLoop(trials_Recogn)  # add the loop to the experiment
thisTrials_Recogn = trials_Recogn.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_Recogn.rgb)
if thisTrials_Recogn != None:
    for paramName in thisTrials_Recogn:
        exec('{} = thisTrials_Recogn[paramName]'.format(paramName))

for thisTrials_Recogn in trials_Recogn:
    currentLoop = trials_Recogn
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_Recogn.rgb)
    if thisTrials_Recogn != None:
        for paramName in thisTrials_Recogn:
            exec('{} = thisTrials_Recogn[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Recogn"-------
    continueRoutine = True
    # update component parameters for each repeat
    Recogn_word.setText(stimuluswords)
    Recogn_Ans.keys = []
    Recogn_Ans.rt = []
    _Recogn_Ans_allKeys = []
    # keep track of which components have finished
    RecognComponents = [Recogn_word, Recogn_hint, Recogn_Ans]
    for thisComponent in RecognComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    RecognClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Recogn"-------
    while continueRoutine:
        # get current time
        t = RecognClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=RecognClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Recogn_word* updates
        if Recogn_word.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Recogn_word.frameNStart = frameN  # exact frame index
            Recogn_word.tStart = t  # local t and not account for scr refresh
            Recogn_word.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Recogn_word, 'tStartRefresh')  # time at next scr refresh
            Recogn_word.setAutoDraw(True)
        
        # *Recogn_hint* updates
        if Recogn_hint.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Recogn_hint.frameNStart = frameN  # exact frame index
            Recogn_hint.tStart = t  # local t and not account for scr refresh
            Recogn_hint.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Recogn_hint, 'tStartRefresh')  # time at next scr refresh
            Recogn_hint.setAutoDraw(True)
        
        # *Recogn_Ans* updates
        waitOnFlip = False
        if Recogn_Ans.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Recogn_Ans.frameNStart = frameN  # exact frame index
            Recogn_Ans.tStart = t  # local t and not account for scr refresh
            Recogn_Ans.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Recogn_Ans, 'tStartRefresh')  # time at next scr refresh
            Recogn_Ans.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(Recogn_Ans.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(Recogn_Ans.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if Recogn_Ans.status == STARTED and not waitOnFlip:
            theseKeys = Recogn_Ans.getKeys(keyList=['f', 'j'], waitRelease=False)
            _Recogn_Ans_allKeys.extend(theseKeys)
            if len(_Recogn_Ans_allKeys):
                Recogn_Ans.keys = _Recogn_Ans_allKeys[-1].name  # just the last key pressed
                Recogn_Ans.rt = _Recogn_Ans_allKeys[-1].rt
                # was this correct?
                if (Recogn_Ans.keys == str(corrAns)) or (Recogn_Ans.keys == corrAns):
                    Recogn_Ans.corr = 1
                else:
                    Recogn_Ans.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in RecognComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Recogn"-------
    for thisComponent in RecognComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if Recogn_Ans.keys in ['', [], None]:  # No response was made
        Recogn_Ans.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           Recogn_Ans.corr = 1;  # correct non-response
        else:
           Recogn_Ans.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_Recogn (TrialHandler)
    trials_Recogn.addData('Recogn_Ans.keys',Recogn_Ans.keys)
    trials_Recogn.addData('Recogn_Ans.corr', Recogn_Ans.corr)
    if Recogn_Ans.keys != None:  # we had a response
        trials_Recogn.addData('Recogn_Ans.rt', Recogn_Ans.rt)
    # the Routine "Recogn" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_Recogn'


# ------Prepare to start Routine "Goodbye"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
# keep track of which components have finished
GoodbyeComponents = [Goodbye_text]
for thisComponent in GoodbyeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GoodbyeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Goodbye"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = GoodbyeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GoodbyeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Goodbye_text* updates
    if Goodbye_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Goodbye_text.frameNStart = frameN  # exact frame index
        Goodbye_text.tStart = t  # local t and not account for scr refresh
        Goodbye_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Goodbye_text, 'tStartRefresh')  # time at next scr refresh
        Goodbye_text.setAutoDraw(True)
    if Goodbye_text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > Goodbye_text.tStartRefresh + 5.0-frameTolerance:
            # keep track of stop time/frame for later
            Goodbye_text.tStop = t  # not accounting for scr refresh
            Goodbye_text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(Goodbye_text, 'tStopRefresh')  # time at next scr refresh
            Goodbye_text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GoodbyeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Goodbye"-------
for thisComponent in GoodbyeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
