import React from 'react';
const LABEL_46578 = 'component_46578';
export function Component46578({ value = 46578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46578, 'data-value': derived.doubled }, children);
}
export default Component46578;
