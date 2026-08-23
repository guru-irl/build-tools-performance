import React from 'react';
const LABEL_20474 = 'component_20474';
export function Component20474({ value = 20474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20474, 'data-value': derived.doubled }, children);
}
export default Component20474;
