import React from 'react';
const LABEL_43453 = 'component_43453';
export function Component43453({ value = 43453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43453, 'data-value': derived.doubled }, children);
}
export default Component43453;
