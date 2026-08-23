import React from 'react';
const LABEL_1786 = 'component_1786';
export function Component1786({ value = 1786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1786, 'data-value': derived.doubled }, children);
}
export default Component1786;
