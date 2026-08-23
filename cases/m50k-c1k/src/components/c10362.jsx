import React from 'react';
const LABEL_10362 = 'component_10362';
export function Component10362({ value = 10362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10362, 'data-value': derived.doubled }, children);
}
export default Component10362;
