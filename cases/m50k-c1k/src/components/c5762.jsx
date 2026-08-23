import React from 'react';
const LABEL_5762 = 'component_5762';
export function Component5762({ value = 5762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5762, 'data-value': derived.doubled }, children);
}
export default Component5762;
