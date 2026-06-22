export const buildTree = (modules: any[], root: string) => {
    const nodeMap: Record<string, any> = {};
    const roots: any[] = [];

    modules.forEach(mod => {
        nodeMap[mod.id] = {
            id: mod.id,
            title: mod.data.title,
            weight: mod.data.weight || 0,
            children: []
        };
    });

    modules.forEach(mod => {
        if (mod.id === root) return;

        const parts = mod.id.split('/');
        parts.pop(); 
        const parentId = parts.join('/');

        if (parentId === root) {
            roots.push(nodeMap[mod.id]);
        } else if (nodeMap[parentId]) {
            nodeMap[parentId].children.push(nodeMap[mod.id]);
        } else {
            roots.push(nodeMap[mod.id]);
        }
    });

    const sortNodes = (nodes: any[]) => {
        nodes.sort((a, b) => a.weight - b.weight);
        nodes.forEach(node => sortNodes(node.children));
    };
    sortNodes(roots);

    return roots;
};

export const flattenTree = (nodes: any[]): any[] => {
    return nodes.reduce((acc, node) => {
        return [...acc, node, ...flattenTree(node.children)];
    }, []);
};
