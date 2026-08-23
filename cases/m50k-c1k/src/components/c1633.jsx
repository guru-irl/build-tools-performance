import React from 'react';
const LABEL_1633 = 'component_1633';
export function Component1633({ value = 1633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1633, 'data-value': derived.doubled }, children);
}
export default Component1633;
