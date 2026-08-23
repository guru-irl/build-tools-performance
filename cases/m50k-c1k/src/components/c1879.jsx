import React from 'react';
const LABEL_1879 = 'component_1879';
export function Component1879({ value = 1879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1879, 'data-value': derived.doubled }, children);
}
export default Component1879;
