import React from 'react';
const LABEL_5275 = 'component_5275';
export function Component5275({ value = 5275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5275, 'data-value': derived.doubled }, children);
}
export default Component5275;
