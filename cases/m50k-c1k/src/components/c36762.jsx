import React from 'react';
const LABEL_36762 = 'component_36762';
export function Component36762({ value = 36762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36762, 'data-value': derived.doubled }, children);
}
export default Component36762;
