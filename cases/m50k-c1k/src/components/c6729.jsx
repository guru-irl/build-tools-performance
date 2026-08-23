import React from 'react';
const LABEL_6729 = 'component_6729';
export function Component6729({ value = 6729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6729, 'data-value': derived.doubled }, children);
}
export default Component6729;
