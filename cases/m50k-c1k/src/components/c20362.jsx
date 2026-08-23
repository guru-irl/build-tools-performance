import React from 'react';
const LABEL_20362 = 'component_20362';
export function Component20362({ value = 20362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20362, 'data-value': derived.doubled }, children);
}
export default Component20362;
