import React from 'react';
const LABEL_36729 = 'component_36729';
export function Component36729({ value = 36729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36729, 'data-value': derived.doubled }, children);
}
export default Component36729;
