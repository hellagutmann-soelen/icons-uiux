export type Marked = '' | 'changed' | 'deleted';

export interface Data {
  id: string,
  oldName: string;
  name: string;
  comment: string;
  change: boolean;
  marked?: Marked;
}

const data: Data[] = [
  {
    id: '708f43af-4c43-46f9-b046-511c0637c265',
    oldName: '',
    name: 'arrow-up',
    comment: '',
    change: false
  },
  {
    id: '5d36a6aa-bc4f-4e0d-98d9-9083dbc528e9',
    oldName: 'Arrow Back',
    name: 'arrow-left',
    comment: '',
    change: false
  },
  {
    id: 'b4318077-8eb5-4c98-a4ef-ead5498c8178',
    oldName: '',
    name: 'arrow-down',
    comment: '',
    change: false
  },
  {
    id: '03926483-7b25-47a8-b798-2bc9acd3ab3f',
    oldName: 'Arrow Forward',
    name: 'arrow-right',
    comment: '',
    change: false
  },
  {
    id: '3e0965e7-a8a0-466a-a7e3-401f8ea7d1f9',
    oldName: '',
    name: 'grid-3-outline',
    comment: '',
    change: false
  },
  {
    id: 'a4566347-2661-4fa6-b664-1343ca8d6d7f',
    oldName: 'Apps',
    name: 'grid-3',
    comment: '',
    change: false
  },
  {
    id: '5cf724ae-a9b5-4e6e-8e5f-28ca3da8598e',
    oldName: 'Attach File',
    name: 'paperclip',
    comment: 'Same established line width like any other icon',
    change: true
  },
  {
    id: '7ba76665-33e8-4555-8fb9-51bd800b8eda',
    oldName: 'Arrow Right',
    name: 'caret-right',
    comment: '',
    change: false
  },
  {
    id: '14a35456-2d84-4318-8363-fbf20e57ca13',
    oldName: 'Arrow Left',
    name: 'caret-left',
    comment: '',
    change: false
  },
  {
    id: '675f0dbc-6f33-4c3e-acbf-105a9601de5c',
    oldName: 'Arrow Drop Up',
    name: 'caret-up',
    comment: '',
    change: false
  },
  {
    id: 'd55b61f4-1f44-4aa0-9b30-4e9909dbb1e7',
    oldName: 'Arrow Drop Down',
    name: 'caret-down',
    comment: '',
    change: false
  },
  {
    id: 'e08d6859-363d-47cb-ae27-b96bd7dfe1eb',
    oldName: '',
    name: 'minus',
    comment: '',
    change: false
  },
  {
    id: '5498ef01-1283-4bfe-8f42-4bf3f31cf665',
    oldName: '',
    name: 'circle-minus',
    comment: '',
    change: false
  },
  {
    id: 'f355e0f1-f545-4d29-b2d5-a6bac8eaf56e',
    oldName: '',
    name: 'circle-minus-outline',
    comment: '',
    change: false
  },
  {
    id: '0b9cce53-a1bf-4fef-8c54-f5bc7760d745',
    oldName: '',
    name: 'square',
    comment: '',
    change: false
  },
  {
    id: '8153566f-fa6c-4e66-ab89-79509b090c02',
    oldName: '',
    name: 'square-plus',
    comment: '',
    change: false
  },
  {
    id: '15a17753-f7fd-4972-b20b-e0511c61fccb',
    oldName: '',
    name: 'square-plus-outline',
    comment: '',
    change: false
  },
  {
    id: '63274f3e-8f16-4e2d-8db5-0d39a0555f1d',
    oldName: '',
    name: 'square-minus-outline',
    comment: '',
    change: false
  },
  {
    id: '56643031-4dee-438f-bbc5-94b5a2f48ea6',
    oldName: 'Add',
    name: 'plus',
    comment: '',
    change: false
  },
  {
    id: 'b4dfeb4d-a8ff-4179-8b94-82eeac194a2a',
    oldName: '',
    name: 'circle-plus',
    comment: '',
    change: false
  },
  {
    id: 'be83208a-35c3-488f-b4f3-9ef73f9f32d4',
    oldName: 'Add Circle',
    name: 'circle-plus-outline',
    comment: '',
    change: false
  },
  {
    id: '1b8c8907-0233-45ed-a3dc-8c040a3522c7',
    oldName: '',
    name: 'user-circle',
    comment: '',
    change: false
  },
  {
    id: 'fa4d04f0-030c-4ac0-9ba9-f4fbe17b13fe',
    oldName: 'Account Circle',
    name: 'user-circle-outline',
    comment: '',
    change: false
  },
  {
    id: 'bab58bca-0a3d-42c5-8a06-41f8cd4f8efe',
    oldName: 'Automated',
    name: 'automated',
    comment: '',
    change: true
  },
  {
    id: '4b39d814-74c4-40cc-a15b-da8ae4294e73',
    oldName: 'AC Unit',
    name: 'snowflake',
    comment: '',
    change: false
  },
  {
    id: 'f5a0044c-ab0d-4c17-8a56-4defb5e9cb80',
    oldName: 'All Season',
    name: 'climate',
    comment: '',
    change: true
  },
  {
    id: '0fd6f364-2666-4842-a111-f7ee3ec3172c',
    oldName: 'Automated Diagnosis',
    name: 'car-play',
    comment: '',
    change: false
  },
  {
    id: '0c09b71b-cf5b-4677-9f8d-96d5759ffa72',
    oldName: 'ASA',
    name: 'asa',
    comment: '',
    change: true
  },
  {
    id: '543ec74b-ceab-47bb-8743-b14f223fb32f',
    oldName: 'Actuator',
    name: 'actuator',
    comment: '',
    change: true
  },
  {
    id: 'f011102d-0ef9-4298-a752-371f7fa65f6a',
    oldName: 'ADAS Guided Calibration',
    name: 'screen-play-circle',
    comment: '',
    change: true
  },
  {
    id: '47d95267-8470-43d6-b37c-5a0e34c61a05',
    oldName: 'ADAS Hardware',
    name: 'adas-hardware',
    comment: '',
    change: true
  },
  {
    id: '3ed5fc6c-08e9-465e-8dfb-55e63cde6f66',
    oldName: 'Bookmark Filled',
    name: 'bookmark',
    comment: '',
    change: false
  },
  {
    id: '6914d20d-1f10-4366-b469-6ff7f2c683a7',
    oldName: 'Bookmark Outline',
    name: 'bookmark-outline',
    comment: '',
    change: false
  },
  {
    id: '699859da-d36b-4b4f-94a9-b21b0769dd89',
    oldName: 'Bluetooth',
    name: 'bluetooth',
    comment: '',
    change: false
  },
  {
    id: '19efd463-ee55-4179-a29f-ec7b96bbad95',
    oldName: 'Bluetooth disabled',
    name: 'bluetooth-slash',
    comment: '',
    change: false
  },
  {
    id: '69221fec-55c6-4b86-a79e-a384bdc8259e',
    oldName: 'Battery Full',
    name: 'battery',
    comment: '',
    change: false
  },
  {
    id: '95fc67c6-21e0-47d3-b9ed-7d5ada61136d',
    oldName: 'Battery Loading',
    name: 'battery-bolt',
    comment: '',
    change: false
  },
  {
    id: '25adb42e-13be-4af6-9be1-e25212311f7e',
    oldName: 'Battery Alert',
    name: 'battery-exclamation',
    comment: '',
    change: false
  },
  {
    id: 'b4f5f53b-31b6-4cd8-9061-ee98f3bdc053',
    oldName: 'Battery 6',
    name: '',
    comment: '',
    change: false
  },
  {
    id: '743cc4da-ade6-47c8-89fb-e57a768747ac',
    oldName: 'Battery 5',
    name: 'battery-good',
    comment: '',
    change: false
  },
  {
    id: '0e6d543a-2532-4c79-ab8a-bf852b6da8d9',
    oldName: 'Battery 4',
    name: 'battery-fair',
    comment: '',
    change: false
  },
  {
    id: '726969c1-cc77-49d9-a53d-7ba049effb3f',
    oldName: 'Battery 3',
    name: '',
    comment: '',
    change: false
  },
  {
    id: '7377535a-5d53-42d9-bbbd-7924c34481cb',
    oldName: 'Battery 2',
    name: 'battery-weak',
    comment: '',
    change: false
  },
  {
    id: '2523e912-3b3f-4678-8be3-96ff92dfd891',
    oldName: 'Battery 1',
    name: '',
    comment: '',
    change: false
  },
  {
    id: '7d456d55-064b-442c-aa10-8aedb5dcda50',
    oldName: 'Battery 0',
    name: 'battery-outline',
    comment: '',
    change: false
  },
  {
    id: '1c17a507-7c64-4cd5-abc6-cf3dbea55505',
    oldName: 'Business',
    name: 'domain',
    comment: '',
    change: false
  },
  {
    id: 'cb05c7dc-0652-4a07-92d7-6723120b71f3',
    oldName: 'Check',
    name: 'check',
    comment: '',
    change: false
  },
  {
    id: '5af37b3e-e836-4bbb-84f3-98befbd15f79',
    oldName: 'Check Box Indeterminate',
    name: 'square-minus',
    comment: '',
    change: false
  },
  {
    id: '4d36b29b-b9bd-4fb0-91e3-e5fd889730a8',
    oldName: 'Check Box Outline Blank',
    name: 'square-outline',
    comment: '',
    change: false
  },
  {
    id: 'c995937e-cc84-499a-855f-94c5005f17fb',
    oldName: 'Check Box Filled',
    name: 'check-square',
    comment: '',
    change: true
  },
  {
    id: '1327ec96-404e-4095-8a2f-e414f27ef703',
    oldName: 'Check Box',
    name: 'check-square-outline',
    comment: '',
    change: true
  },
  {
    id: '4afe84c5-9106-4ac8-9745-0c00dc5a8e62',
    oldName: 'Chat Bubble Outline',
    name: 'message-outline',
    comment: '',
    change: true
  },
  {
    id: '29727845-1c9b-4885-b7e8-87595d9536e6',
    oldName: 'Chat Bubble Filled',
    name: 'message',
    comment: '',
    change: false
  },
  {
    id: '0e591532-7f9d-44d9-b0cb-1c1dca5ecd08',
    oldName: 'Calendar',
    name: 'calendar',
    comment: '',
    change: false
  },
  {
    id: '71e04061-4b3a-4746-8941-894ba54150df',
    oldName: 'Circle',
    name: 'circle-outline',
    comment: '',
    change: true
  },
  {
    id: 'b2e4cebd-7d99-4d8f-8d89-8d1f9967aa36',
    oldName: 'Chevron Right',
    name: 'chevron-right',
    comment: '',
    change: false
  },
  {
    id: '3aa048cf-375c-4aab-a697-f26ec1e65209',
    oldName: 'Chevron Left',
    name: 'chevron-left',
    comment: '',
    change: false
  },
  {
    id: '6f4943cc-960d-428f-b47f-4414b2a4aa8d',
    oldName: 'Chevron Up',
    name: 'chevron-up',
    comment: '',
    change: false
  },
  {
    id: 'd27438aa-c389-4e15-971e-dc14126c3f2c',
    oldName: 'Chevron Down',
    name: 'chevron-down',
    comment: '',
    change: false
  },
  {
    id: '4e44597a-382e-4ad2-9a40-2a1c10a879d9',
    oldName: '',
    name: 'circle-xmark',
    comment: '',
    change: false
  },
  {
    id: '8e22e9f9-e34c-4370-8ee9-df4752916994',
    oldName: '',
    name: 'square-xmark',
    comment: '',
    change: false
  },
  {
    id: 'a67e7e8c-61b2-4a29-92c7-2c6426a13f4b',
    oldName: '',
    name: 'square-xmark-outline',
    comment: '',
    change: false
  },
  {
    id: 'cc145e9a-caa6-4069-ac2c-dc128c6ca600',
    oldName: 'Close',
    name: 'xmark',
    comment: '',
    change: true
  },
  {
    id: '0e7f975b-428e-4988-a21f-1a6dbf2d2580',
    oldName: '',
    name: 'clock-circle',
    comment: '',
    change: false
  },
  {
    id: '1ec713fa-72fd-47fa-a094-635a4a7b71c3',
    oldName: 'Clock',
    name: 'clock-circle-outline',
    comment: '',
    change: true
  },
  {
    id: 'd1b231b2-2cdb-4ab9-867e-bcfa8289a822',
    oldName: 'Close Circle',
    name: 'circle-xmark-outline',
    comment: '',
    change: false
  },
  {
    id: 'e760c6bb-790e-4bff-8660-d66ed9967922',
    oldName: '',
    name: 'repeat',
    comment: '',
    change: false
  },
  {
    id: '0ca13335-2529-47c4-9c87-e769c8e966a7',
    oldName: '',
    name: 'repeat-circle',
    comment: '',
    change: false
  },
  {
    id: '559b7cfc-b83d-46c4-a687-5a1be648ee44',
    oldName: 'Change Circle',
    name: 'repeat-circle-outline',
    comment: '',
    change: true
  },
  {
    id: 'c1c30465-f2c4-4af0-9fb4-47807bbc48bb',
    oldName: '',
    name: 'cloud-outline',
    comment: '',
    change: false
  },
  {
    id: '50385c63-d4b9-4365-804b-396105ab82c1',
    oldName: 'Cloud',
    name: 'cloud',
    comment: '',
    change: true
  },
  {
    id: '34d345a1-b5b6-4986-a5b3-f7f54ce8198e',
    oldName: 'Check Circle',
    name: 'check-circle-outline',
    comment: '',
    change: false
  },
  {
    id: 'ad2f020c-1929-49e4-8b07-da38fc335e90',
    oldName: 'Check Circle Filled',
    name: 'check-circle',
    comment: '',
    change: false
  },
  {
    id: 'd00ff304-439c-4103-bf10-3626ddbf0539',
    oldName: 'Clipboard',
    name: 'clipboard',
    comment: '',
    change: false
  },
  {
    id: 'e96649c4-2ac7-495a-bbfb-89f88bb957ee',
    oldName: 'Car',
    name: 'car',
    comment: '',
    change: true
  },
  {
    id: '1a304b85-8a8d-41bd-b84f-f067967ffee1',
    oldName: 'Car Filled',
    name: 'car-outline',
    comment: '',
    change: true
  },
  {
    id: '99f56457-c049-4ec2-90fb-7226f1ad3135',
    oldName: 'Car Warning',
    name: 'car-exclamation-circle',
    comment: '',
    change: true
  },
  {
    id: 'e0e25e37-cba4-4567-be02-344770996cd0',
    oldName: 'Car Connection',
    name: 'car-link-outline',
    comment: '',
    change: false
  },
  {
    id: '1a7fae24-5540-48c4-b4ee-1f815d34301f',
    oldName: 'Car Connection Filled',
    name: 'car-link',
    comment: '',
    change: false
  },
  {
    id: '4f58e31b-bc8b-44a1-aa4e-91f76f7ee2b3',
    oldName: 'Call',
    name: 'phone-outline',
    comment: '',
    change: true
  },
  {
    id: '79381a57-8dcc-45b7-85bf-85c2afde25d9',
    oldName: 'Call Manage',
    name: 'phone-gear-outline',
    comment: '',
    change: true
  },
  {
    id: 'c3418996-e889-4738-acd9-01a37354c713',
    oldName: 'Chart',
    name: 'chart-line',
    comment: '',
    change: false
  },
  {
    id: '753cdc6c-7579-4de0-8731-b79ef7033790',
    oldName: 'Code',
    name: 'code',
    comment: '',
    change: false
  },
  {
    id: '42270a5d-ea52-410d-ab7f-28beae9ff7ed',
    oldName: 'Camera',
    name: 'camera-outline',
    comment: '',
    change: false
  },
  {
    id: '64cbd9e8-e2b8-4f42-a1eb-145f12e388ec',
    oldName: 'Camera Filled',
    name: 'camera',
    comment: '',
    change: false
  },
  {
    id: '49bc1adb-d876-48f4-a3db-a1cbc49fff7a',
    oldName: 'Car Electro',
    name: 'car-plug',
    comment: '',
    change: true
  },
  {
    id: '99b9432b-87dc-4bfc-8064-dc5a2140d261',
    oldName: 'Car Selection',
    name: 'car-magnifier',
    comment: '',
    change: true
  },
  {
    id: 'a1618a86-30c1-4905-b8d4-472c5faa2e78',
    oldName: 'Coding',
    name: 'binary',
    comment: '',
    change: true
  },
  {
    id: '05307326-4742-4993-8480-f93f8a417c14',
    oldName: 'Delete',
    name: 'trash',
    comment: '',
    change: true
  },
  {
    id: '64a1e72c-ce78-4a4b-9c9f-d4e59703c26b',
    oldName: 'Directions Car',
    name: '',
    comment: '',
    change: false
  },
  {
    id: 'f0cbba79-9869-429d-b80f-1a25784027bf',
    oldName: 'Discount',
    name: 'percent',
    comment: '',
    change: false
  },
  {
    id: '220d9cf5-a357-4c1c-9289-25e4d457129e',
    oldName: 'Download',
    name: '',
    comment: '',
    change: false
  },
  {
    id: '03c8b7aa-d05e-4405-84ca-375cb2bb8f3a',
    oldName: 'Dataset',
    name: '',
    comment: '',
    change: false
  },
  {
    id: 'b8753214-dc79-4715-b85c-a5242a34d9b3',
    oldName: 'Drag Handle',
    name: 'grip-lines',
    comment: '',
    change: false
  },
  {
    id: '7c62f3b8-2a33-426d-a2d6-4c6640fe391d',
    oldName: 'Drag Handle Locked',
    name: 'grip-lines-locked',
    comment: '',
    change: true
  },
  {
    id: 'd09aece9-2c40-479a-80fa-1e7199313a45',
    oldName: '',
    name: 'file',
    comment: '',
    change: false
  },
  {
    id: 'c6776dc3-e1c9-44fc-969b-7974ca792578',
    oldName: 'Description',
    name: 'file-lines',
    comment: '',
    change: false
  },
  {
    id: 'c70b8377-eb15-472d-b0da-f0eb936f014f',
    oldName: 'Document Error',
    name: 'file-exclamation',
    comment: '',
    change: true
  },
  {
    id: '446de9e3-0f0b-4cde-90dd-84aa8b240d04',
    oldName: 'Dark Mode',
    name: 'moon',
    comment: '',
    change: false
  },
  {
    id: 'd0009864-fd1f-4599-a297-8d3b3705f772',
    oldName: 'Diagnosis',
    name: 'stethoscope',
    comment: '',
    change: false
  },
  {
    id: '902fab3b-a8d5-4e9b-9575-3b2adcf1e5d5',
    oldName: 'Device Connection On',
    name: 'smartphones',
    comment: '',
    change: true
  },
  {
    id: '509f4fc7-8eb1-4db6-b4f3-27f32c9be238',
    oldName: '',
    name: 'smartphone',
    comment: '',
    change: false
  },
  {
    id: '46677326-6917-425f-8f8c-868e52ac99f9',
    oldName: '',
    name: 'smartphone-slash',
    comment: '',
    change: false
  },
  {
    id: 'd7945e74-9871-4d75-9e52-db8a8f3bd4ff',
    oldName: 'Device Warning',
    name: 'smartphones-exclamation-circle',
    comment: '',
    change: true
  },
  {
    id: '270ca1b0-f132-4674-abe4-f53c46ebeada',
    oldName: 'Device Connection Off',
    name: 'smartphones-slash',
    comment: '',
    change: true
  },
  {
    id: 'd7188ab1-2d75-43d7-9dd0-6506fed41e61',
    oldName: 'Edit',
    name: 'pencil',
    comment: '',
    change: true
  },
  {
    id: 'c23ec9e0-0f1e-4235-acc9-234646c8c813',
    oldName: 'Emoticon',
    name: 'emoticon-smile',
    comment: '',
    change: false
  },
  {
    id: '339fc7ed-6b29-46fb-9470-fc8c14e5bcde',
    oldName: 'Error',
    name: 'exclamation-circle-outline',
    comment: '',
    change: false
  },
  {
    id: 'e9e57521-7da8-4fc9-9d3e-96896c9ca420',
    oldName: 'Error Filled',
    name: 'exclamation-circle',
    comment: '',
    change: true
  },
  {
    id: '230b4a8e-97b7-411d-bf01-abd32c9a875e',
    oldName: '',
    name: 'note',
    comment: '',
    change: false
  },
  {
    id: 'a5445f1e-3891-41aa-84c9-2883dcbbcdf1',
    oldName: 'Edit Note',
    name: 'note-pencil',
    comment: '',
    change: true
  },
  {
    id: 'a4ad68ea-8cda-4b27-b1a2-d54ecef17a44',
    oldName: '',
    name: 'car-bolt',
    comment: '',
    change: false
  },
  {
    id: '6552aed8-7aed-4d3d-b24c-751a09298511',
    oldName: 'Electric Vehicle',
    name: 'car-bolt-outline',
    comment: '',
    change: true
  },
  {
    id: '27b71020-0938-47e7-b4f9-43d73374e2e6',
    oldName: 'Electric Vehicle (Variant 1)',
    name: 'bolt',
    comment: '',
    change: true
  },
  {
    id: '31b2a55f-354f-411a-9176-05d1b4e93cdd',
    oldName: 'Electric Vehicle (Variant 2)',
    name: 'lightning',
    comment: '',
    change: true
  },
  {
    id: '28ebd476-bcd6-475a-be58-3b81e185fa57',
    oldName: 'Electric Connector',
    name: 'plug',
    comment: '',
    change: true
  },
  {
    id: '11ba2bfa-caaa-4507-9dd0-9db354d3528c',
    oldName: 'Error diagnostics',
    name: 'clipboard-checklist',
    comment: '',
    change: true
  },
  {
    id: '09119a53-0b5a-4bfe-9d6e-9262aa64eaac',
    oldName: 'exclamation',
    name: 'exclamation',
    comment: '',
    change: true
  },
  {
    id: 'c6e18794-3b88-4e1a-b5b5-19eb5ac8ffb9',
    oldName: 'Export notes',
    name: 'note-arrow-up-right-circle',
    comment: '',
    change: true
  },
  {
    id: '530d3225-ddc2-4ba1-a3b4-a324bfe2095c',
    oldName: 'Event',
    name: 'calendar-event',
    comment: '',
    change: true
  },
  {
    id: 'beb724c2-c2fc-4317-a007-9bedc8e7e61f',
    oldName: 'Fast Forward',
    name: 'forward',
    comment: '',
    change: false
  },
  {
    id: 'd73065ab-095e-4ade-adbd-f33c0501e80c',
    oldName: 'Fast Rewind',
    name: 'backward',
    comment: '',
    change: false
  },
  {
    id: '363ffa17-b1d1-42b4-bccc-f4965309ca6b',
    oldName: 'Folder Outline',
    name: 'folder-outline',
    comment: '',
    change: false
  },
  {
    id: '53364265-c944-4df1-9bb6-50d67ae002ff',
    oldName: 'Folder Filled',
    name: 'folder',
    comment: '',
    change: false
  },
  {
    id: '8a49e339-28b3-4025-b490-a55cce89e201',
    oldName: 'Filter List',
    name: 'filter-bars',
    comment: '',
    change: false
  },
  {
    id: 'd42abd59-af69-40c1-80da-63c627d6c449',
    oldName: 'Filter',
    name: 'filter',
    comment: '',
    change: true
  },
  {
    id: '8e0e339b-a5d5-4911-8231-addf3e58cfed',
    oldName: '',
    name: 'left-to-bracket',
    comment: '',
    change: false
  },
  {
    id: '3fe5d545-fed9-4610-8340-9c1795b9efcb',
    oldName: '',
    name: 'right-to-bracket',
    comment: '',
    change: false
  },
  {
    id: 'fc4ff9a1-fb53-4a5c-9250-619673e26d36',
    oldName: '',
    name: 'down-from-bracket',
    comment: '',
    change: false
  },
  {
    id: 'ecb00d6c-9fdd-4488-9ae9-11aa3a0b1ace',
    oldName: '',
    name: 'left-from-bracket',
    comment: '',
    change: false
  },
  {
    id: '0a2bfe3b-acfa-4e72-bfaf-de38e398812e',
    oldName: '',
    name: 'up-to-bracket',
    comment: '',
    change: false
  },
  {
    id: '9667d055-fdb5-46ee-ba1f-9a3c0a3582be',
    oldName: 'File Upload',
    name: 'up-from-bracket',
    comment: '',
    change: false
  },
  {
    id: '84916095-9580-49af-98c5-7b75011b72af',
    oldName: 'File Download',
    name: 'down-to-bracket',
    comment: '',
    change: false
  },
  {
    id: '786a97a5-f2df-450e-bb0d-13613e1294a7',
    oldName: 'Flag',
    name: 'flag',
    comment: '',
    change: true
  },
  {
    id: '6c125acf-6aa9-49af-9a36-fabdef0c7e17',
    oldName: 'Grid View',
    name: 'grid-2-outline',
    comment: '',
    change: false
  },
  {
    id: 'ff3b2826-7aad-4b4f-81c6-7583ec096d4f',
    oldName: 'Grid View Filled',
    name: 'grid-2',
    comment: '',
    change: false
  },
  {
    id: '54f69701-319a-4d97-b332-11a4c73d8b2a',
    oldName: '',
    name: 'question',
    comment: '',
    change: false
  },
  {
    id: '163d2880-87dc-41b9-a9fa-b9717662770a',
    oldName: '',
    name: 'question-circle',
    comment: '',
    change: false
  },
  {
    id: '0ffbff30-18e3-4495-a21b-ff292c96f31c',
    oldName: 'Help Circle',
    name: 'question-circle-outline',
    comment: '',
    change: true
  },
  {
    id: 'd886198c-f77d-410d-8c1a-a24fbe8423d7',
    oldName: 'History',
    name: 'clock-rotate-left',
    comment: '',
    change: true
  },
  {
    id: '10f3bc1a-c792-46cd-adbe-2dd40188be13',
    oldName: 'High Voltage',
    name: '',
    comment: '',
    change: false
  },
  {
    id: '8edf6cda-bd23-4027-94b9-56c078dd2883',
    oldName: '',
    name: 'home-outline',
    comment: '',
    change: false
  },
  {
    id: '938cc46e-3e6c-47be-b966-79142f254875',
    oldName: 'Home',
    name: 'home',
    comment: '',
    change: true
  },
  {
    id: 'e719f88d-4fb5-4a6a-a4b0-533cef2d4776',
    oldName: 'Info Circle',
    name: 'info-circle-outline',
    comment: '',
    change: true
  },
  {
    id: '89ed2934-4047-4eb5-a8f9-675c3fa820a2',
    oldName: 'Info Circle Filled',
    name: 'info-circle',
    comment: '',
    change: true
  },
  {
    id: 'eef656df-579c-4a51-8442-0e6fe6bbf05d',
    oldName: 'Inventory',
    name: 'clipboard-check',
    comment: '',
    change: true
  },
  {
    id: '1166b985-81e7-4da9-9ba3-07208df17691',
    oldName: 'indicator S',
    name: 'period',
    comment: '',
    change: false
  },
  {
    id: '5b9de5ac-c13c-4b22-8f45-dc488b529252',
    oldName: '',
    name: 'circle',
    comment: '',
    change: false
  },
  {
    id: '6d9a583d-bcce-42c0-ae4e-71975f67890b',
    oldName: 'indicator M',
    name: 'circle-small',
    comment: '',
    change: false
  },
  {
    id: '4dec374b-3ee0-41f2-a87f-cb4f4ed60a27',
    oldName: 'Log Out',
    name: 'right-from-bracket',
    comment: '',
    change: true
  },
  {
    id: 'f9bf49fa-03e2-40ee-92b5-62cffd497e44',
    oldName: 'Link Add',
    name: 'link-plus',
    comment: '',
    change: true
  },
  {
    id: 'aade2573-eba7-493b-937d-ff04945ec32a',
    oldName: 'Link Off',
    name: 'link-slash',
    comment: '',
    change: false
  },
  {
    id: 'a8b06c33-6fc1-4a11-b061-5692719d2a2b',
    oldName: 'Link',
    name: 'link',
    comment: '',
    change: false
  },
  {
    id: 'd393f195-8990-4573-80ae-f6ef202f5aaa',
    oldName: 'Light Mode',
    name: 'sun',
    comment: '',
    change: true
  },
  {
    id: '37af6fd8-c742-4c0c-a970-01684919d67a',
    oldName: 'Language',
    name: 'globe',
    comment: '',
    change: true
  },
  {
    id: '5ed201e3-154f-4ccf-92a2-8a08b3dae4a5',
    oldName: 'List',
    name: 'list',
    comment: '',
    change: true
  },
  {
    id: '09019087-85e4-4ddf-885f-c30fe8053aa9',
    oldName: 'Menu',
    name: 'bars',
    comment: '',
    change: false
  },
  {
    id: '9c5ce2c3-d9e3-4865-9846-91a2f2549adf',
    oldName: 'Menu Close',
    name: 'bars-chevron-left',
    comment: '',
    change: true
  },
  {
    id: '0b19a18c-705e-4915-81ac-473e2959c999',
    oldName: 'Menu Open',
    name: 'bars-chevron-right',
    comment: '',
    change: true
  },
  {
    id: 'd06120e9-1801-4c1f-b9b5-2d9ceff12859',
    oldName: '',
    name: 'envelope-outline',
    comment: '',
    change: false
  },
  {
    id: '0e1ff483-211a-41f8-80e1-151651c8028c',
    oldName: 'Mail',
    name: 'envelope',
    comment: '',
    change: true
  },
  {
    id: 'f3d30f1c-1878-49bc-8a4f-cd53414b98b0',
    oldName: 'More Vertical',
    name: 'ellipsis-vertical',
    comment: '',
    change: false
  },
  {
    id: '4f4a9144-0334-40df-89f2-f2fc4281fdd9',
    oldName: 'Mic',
    name: 'microphone',
    comment: '',
    change: false
  },
  {
    id: '23f88182-2ff3-4405-94ed-02e14f5ee260',
    oldName: 'mega macs X',
    name: 'mega-macs-x',
    comment: '',
    change: true
  },
  {
    id: '9e618830-3123-4ccb-b574-8708741466d3',
    oldName: 'Network Check',
    name: 'wifi-signal-meter',
    comment: '',
    change: true
  },
  {
    id: '41d16762-c0f6-45b5-82e3-8dbfb42673d6',
    oldName: '',
    name: 'arrow-down-right-from-square',
    comment: '',
    change: false
  },
  {
    id: '2f288efe-8ce0-442a-97a2-dc80dcdbae54',
    oldName: '',
    name: 'arrow-down-left-from-square',
    comment: '',
    change: false
  },
  {
    id: '8ab286b7-fed2-4ee4-a179-ade0d2780c14',
    oldName: '',
    name: 'arrow-up-left-from-square',
    comment: '',
    change: false
  },
  {
    id: 'ddbb20d3-492f-4ff8-a942-e92af6bc95a7',
    oldName: 'Open in New',
    name: 'arrow-up-right-from-square',
    comment: '',
    change: true
  },
  {
    id: 'ed7e6900-a48b-4d77-b9a1-f2e72f0396f9',
    oldName: '',
    name: 'arrow-down-right-up-left',
    comment: '',
    change: false
  },
  {
    id: '0463f896-a3cc-44ab-a254-cba0474216e3',
    oldName: 'Open in Full',
    name: 'arrow-down-left-up-right',
    comment: '',
    change: true
  },
  {
    id: 'f11b006a-2a9b-461c-83d8-c01103948024',
    oldName: 'Pause',
    name: 'pause',
    comment: '',
    change: false
  },
  {
    id: 'b8314d64-e7e5-44f3-8aaf-b2e48d7e2528',
    oldName: 'Play Arrow',
    name: 'play',
    comment: '',
    change: false
  },
  {
    id: '942e5711-9e1f-4254-8c10-2c3f60b7f07d',
    oldName: 'People',
    name: 'user-multiple',
    comment: '',
    change: true
  },
  {
    id: '5482e62e-a898-484f-938e-6ed821f23091',
    oldName: 'User',
    name: 'user',
    comment: '',
    change: false
  },
  {
    id: 'cf9af92f-0aa0-485f-890f-47f2aba44f88',
    oldName: 'Person Add',
    name: 'user-plus',
    comment: '',
    change: true
  },
  {
    id: '581c4733-8aff-47cb-8d72-a2bd4ab3134e',
    oldName: 'Phone',
    name: 'phone',
    comment: '',
    change: true
  },
  {
    id: '370c1be1-d577-496d-a5bb-5f08c80ca79b',
    oldName: '',
    name: 'location-outline',
    comment: '',
    change: false
  },
  {
    id: 'b988d5e2-54df-48f8-973c-c15c66f6c4e6',
    oldName: 'Pointer',
    name: 'location',
    comment: '',
    change: false
  },
  {
    id: '46143c8e-a57b-4eac-8b4d-8ed754a160c3',
    oldName: 'Product List',
    name: 'description-list',
    comment: '',
    change: false
  },
  {
    id: '908c844c-88e9-487a-9a62-28f75788cade',
    oldName: 'Print',
    name: 'print',
    comment: '',
    change: true
  },
  {
    id: 'fb7a2d53-9b65-4d4f-84c7-b1c6c727542f',
    oldName: 'Power off',
    name: 'power',
    comment: '',
    change: false
  },
  {
    id: '223f3320-091c-4feb-8c87-789e9830250c',
    oldName: '',
    name: 'sliders',
    comment: '',
    change: false
  },
  {
    id: '6e4449ed-0e0f-4d40-9257-e154375c5389',
    oldName: 'Parameter',
    name: 'jigsaw',
    comment: '',
    change: true
  },
  {
    id: '5fa3676b-8f1e-4fc9-9a20-f1125a3ba5a3',
    oldName: 'Query Stats',
    name: 'chart-line-magnifier',
    comment: '',
    change: true
  },
  {
    id: 'dc111270-497b-4113-8053-55726cb6196d',
    oldName: 'Question Answer',
    name: 'message-multiple',
    comment: '',
    change: true
  },
  {
    id: '440f4ddf-1569-4758-9fb1-ea64de464309',
    oldName: 'Radio Button Unselected',
    name: '',
    comment: '',
    change: false
  },
  {
    id: '74d9088f-9a2d-40e1-ba58-f0eab3c06eab',
    oldName: '',
    name: 'circle-radio',
    comment: '',
    change: false
  },
  {
    id: '8137eda3-0e2b-4fa7-9ced-6969ba722797',
    oldName: 'Radio Button Selected',
    name: 'circle-radio-outline',
    comment: '',
    change: false
  },
  {
    id: 'c2acf8ad-32da-4a78-8255-ea981a0816d1',
    oldName: '',
    name: 'rotate-left',
    comment: '',
    change: false
  },
  {
    id: '48513532-8ec2-434e-bf21-723627497ecc',
    oldName: 'Refresh',
    name: 'rotate-right',
    comment: '',
    change: true
  },
  {
    id: '57e8da96-8ad7-4c78-973f-ce947023610f',
    oldName: 'Rule',
    name: 'checklist',
    comment: '',
    change: true
  },
  {
    id: 'ab0cc4fa-385b-42c6-b100-f46b68f2c3ad',
    oldName: '',
    name: 'undo',
    comment: '',
    change: false
  },
  {
    id: 'b21fef11-f49d-4a1e-8e82-2b2a55009c5b',
    oldName: 'Redo',
    name: 'redo',
    comment: '',
    change: true
  },
  {
    id: '17b1ef67-0dbd-4740-9582-92866efb21c5',
    oldName: 'Radar',
    name: 'radar',
    comment: '',
    change: false
  },
  {
    id: '0ee01f67-8d49-4f6a-835c-8db973392b11',
    oldName: '',
    name: 'rotate-right-wrench',
    comment: '',
    change: false
  },
  {
    id: '42fcf21e-da01-486f-b66d-dd14bd9012b3',
    oldName: 'Reset Wrench',
    name: 'rotate-left-wrench',
    comment: '',
    change: true
  },
  {
    id: '55e43e35-eb1b-4115-aa43-9b1167721f2c',
    oldName: 'Receipt',
    name: 'receipt',
    comment: '',
    change: true
  },
  {
    id: '3082e019-735c-4b49-908a-eb91a768ec3a',
    oldName: 'Share',
    name: 'share',
    comment: '',
    change: false
  },
  {
    id: 'f1c236ad-9ca1-4443-b822-6fe68ec84799',
    oldName: '',
    name: 'right-from-square',
    comment: '',
    change: false
  },
  {
    id: 'e445bce6-1f48-41a0-b7bf-60aa64419a60',
    oldName: '',
    name: 'down-from-square',
    comment: '',
    change: false
  },
  {
    id: '3b2de7c6-088e-4f70-88ab-8b2fe87aad58',
    oldName: '',
    name: 'left-from-square',
    comment: '',
    change: false
  },
  {
    id: 'fad93e8e-302e-49fd-8830-01d2897aa1a6',
    oldName: 'Share iOS',
    name: 'up-from-square',
    comment: '',
    change: false
  },
  {
    id: '73d5f011-787d-47c7-a01e-d83dc8e8e01c',
    oldName: 'Skip_Previous',
    name: 'backward-step',
    comment: '',
    change: true
  },
  {
    id: 'e9df21fb-1bc9-4797-91d1-651598221840',
    oldName: 'Skip_Next',
    name: 'forward-step',
    comment: '',
    change: true
  },
  {
    id: 'b6098b64-0c9d-49df-b621-cc47d635ffd5',
    oldName: 'Star_Filled',
    name: 'star',
    comment: '',
    change: true
  },
  {
    id: '909271bf-f601-49b9-a685-06d0c955b91f',
    oldName: 'Star Border',
    name: 'star-outline',
    comment: '',
    change: true
  },
  {
    id: '70ecd3a8-aa5f-4ee6-b2f1-65a1bb7152a0',
    oldName: 'Search',
    name: 'magnifier',
    comment: '',
    change: true
  },
  {
    id: 'bfa11231-4b34-47c6-bdae-a63b0fe2e0ea',
    oldName: 'Settings',
    name: 'gear-outline',
    comment: '',
    change: false
  },
  {
    id: '3a9296ee-a0e7-426b-9be0-6538835b38c6',
    oldName: 'Settings Filled',
    name: 'gear',
    comment: '',
    change: false
  },
  {
    id: '7b0fe451-7cb4-48a6-9be2-c867fcfae2cb',
    oldName: 'Speed',
    name: 'gauge',
    comment: '',
    change: true
  },
  {
    id: 'f1b1e8c7-651f-41ac-9f25-7db00717dec4',
    oldName: '',
    name: 'signal-slash',
    comment: '',
    change: false
  },
  {
    id: '23811dfe-3d4d-4c29-b804-224fb9d2c08a',
    oldName: '',
    name: 'signal-weak',
    comment: '',
    change: false
  },
  {
    id: 'f48afaae-e0e0-46f2-88fa-52e19fdcccae',
    oldName: '',
    name: 'signal-fair',
    comment: '',
    change: false
  },
  {
    id: '901e3a63-321b-4a22-8b85-1970d7819016',
    oldName: '',
    name: 'signal-good',
    comment: '',
    change: false
  },
  {
    id: 'fb862e78-67ba-4150-96e8-d4a36e051fa6',
    oldName: 'Signal Cellular',
    name: 'signal',
    comment: '',
    change: true
  },
  {
    id: '247747b2-1753-44e0-b05f-0e76bfaecb2b',
    oldName: '',
    name: 'scan',
    comment: '',
    change: false
  },
  {
    id: '72fc8946-dedc-40fb-9a51-df4ec0fa26f8',
    oldName: '',
    name: 'scan-magnifier',
    comment: '',
    change: false
  },
  {
    id: '334e3490-c3db-4125-ba44-a5917ec8dd34',
    oldName: '',
    name: 'qrcode',
    comment: '',
    change: false
  },
  {
    id: 'ea846ba3-0f3d-4e45-abf5-bf2b662ab92b',
    oldName: '',
    name: 'scan-qrcode',
    comment: '',
    change: false
  },
  {
    id: '52b15142-b057-4834-ac4c-ca5fed58a63e',
    oldName: '',
    name: 'barcode',
    comment: '',
    change: false
  },
  {
    id: '0bb46720-22e2-4a58-9527-642d5c8f6513',
    oldName: '',
    name: 'scan-barcode',
    comment: '',
    change: false
  },
  {
    id: '5c106448-182e-441f-abf8-4c18f201a4c9',
    oldName: 'Snapshot',
    name: 'scan-lines',
    comment: '',
    change: false
  },
  {
    id: '7c39e1e4-d68a-4f69-af84-77da324b631f',
    oldName: 'Spinner',
    name: 'spinner',
    comment: '',
    change: true
  },
  {
    id: '460e792e-72e5-49ce-b243-8247e7d2afb0',
    oldName: '',
    name: 'paper-plane-top',
    comment: '',
    change: false
  },
  {
    id: '9c77ef08-6f9e-4184-9381-0dc0cd063c33',
    oldName: 'Send',
    name: 'paper-plane-top-outline',
    comment: '',
    change: true
  },
  {
    id: 'f7f7cddd-f22d-4a78-9ed9-8ad110452436',
    oldName: 'Shopping_Bag',
    name: 'bag',
    comment: '',
    change: true
  },
  {
    id: 'e5714840-5206-4bed-8bd5-dac91786ef53',
    oldName: 'Server',
    name: 'server-outline',
    comment: '',
    change: true
  },
  {
    id: '1f812980-5513-45be-a6c8-2fbe3eb443a1',
    oldName: 'Server Filled',
    name: 'server',
    comment: '',
    change: true
  },
  {
    id: 'f5c43ee9-8690-4a00-a6f1-b3f5bac68f81',
    oldName: '',
    name: 'screen',
    comment: '',
    change: false
  },
  {
    id: '664ec412-8d62-46d6-85f2-65f9b28734d3',
    oldName: '',
    name: 'fullscreen',
    comment: '',
    change: false
  },
  {
    id: 'eb4b4767-cdd4-4d1b-baec-99f1b27bf561',
    oldName: '',
    name: 'fullscreen-exit',
    comment: '',
    change: false
  },
  {
    id: 'ff7fa51c-8960-49b5-a69b-fbd9715b0f31',
    oldName: 'Screenshot',
    name: 'screenshot',
    comment: '',
    change: false
  },
  {
    id: '6aba6a59-d646-4d35-a19f-72aecc286b8c',
    oldName: '',
    name: 'lifering-plus',
    comment: '',
    change: false
  },
  {
    id: 'fb506b0f-cc1f-4a2f-a2fb-4bae736395cb',
    oldName: 'Support',
    name: 'lifering',
    comment: '',
    change: true
  },
  {
    id: 'c3aca340-1e10-4cc5-8343-d54b35bfd31a',
    oldName: 'Support Add',
    name: 'lifering-plus-circle',
    comment: '',
    change: true
  },
  {
    id: '891ba9a7-816b-4a96-a9dd-5daece6fbc46',
    oldName: '',
    name: 'bars-sort-ascending',
    comment: '',
    change: false
  },
  {
    id: 'c0e4cfd0-6d67-4e8c-a906-50f7b44de1b8',
    oldName: '',
    name: 'bars-sort-descending',
    comment: '',
    change: false
  },
  {
    id: '9190dd36-c69e-4181-8824-7b9bb7802eac',
    oldName: 'Sort',
    name: 'bars-sort',
    comment: '',
    change: false
  },
  {
    id: '52ac0b10-be52-42eb-a1e1-b5e4b69fc767',
    oldName: '',
    name: 'arrow-uturn-up',
    comment: '',
    change: false
  },
  {
    id: 'cec83c92-cfb3-4c8c-b977-c1781f542503',
    oldName: '',
    name: 'arrow-uturn-right',
    comment: '',
    change: false
  },
  {
    id: '9c7c1a1d-7a72-4027-a543-259149b27b9a',
    oldName: '',
    name: 'arrow-uturn-down',
    comment: '',
    change: false
  },
  {
    id: '41f9d7a0-15af-4933-b200-64d05fa2df7e',
    oldName: 'Service_Reset',
    name: 'arrow-uturn-left',
    comment: '',
    change: true
  },
  {
    id: 'b03d563f-05b6-412a-8e2f-1e8e13cdd73f',
    oldName: '',
    name: 'triangle-exclamation',
    comment: '',
    change: false
  },
  {
    id: 'c37a259b-e428-4d6b-8eac-76d2f4bbd438',
    oldName: '',
    name: 'triangle-outline',
    comment: '',
    change: false
  },
  {
    id: '0650461e-36b9-4bd8-90be-fa99c3a55b9f',
    oldName: 'Triangle',
    name: 'triangle',
    comment: '',
    change: true
  },
  {
    id: 'ac10d7ac-cdf6-45ac-ab22-085439b03729',
    oldName: 'Tool',
    name: 'wrench-outline',
    comment: '',
    change: true
  },
  {
    id: '53d4b7a7-ea74-4015-9a04-79b9365100eb',
    oldName: '',
    name: 'wrench',
    comment: '',
    change: false
  },
  {
    id: '3ab59581-c39f-4e26-8bb0-32ed2265d6ab',
    oldName: 'Tool Corrected Filled',
    name: 'wrench-check',
    comment: '',
    change: true
  },
  {
    id: 'a92e0a34-7701-445c-8423-89b633d94377',
    oldName: 'Thumbs Down',
    name: 'thumbs-down-outline',
    comment: '',
    change: true
  },
  {
    id: '19953182-9c6b-4d1d-b1d2-a17e509db30d',
    oldName: 'Thumbs Down Filled',
    name: 'thumbs-down',
    comment: '',
    change: true
  },
  {
    id: '0a140921-a0ff-495b-9940-41f53cbbf969',
    oldName: 'Thumbs Up',
    name: 'thumbs-up-outline',
    comment: '',
    change: true
  },
  {
    id: 'f7700b3a-d8d1-4394-8a8f-4ba65f497f0c',
    oldName: 'Thumbs Up Filled',
    name: 'thumbs-up',
    comment: '',
    change: true
  },
  {
    id: '41ab9b02-48a7-4e1b-bde4-151e2ed9c1a0',
    oldName: 'Tow Truck',
    name: 'tow-truck',
    comment: 'Adjusted retangle corner radius like we have in other icons',
    change: true
  },
  {
    id: 'e9efb901-9682-46b1-9cf7-51b34bf52979',
    oldName: 'Truck',
    name: 'truck',
    comment: 'Same wheel size than tow truck',
    change: true
  },
  {
    id: 'cff334dd-4617-4b9b-b02a-2e5d31fcf793',
    oldName: '',
    name: 'thermometer-lines',
    comment: '',
    change: false
  },
  {
    id: '6f08f060-a9f2-4128-b5b9-f0556433ef4b',
    oldName: 'Thermostat',
    name: 'thermometer',
    comment: '',
    change: true
  },
  {
    id: 'f7f85b8e-1234-4511-85ea-dcbd1561c14c',
    oldName: 'Update',
    name: 'clock-rotate-right',
    comment: '',
    change: true
  },
  {
    id: '73cc9da6-90d7-49da-8774-2933ae2dac33',
    oldName: 'USB',
    name: 'usb',
    comment: '',
    change: false
  },
  {
    id: '12ad9a7e-be7f-42cb-8795-405f5d1010d9',
    oldName: 'Visibility',
    name: 'eye',
    comment: '',
    change: false
  },
  {
    id: '12a61968-cceb-46e8-90e5-1229e670c4d4',
    oldName: 'Visibility Off',
    name: 'eye-slash',
    comment: '',
    change: false
  },
  {
    id: '3ea6e43e-b541-4aff-93c8-3a0fc73f553f',
    oldName: 'VCI',
    name: 'vci',
    comment: '',
    change: true
  },
  {
    id: '4f7fde7d-637c-4311-80dd-2a61bdb828f7',
    oldName: 'VCI Offline',
    name: 'vci-slash',
    comment: '',
    change: true
  },
  {
    id: '4a8de207-bf24-45db-b942-4f479e61446f',
    oldName: 'Warning',
    name: 'triangle-exclamation-outline',
    comment: '',
    change: false
  },
  {
    id: '67ea65ad-ebd4-4b0a-87e4-2f9caaf7346f',
    oldName: '',
    name: 'wifi-slash',
    comment: '',
    change: false
  },
  {
    id: '804a12ff-d646-45db-80b5-a7bfcd4c0c6c',
    oldName: 'Wifi',
    name: 'wifi',
    comment: '',
    change: false
  },
  {
    id: '9dc5ea01-0da5-4c4d-9029-aaf535a68b46',
    oldName: 'Wheels',
    name: 'wheels-outline',
    comment: '',
    change: true
  },
  {
    id: '86aa5672-84bf-4e22-9842-fca757bc9d7e',
    oldName: 'Wheels Filled',
    name: 'wheels',
    comment: '',
    change: false
  },
  {
    id: '78e14c96-57df-490a-a981-3ef691770be0',
    oldName: '',
    name: 'credit-card-dollar',
    comment: 'macs365 sidebar icon',
    change: false
  },
  {
    id: '6eae5750-9969-4e22-ba98-2db339379d87',
    oldName: '',
    name: 'laptop-smartphone',
    comment: 'macs365 sidebar icon',
    change: false
  },
  {
    id: '46608d67-256b-4390-9f96-0ca8849ac1e7',
    oldName: '',
    name: 'certificate',
    comment: 'macs365 sidebar icon',
    change: false
  },
  {
    id: '253011f2-ce63-485a-b1be-7337a06024e0',
    oldName: '',
    name: 'certificate-outline',
    comment: 'macs365 sidebar icon',
    change: false
  },
  {
    id: 'd91f6afa-92da-48f5-8481-b74ae394e91e',
    oldName: '',
    name: 'language',
    comment: '',
    change: false
  },
  {
    id: '957dea26-d143-4159-8b8c-75d7ffd0d87e',
    oldName: 'Workshop',
    name: 'garage',
    comment: 'Wider entry to make it more look like a workshop/garage',
    change: true
  },
  {
    id: 'c29d023f-488d-474e-b967-68be6014d832',
    oldName: 'Wifi Bar 1',
    name: 'wifi-weak',
    comment: '',
    change: true
  },
  {
    id: '8ce5242b-e43b-4b97-ac54-7f3d00f4086c',
    oldName: 'Wifi Bar 2',
    name: 'wifi-fair',
    comment: '',
    change: true
  },
  {
    id: 'e425d09e-766b-4bdf-8304-9cae2a500d42',
    oldName: 'Wifi Bar 3',
    name: 'wifi-good',
    comment: '',
    change: true
  },
  {
    id: '04ed3920-8fef-428a-8595-0542660ca3a7',
    oldName: 'Wifi Bar 4',
    name: '',
    comment: '',
    change: false
  },
  {
    id: '96252db0-3597-4f66-9985-a0623611f7f2',
    oldName: 'Wifi Bar 5',
    name: '',
    comment: '',
    change: false
  }
];

export default data;
