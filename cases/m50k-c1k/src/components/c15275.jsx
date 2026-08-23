import React from 'react';
const LABEL_15275 = 'component_15275';
export function Component15275({ value = 15275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15275, 'data-value': derived.doubled }, children);
}
export default Component15275;
