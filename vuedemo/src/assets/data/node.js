const AllData = {
  nodeInfo: { nodeId: '0005', protocol: 'http', port: 3344 },
  workDirs: {
    scriptDirs: 'D:/scriptDir',
    resourceDirs: 'D:/resourceDirs',
    pythonLibDirs: 'C:/pythonLibDirs',
    reportDir: 'reportDir',
    rootDir: 'D:/rootDir',
    caseVarDir: 'D:/caseVarDir',
    extFunctionDir: null,
    wavBenchmarkDir: null,
    candataFile: 'candataFile'
  },
  executionCtrl: {
    loadCaseVarPerTask: false,
    gatherDUTPerfInfoPerTask: false,
    cacheLogcatInDUT: false,
    extFunctionDefinePath: 'extFunctionDefinePath',
    taskExtFunctionLabels: '',
    caseExtFunctionLabels: ''
  },
  peripherals: {
    recordMultiAudioMics: {
      microPhone: [
        { micName: 'usb', deviceID: 'deviceID1' },
        { micName: 'camera', deviceID: 'deviceID2' }
      ]
    },
    playMultiAudioSpeakers: { speaker: [] },
    cameraName: 'cameraName',
    cameraAudioName: 'cameraAudioName',
    audioName: 'audioName',
    readSerialPort: 'COM0',
    writeSerialPort: 'COM1',
    powerSupplySerialPort: 'COM2'
  }
}
export var title1 = 'this is title1'
export var title2 = 'this is title2'

export default {
  allData: AllData
}
