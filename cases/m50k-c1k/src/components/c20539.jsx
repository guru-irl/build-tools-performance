import React from 'react';
const LABEL_20539 = 'component_20539';
export function Component20539({ value = 20539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20539, 'data-value': derived.doubled }, children);
}
export default Component20539;
