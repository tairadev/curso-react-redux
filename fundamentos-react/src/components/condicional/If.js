const If = (props) => {
  const elseChild = props.children.filter((child) => {
    return child.type && child.type.name === 'Else';
  })[0];

  const ifChildren = props.children.filter((child) => {
    return child !== elseChild;
  });

  if (props.test) {
    return ifChildren;
  } else if (ifChildren) {
    return elseChild;
  } else {
    return false;
  }
};

export default If;

export const Else = (props) => props.children;
