import React from 'react';
const LABEL_1830 = 'component_1830';
export function Component1830({ value = 1830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1830, 'data-value': derived.doubled }, children);
}
export default Component1830;
