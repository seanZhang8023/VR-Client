/**
 * Strings for the Agent application.
 * Localized for English.
 */
export default {

  // Single word strings.
  Addagent: 'Add Agent',
  Brand: 'Live Support - Agent',
  Login: 'Login',
  No: 'No',
  Password: 'Password',
  Save: 'Save',
  Username: 'Username',
  Yes: 'Yes',
  Send: 'Send',
  timeFormat: 'MMMM Do YYYY, h:mm A',

  confirmPassword: 'Confirm Password',
  editProfileLabel: 'Edit Profile',
  firstName: 'First Name',
  lastName: 'Last Name',

  // CustomerPanel component
  CustomerPanel: {
    anonymous: 'Anonymous',
    blankEmail: 'Email not provided',
    requestType: 'Request type',
    customerContext: 'Customer Context',
    detailsUnavailable: 'Call details unavailable.',
    getNext: 'Click on a Chat Request to get started.',
    noContext: 'No context Povided'
  },

  // CustomerSidebar component
  CustomerSidebar: {
    customersWaiting: 'Customers waiting',
    getNext: 'Get Next',
    getRequestError: 'Failed to fetch next service request.',
    noCustomers: 'No customers in the queue.',
    noFilteredRequests: 'No customers in the selected filter.',
    activeCustomers: 'Active Customers',
    voiceChatRequests: 'Voice Chat Requests',
    textChatRequests: 'Text Chat Requests',
    videoChatRequests: 'Video Chat Requests'
  },

  // Customer component
  Customer: {
    callRequested: 'Call Requested',
    anonymous: 'Anonymous',
    min: 'min'
  },

  // Agent Sidebar component
  AgentSidebar: {
    otherAgents: 'Other Agents'
  },

  // Session Component
  Session: {
    end: 'End Session',
    start: 'Start Session'
  },

  // Call Component
  Call: {
    answerCallFailure: 'Failed to answer call',
    endCallFailure: 'Failed to end call',
    initCallFailure: 'Failed to initiate call',
    rejectCallFailure: 'Failed to reject call',
    startScreenShareFailure: 'Failure to start screensharing',
    stopScreenShareFailure: 'Failure to stop screensharing',
    screenShareError: 'Screen share',
    screenShareErrorMessage: 'Screen Sharing is supported only in chrome. For extension',
    startScreenShare: 'Start Share',
    stopScreenShare: 'Stop Share',

    answer: 'Answer Call',
    call: 'Call',
    decline: 'Decline Call',
    end: 'End Call',
    hold: 'Hold',
    mute: 'Mute',
    startVideo: 'Start Video',
    stopVideo: 'Stop Video',
    unHold: 'UnHold',
    unMute: 'UnMute'
  },

  // Chat Component
  Chat: {
    placeholder: 'Type here to send a chat message...'
  },

  // Chat Message Component
  ChatMessage: {
    media: 'Media'
  },

  // Notice messages.
  Notices: {
    // Login container.
    invalidCredentials: 'Invalid credentials.',
    wait: 'Please wait...',

    // EditProfile container.
    updateAgtDetailsError: 'Error in updating Agent Details.',
    updatedAgtDetails: 'Agent Details Updated.',
    updatingAgtDetails: 'Updating...',

    // Admin Container
    createdAgent: 'Agent created on Kandy-Portal. Please do not edit any details over there.',
    creatingAgent: 'Please wait while agent is being created...',
    userCreateError: 'Agent could not be created',

    // Session Component
    endCall: 'Please end the call before ending the session.',

    // Dashboard container
    loggingIn: 'Logging in...'
  },

  Navigation: {
    addAgent: 'Add Agent',
    dashboard: 'Dashboard',
    logout: 'Logout',
    profile: 'Profile'
  },

  Validations: {
    passwordMismatch: 'Password and Confirm password do not match.',
    username: 'Username is mandatory'
  }
}
