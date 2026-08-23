import React from 'react';
const LABEL_8762 = 'component_8762';
export function Component8762({ value = 8762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8762, 'data-value': derived.doubled }, children);
}
export default Component8762;
