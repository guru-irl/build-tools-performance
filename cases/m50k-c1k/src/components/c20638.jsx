import React from 'react';
const LABEL_20638 = 'component_20638';
export function Component20638({ value = 20638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20638, 'data-value': derived.doubled }, children);
}
export default Component20638;
