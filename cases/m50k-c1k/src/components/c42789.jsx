import React from 'react';
const LABEL_42789 = 'component_42789';
export function Component42789({ value = 42789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42789, 'data-value': derived.doubled }, children);
}
export default Component42789;
