import React from 'react';
const LABEL_1817 = 'component_1817';
export function Component1817({ value = 1817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1817, 'data-value': derived.doubled }, children);
}
export default Component1817;
