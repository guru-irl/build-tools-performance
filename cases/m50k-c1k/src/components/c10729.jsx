import React from 'react';
const LABEL_10729 = 'component_10729';
export function Component10729({ value = 10729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10729, 'data-value': derived.doubled }, children);
}
export default Component10729;
