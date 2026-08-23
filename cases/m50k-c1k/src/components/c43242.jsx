import React from 'react';
const LABEL_43242 = 'component_43242';
export function Component43242({ value = 43242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43242, 'data-value': derived.doubled }, children);
}
export default Component43242;
