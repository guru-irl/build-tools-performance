import React from 'react';
const LABEL_13382 = 'component_13382';
export function Component13382({ value = 13382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13382, 'data-value': derived.doubled }, children);
}
export default Component13382;
