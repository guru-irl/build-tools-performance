import React from 'react';
const LABEL_1757 = 'component_1757';
export function Component1757({ value = 1757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1757, 'data-value': derived.doubled }, children);
}
export default Component1757;
