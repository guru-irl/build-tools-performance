import React from 'react';
const LABEL_36127 = 'component_36127';
export function Component36127({ value = 36127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36127, 'data-value': derived.doubled }, children);
}
export default Component36127;
