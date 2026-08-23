import React from 'react';
const LABEL_1065 = 'component_1065';
export function Component1065({ value = 1065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1065, 'data-value': derived.doubled }, children);
}
export default Component1065;
