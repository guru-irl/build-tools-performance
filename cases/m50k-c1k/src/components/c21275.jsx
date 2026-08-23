import React from 'react';
const LABEL_21275 = 'component_21275';
export function Component21275({ value = 21275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21275, 'data-value': derived.doubled }, children);
}
export default Component21275;
