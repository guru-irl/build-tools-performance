import React from 'react';
const LABEL_4986 = 'component_4986';
export function Component4986({ value = 4986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4986, 'data-value': derived.doubled }, children);
}
export default Component4986;
