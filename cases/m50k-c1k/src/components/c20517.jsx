import React from 'react';
const LABEL_20517 = 'component_20517';
export function Component20517({ value = 20517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20517, 'data-value': derived.doubled }, children);
}
export default Component20517;
