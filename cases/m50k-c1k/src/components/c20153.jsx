import React from 'react';
const LABEL_20153 = 'component_20153';
export function Component20153({ value = 20153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20153, 'data-value': derived.doubled }, children);
}
export default Component20153;
