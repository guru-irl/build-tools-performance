import React from 'react';
const LABEL_11127 = 'component_11127';
export function Component11127({ value = 11127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11127, 'data-value': derived.doubled }, children);
}
export default Component11127;
