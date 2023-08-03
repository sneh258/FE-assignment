const explorer = {
  id:'1',
  name: 'root',
  isFolder: true,
  items: [
    {
      id:'2',
      name: 'public',
      isFolder: true,
      items: [
        {
          id:'3',
          name: 'public nested 1',
          isFolder: true,
          items: [
            {
              id:'4',
              name: 'index.html',
              isFolder: false,
              items: []
            },
            {
              id:'5',
              name: 'hello.html',
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id:'6',
          name: 'public_nested_file',
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id:'7',
      name: 'src',
      isFolder: true,
      items: [
        {
          id:'8',
          name: 'App.js',
          isFolder: false,
          items: [],
          content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque fugit dolore eveniet porro minima necessitatibus in facilis ipsum quas sapiente cum, nulla quisquam temporibus aliquid, pariatur natus doloribus aliquam corrupti'
        },
        {
          id:'9',
          name: 'Index.js',
          isFolder: false,
          items: [],
          content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          id:'10',
          name: 'styles.css',
          isFolder: false,
          items: [],
        }
      ]
    },
    {
      id:'11',
      name: 'package.json',
      isFolder: false,
      items: []
    }
  ]
};
  
export default explorer;