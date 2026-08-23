import React from 'react';
const LABEL_1761 = 'component_1761';
export function Component1761({ value = 1761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1761, 'data-value': derived.doubled }, children);
}
export default Component1761;
