import React from 'react';
const LABEL_11638 = 'component_11638';
export function Component11638({ value = 11638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11638, 'data-value': derived.doubled }, children);
}
export default Component11638;
