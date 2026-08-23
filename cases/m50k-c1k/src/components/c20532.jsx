import React from 'react';
const LABEL_20532 = 'component_20532';
export function Component20532({ value = 20532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20532, 'data-value': derived.doubled }, children);
}
export default Component20532;
