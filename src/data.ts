interface Data {
  oldName: string;
  name: string;
  comment: string;
  change: boolean;
}

const data: Data[] = [
  {
    oldName: '',
    name: "arrow-up",
    comment: "",
    change: false
  },
  {
    oldName: "Arrow Back",
    name: "arrow-left",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "arrow-down",
    comment: "",
    change: false
  },
  {
    oldName: "Arrow Forward",
    name: "arrow-right",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "grid-3-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Apps",
    name: "grid-3",
    comment: "",
    change: false
  },
  {
    oldName: "Attach File",
    name: "paperclip",
    comment: "Same established line width like any other icon",
    change: true
  },
  {
    oldName: "Arrow Right",
    name: "caret-right",
    comment: "",
    change: false
  },
  {
    oldName: "Arrow Left",
    name: "caret-left",
    comment: "",
    change: false
  },
  {
    oldName: "Arrow Drop Up",
    name: "caret-up",
    comment: "",
    change: false
  },
  {
    oldName: "Arrow Drop Down",
    name: "caret-down",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "minus",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "minus-circle",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "minus-circle-outline",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "square",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "plus-square",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "plus-square-outline",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "minus-square-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Add",
    name: "plus",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "plus-circle",
    comment: "",
    change: false
  },
  {
    oldName: "Add Circle",
    name: "plus-circle-outline",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "user-circle",
    comment: "",
    change: false
  },
  {
    oldName: "Account Circle",
    name: "user-circle-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Automated",
    name: "automated",
    comment: "",
    change: true
  },
  {
    oldName: "AC Unit",
    name: "snowflake",
    comment: "",
    change: false
  },
  {
    oldName: "All Season",
    name: "climate",
    comment: "",
    change: true
  },
  {
    oldName: "Automated Diagnosis",
    name: "car-play",
    comment: "",
    change: false
  },
  {
    oldName: "ASA",
    name: "asa",
    comment: "",
    change: true
  },
  {
    oldName: "Actuator",
    name: "actuator",
    comment: "",
    change: true
  },
  {
    oldName: "ADAS Guided Calibration",
    name: "screen-play-circle",
    comment: "",
    change: true
  },
  {
    oldName: "ADAS Hardware",
    name: "adas-hardware",
    comment: "",
    change: true
  },
  {
    oldName: "Bookmark Filled",
    name: "bookmark",
    comment: "",
    change: false
  },
  {
    oldName: "Bookmark Outline",
    name: "bookmark-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Bluetooth",
    name: "bluetooth",
    comment: "",
    change: false
  },
  {
    oldName: "Bluetooth disabled",
    name: "bluetooth-slash",
    comment: "",
    change: false
  },
  {
    oldName: "Battery Full",
    name: "battery",
    comment: "",
    change: false
  },
  {
    oldName: "Battery Loading",
    name: "battery-bolt",
    comment: "",
    change: false
  },
  {
    oldName: "Battery Alert",
    name: "battery-exclamation",
    comment: "",
    change: false
  },
  {
    oldName: "Battery 6",
    name: "",
    comment: "",
    change: false
  },
  {
    oldName: "Battery 5",
    name: "battery-good",
    comment: "",
    change: false
  },
  {
    oldName: "Battery 4",
    name: "battery-fair",
    comment: "",
    change: false
  },
  {
    oldName: "Battery 3",
    name: "",
    comment: "",
    change: false
  },
  {
    oldName: "Battery 2",
    name: "battery-weak",
    comment: "",
    change: false
  },
  {
    oldName: "Battery 1",
    name: "",
    comment: "",
    change: false
  },
  {
    oldName: "Battery 0",
    name: "battery-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Business",
    name: "domain",
    comment: "",
    change: false
  },
  {
    oldName: "Check",
    name: "check",
    comment: "",
    change: false
  },
  {
    oldName: "Check Box Indeterminate",
    name: "minus-square",
    comment: "",
    change: false
  },
  {
    oldName: "Check Box Outline Blank",
    name: "square-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Check Box Filled",
    name: "check-square",
    comment: "",
    change: true
  },
  {
    oldName: "Check Box",
    name: "check-square-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Chat Bubble Outline",
    name: "message-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Chat Bubble Filled",
    name: "message",
    comment: "",
    change: false
  },
  {
    oldName: "Calendar",
    name: "calendar",
    comment: "",
    change: false
  },
  {
    oldName: "Circle",
    name: "circle-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Chevron Right",
    name: "chevron-right",
    comment: "",
    change: false
  },
  {
    oldName: "Chevron Left",
    name: "chevron-left",
    comment: "",
    change: false
  },
  {
    oldName: "Chevron Up",
    name: "chevron-up",
    comment: "",
    change: false
  },
  {
    oldName: "Chevron Down",
    name: "chevron-down",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "xmark-circle",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "xmark-square",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "xmark-square-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Close",
    name: "xmark",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "clock-circle",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "clock-rotate-right",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "repeat-circle",
    comment: "",
    change: false
  },
  {
    oldName: "Clock",
    name: "clock-circle-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Close Circle",
    name: "xmark-circle-outline",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "repeat",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "repeat-circle",
    comment: "",
    change: false
  },
  {
    oldName: "Change Circle",
    name: "repeat-circle-outline",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "cloud-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Cloud",
    name: "cloud",
    comment: "",
    change: false
  },
  {
    oldName: "Check Circle",
    name: "check-circle-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Check Circle Filled",
    name: "check-circle",
    comment: "",
    change: false
  },
  {
    oldName: "Clipboard",
    name: "clipboard",
    comment: "",
    change: false
  },
  {
    oldName: "Car",
    name: "car",
    comment: "",
    change: true
  },
  {
    oldName: "Car Filled",
    name: "car-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Car Warning",
    name: "car-exclamation-circle",
    comment: "",
    change: true
  },
  {
    oldName: "Car Connection",
    name: "car-link-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Car Connection Filled",
    name: "car-link",
    comment: "",
    change: false
  },
  {
    oldName: "Call",
    name: "phone-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Call Manage",
    name: "phone-gear-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Chart",
    name: "chart-line",
    comment: "",
    change: false
  },
  {
    oldName: "Code",
    name: "code",
    comment: "",
    change: false
  },
  {
    oldName: "Camera",
    name: "camera-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Camera Filled",
    name: "camera",
    comment: "",
    change: false
  },
  {
    oldName: "Car Electro",
    name: "car-plug",
    comment: "",
    change: true
  },
  {
    oldName: "Car Selection",
    name: "car-magnifier",
    comment: "",
    change: true
  },
  {
    oldName: "Coding",
    name: "binary",
    comment: "",
    change: true
  },
  {
    oldName: "Delete",
    name: "trash",
    comment: "",
    change: true
  },
  {
    oldName: "Directions Car",
    name: "",
    comment: "",
    change: false
  },
  {
    oldName: "Discount",
    name: "percent",
    comment: "",
    change: false
  },
  {
    oldName: "Download",
    name: "",
    comment: "",
    change: false
  },
  {
    oldName: "Dataset",
    name: "",
    comment: "",
    change: false
  },
  {
    oldName: "Drag Handle",
    name: "grip-lines",
    comment: "",
    change: false
  },
  {
    oldName: "Drag Handle Locked",
    name: "grip-lines-locked",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "file",
    comment: "",
    change: false
  },
  {
    oldName: "Description",
    name: "file-lines",
    comment: "",
    change: false
  },
  {
    oldName: "Document Error",
    name: "file-exclamation",
    comment: "",
    change: true
  },
  {
    oldName: "Dark Mode",
    name: "moon",
    comment: "",
    change: false
  },
  {
    oldName: "Diagnosis",
    name: "stethoscope",
    comment: "",
    change: false
  },
  {
    oldName: "Device Connection On",
    name: "smartphones",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "smartphone",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "smartphone-slash",
    comment: "",
    change: false
  },
  {
    oldName: "Device Warning",
    name: "smartphones-exclamation-circle",
    comment: "",
    change: true
  },
  {
    oldName: "Device Connection Off",
    name: "smartphones-slash",
    comment: "",
    change: true
  },
  {
    oldName: "Edit",
    name: "pencil",
    comment: "",
    change: true
  },
  {
    oldName: "Emoticon",
    name: "emoticon-smile",
    comment: "",
    change: false
  },
  {
    oldName: "Error",
    name: "exclamation-circle-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Error Filled",
    name: "exclamation-circle",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "note",
    comment: "",
    change: false
  },
  {
    oldName: "Edit Note",
    name: "note-pencil",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "car-bolt",
    comment: "",
    change: false
  },
  {
    oldName: "Electric Vehicle",
    name: "car-bolt-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Electric Vehicle (Variant 1)",
    name: "bolt",
    comment: "",
    change: true
  },
  {
    oldName: "Electric Vehicle (Variant 2)",
    name: "lightning",
    comment: "",
    change: true
  },
  {
    oldName: "Electric Connector",
    name: "plug",
    comment: "",
    change: true
  },
  {
    oldName: "Error diagnostics",
    name: "clipboard-checklist",
    comment: "",
    change: true
  },
  {
    oldName: "exclamation",
    name: "exclamation",
    comment: "",
    change: true
  },
  {
    oldName: "Export notes",
    name: "note-arrow-up-right-circle",
    comment: "",
    change: true
  },
  {
    oldName: "Event",
    name: "calendar-event",
    comment: "",
    change: true
  },
  {
    oldName: "Fast Forward",
    name: "forward",
    comment: "",
    change: false
  },
  {
    oldName: "Fast Rewind",
    name: "backward",
    comment: "",
    change: false
  },
  {
    oldName: "Folder Outline",
    name: "folder-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Folder Filled",
    name: "folder",
    comment: "",
    change: false
  },
  {
    oldName: "Filter List",
    name: "filter-bars",
    comment: "",
    change: false
  },
  {
    oldName: "Filter",
    name: "filter",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "left-to-bracket",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "right-to-bracket",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "down-from-bracket",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "left-from-bracket",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "up-to-bracket",
    comment: "",
    change: false
  },
  {
    oldName: "File Upload",
    name: "up-from-bracket",
    comment: "",
    change: false
  },
  {
    oldName: "File Download",
    name: "down-to-bracket",
    comment: "",
    change: false
  },
  {
    oldName: "Flag",
    name: "flag",
    comment: "",
    change: true
  },
  {
    oldName: "Grid View",
    name: "grid-2-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Grid View Filled",
    name: "grid-2",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "question",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "question-circle",
    comment: "",
    change: false
  },
  {
    oldName: "Help Circle",
    name: "question-circle-outline",
    comment: "",
    change: true
  },
  {
    oldName: "History",
    name: "clock-rotate-left",
    comment: "",
    change: false
  },
  {
    oldName: "High Voltage",
    name: "",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "home-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Home",
    name: "home",
    comment: "",
    change: true
  },
  {
    oldName: "Info Circle",
    name: "info-circle-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Info Circle Filled",
    name: "info-circle",
    comment: "",
    change: true
  },
  {
    oldName: "Inventory",
    name: "clipboard-check",
    comment: "",
    change: true
  },
  {
    oldName: "indicator S",
    name: "period",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "circle",
    comment: "",
    change: false
  },
  {
    oldName: "indicator M",
    name: "circle-small",
    comment: "",
    change: false
  },
  {
    oldName: "Log Out",
    name: "right-from-bracket",
    comment: "",
    change: true
  },
  {
    oldName: "Link Add",
    name: "link-plus",
    comment: "",
    change: true
  },
  {
    oldName: "Link Off",
    name: "link-slash",
    comment: "",
    change: false
  },
  {
    oldName: "Link",
    name: "link",
    comment: "",
    change: false
  },
  {
    oldName: "Light Mode",
    name: "sun",
    comment: "",
    change: true
  },
  {
    oldName: "Language",
    name: "globe",
    comment: "",
    change: true
  },
  {
    oldName: "List",
    name: "list",
    comment: "",
    change: true
  },
  {
    oldName: "Menu",
    name: "bars",
    comment: "",
    change: false
  },
  {
    oldName: "Menu Close",
    name: "bars-chevron-left",
    comment: "",
    change: true
  },
  {
    oldName: "Menu Open",
    name: "bars-chevron-right",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "envelope-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Mail",
    name: "envelope",
    comment: "",
    change: true
  },
  {
    oldName: "More Vertical",
    name: "ellipsis-vertical",
    comment: "",
    change: false
  },
  {
    oldName: "Mic",
    name: "microphone",
    comment: "",
    change: false
  },
  {
    oldName: "mega macs X",
    name: "mega-macs-x",
    comment: "",
    change: true
  },
  {
    oldName: "Network Check",
    name: "wifi-signal-meter",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "arrow-bottom-right-from-square",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "arrow-bottom-left-from-square",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "arrow-up-left-from-square",
    comment: "",
    change: false
  },
  {
    oldName: "Open in New",
    name: "arrow-up-right-from-square",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "arrow-bottom-right-top-left",
    comment: "",
    change: false
  },
  {
    oldName: "Open in Full",
    name: "arrow-bottom-left-top-right",
    comment: "",
    change: true
  },
  {
    oldName: "Pause",
    name: "pause",
    comment: "",
    change: false
  },
  {
    oldName: "Play Arrow",
    name: "play",
    comment: "",
    change: false
  },
  {
    oldName: "People",
    name: "user-multiple",
    comment: "",
    change: true
  },
  {
    oldName: "User",
    name: "user",
    comment: "",
    change: false
  },
  {
    oldName: "Person Add",
    name: "user-plus",
    comment: "",
    change: true
  },
  {
    oldName: "Phone",
    name: "phone",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "location-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Pointer",
    name: "location",
    comment: "",
    change: false
  },
  {
    oldName: "Product List",
    name: "description-list",
    comment: "",
    change: false
  },
  {
    oldName: "Print",
    name: "print",
    comment: "",
    change: true
  },
  {
    oldName: "Power off",
    name: "power",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "sliders",
    comment: "",
    change: false
  },
  {
    oldName: "Parameter",
    name: "jigsaw",
    comment: "",
    change: true
  },
  {
    oldName: "Query Stats",
    name: "chart-line-magnifier",
    comment: "",
    change: true
  },
  {
    oldName: "Question Answer",
    name: "message-multiple",
    comment: "",
    change: true
  },
  {
    oldName: "Radio Button Unselected",
    name: "",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "circle-radio",
    comment: "",
    change: false
  },
  {
    oldName: "Radio Button Selected",
    name: "circle-radio-outline",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "rotate-left",
    comment: "",
    change: false
  },
  {
    oldName: "Refresh",
    name: "rotate-right",
    comment: "",
    change: false
  },
  {
    oldName: "Rule",
    name: "checklist",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "undo",
    comment: "",
    change: false
  },
  {
    oldName: "Redo",
    name: "redo",
    comment: "",
    change: true
  },
  {
    oldName: "Radar",
    name: "radar",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "rotate-right-wrench",
    comment: "",
    change: false
  },
  {
    oldName: "Reset Wrench",
    name: "rotate-left-wrench",
    comment: "",
    change: true
  },
  {
    oldName: "Receipt",
    name: "receipt",
    comment: "",
    change: true
  },
  {
    oldName: "Share",
    name: "share",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "right-from-square",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "down-from-square",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "left-from-square",
    comment: "",
    change: false
  },
  {
    oldName: "Share iOS",
    name: "up-from-square",
    comment: "",
    change: false
  },
  {
    oldName: "Skip_Previous",
    name: "backward-step",
    comment: "",
    change: true
  },
  {
    oldName: "Skip_Next",
    name: "forward-step",
    comment: "",
    change: true
  },
  {
    oldName: "Star_Filled",
    name: "star",
    comment: "",
    change: true
  },
  {
    oldName: "Star Border",
    name: "star-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Search",
    name: "magnifier",
    comment: "",
    change: true
  },
  {
    oldName: "Settings",
    name: "gear-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Settings Filled",
    name: "gear",
    comment: "",
    change: false
  },
  {
    oldName: "Speed",
    name: "gauge",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "signal-slash",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "signal-weak",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "signal-fair",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "signal-good",
    comment: "",
    change: false
  },
  {
    oldName: "Signal Cellular",
    name: "signal",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "scan",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "scan-magnifier",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "qrcode",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "scan-qrcode",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "barcode",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "scan-barcode",
    comment: "",
    change: false
  },
  {
    oldName: "Snapshot",
    name: "scan-lines",
    comment: "",
    change: false
  },
  {
    oldName: "Spinner",
    name: "spinner",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "paper-plane-top",
    comment: "",
    change: false
  },
  {
    oldName: "Send",
    name: "paper-plane-top-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Shopping_Bag",
    name: "bag",
    comment: "",
    change: true
  },
  {
    oldName: "Server",
    name: "server-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Server Filled",
    name: "server",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "screen",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "fullscreen",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "fullscreen-exit",
    comment: "",
    change: false
  },
  {
    oldName: "Screenshot",
    name: "screenshot",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "lifering-plus",
    comment: "",
    change: false
  },
  {
    oldName: "Support",
    name: "lifering",
    comment: "",
    change: true
  },
  {
    oldName: "Support Add",
    name: "lifering-plus-circle",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "bars-sort-ascending",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "bars-sort-descending",
    comment: "",
    change: false
  },
  {
    oldName: "Sort",
    name: "bars-sort",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "arrow-uturn-up",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "arrow-uturn-right",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "arrow-uturn-down",
    comment: "",
    change: false
  },
  {
    oldName: "Service_Reset",
    name: "arrow-uturn-left",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "triangle-exclamation",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "triangle-outline",
    comment: "",
    change: false
  },
  {
    oldName: "Triangle",
    name: "triangle",
    comment: "",
    change: true
  },
  {
    oldName: "Tool",
    name: "wrench-outline",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "wrench",
    comment: "",
    change: false
  },
  {
    oldName: "Tool Corrected Filled",
    name: "wrench-check",
    comment: "",
    change: true
  },
  {
    oldName: "Thumbs Down",
    name: "thumbs-down-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Thumbs Down Filled",
    name: "thumbs-down",
    comment: "",
    change: true
  },
  {
    oldName: "Thumbs Up",
    name: "thumbs-up-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Thumbs Up Filled",
    name: "thumbs-up",
    comment: "",
    change: true
  },
  {
    oldName: "Tow Truck",
    name: "tow-truck",
    comment: "Adjusted retangle corner radius like we have in other icons",
    change: true
  },
  {
    oldName: "Truck",
    name: "truck",
    comment: "Same wheel size than tow truck",
    change: true
  },
  {
    oldName: '',
    name: "thermometer-lines",
    comment: "",
    change: false
  },
  {
    oldName: "Thermostat",
    name: "thermometer",
    comment: "",
    change: true
  },
  {
    oldName: '',
    name: "clock-rotate-left",
    comment: "",
    change: false
  },
  {
    oldName: "Update",
    name: "clock-rotate-right",
    comment: "",
    change: true
  },
  {
    oldName: "USB",
    name: "usb",
    comment: "",
    change: false
  },
  {
    oldName: "Visibility",
    name: "eye",
    comment: "",
    change: false
  },
  {
    oldName: "Visibility Off",
    name: "eye-slash",
    comment: "",
    change: false
  },
  {
    oldName: "VCI",
    name: "vci",
    comment: "",
    change: true
  },
  {
    oldName: "VCI Offline",
    name: "vci-slash",
    comment: "",
    change: true
  },
  {
    oldName: "Warning",
    name: "triangle-exclamation-outline",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "wifi-slash",
    comment: "",
    change: false
  },
  {
    oldName: "Wifi",
    name: "wifi",
    comment: "",
    change: false
  },
  {
    oldName: "Wheels",
    name: "wheels-outline",
    comment: "",
    change: true
  },
  {
    oldName: "Wheels Filled",
    name: "wheels",
    comment: "",
    change: false
  },
  {
    oldName: '',
    name: "credit-card-dollar",
    comment: "macs365 sidebar icon",
    change: false
  },
  {
    oldName: '',
    name: "laptop-smartphone",
    comment: "macs365 sidebar icon",
    change: false
  },
  {
    oldName: '',
    name: "certificate",
    comment: "macs365 sidebar icon",
    change: false
  },
  {
    oldName: '',
    name: "certificate-outline",
    comment: "macs365 sidebar icon",
    change: false
  },
  {
    oldName: '',
    name: "language",
    comment: "",
    change: false
  },
  {
    oldName: "Workshop",
    name: "garage",
    comment: "Wider entry to make it more look like a workshop/garage",
    change: true
  },
  {
    oldName: "Wifi Bar 1",
    name: "wifi-weak",
    comment: "",
    change: true
  },
  {
    oldName: "Wifi Bar 2",
    name: "wifi-fair",
    comment: "",
    change: true
  },
  {
    oldName: "Wifi Bar 3",
    name: "wifi-good",
    comment: "",
    change: true
  },
  {
    oldName: "Wifi Bar 4",
    name: "",
    comment: "",
    change: false
  },
  {
    oldName: "Wifi Bar 5",
    name: "",
    comment: "",
    change: false
  },
];

export default data;
