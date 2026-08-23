import React from 'react';
const LABEL_1729 = 'component_1729';
export function Component1729({ value = 1729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1729, 'data-value': derived.doubled }, children);
}
export default Component1729;
