import React from 'react';
const LABEL_15382 = 'component_15382';
export function Component15382({ value = 15382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15382, 'data-value': derived.doubled }, children);
}
export default Component15382;
