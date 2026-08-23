import React from 'react';
const LABEL_20133 = 'component_20133';
export function Component20133({ value = 20133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20133, 'data-value': derived.doubled }, children);
}
export default Component20133;
