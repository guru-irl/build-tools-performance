import React from 'react';
const LABEL_17986 = 'component_17986';
export function Component17986({ value = 17986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17986, 'data-value': derived.doubled }, children);
}
export default Component17986;
