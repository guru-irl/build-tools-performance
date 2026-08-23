import React from 'react';
const LABEL_17714 = 'component_17714';
export function Component17714({ value = 17714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17714, 'data-value': derived.doubled }, children);
}
export default Component17714;
