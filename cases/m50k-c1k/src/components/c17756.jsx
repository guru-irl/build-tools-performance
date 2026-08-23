import React from 'react';
const LABEL_17756 = 'component_17756';
export function Component17756({ value = 17756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17756, 'data-value': derived.doubled }, children);
}
export default Component17756;
