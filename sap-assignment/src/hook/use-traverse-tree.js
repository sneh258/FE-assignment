const useTraverseTree=()=>{

  function insertNode(tree,folderId,item,isFolder){
    if(tree.id===folderId && tree.isFolder){
      tree.items.unshift({
        id:new Date().getTime(),
        name: item,
        isFolder,
        items:[]
      });
      return tree;
    }
    // follow depth search first
    let latestNode=[];
    latestNode= tree.items.map((obj)=>{
      return insertNode(obj,folderId,item,isFolder);
    });
    return {...tree, items:latestNode};
        

  }

  function getNode(tree, nodeId) {
    if (tree === undefined || tree === null || typeof tree !== 'object' || Object.keys(tree).length === 0)
      return null;
  
    if (tree.id == nodeId) {
      return tree;
    }
  
    // Traverse through the tree to find the node
    for (const item of tree.items) {
      const node = getNode(item, nodeId);
      if (node) {
        return node;
      }
    }
  
    // Node not found
    return null;
  }
  
  return {insertNode,getNode};

};

export default useTraverseTree;