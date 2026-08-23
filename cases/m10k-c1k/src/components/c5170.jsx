import React from 'react';
const LABEL_5170 = 'component_5170';
export function Component5170({ value = 5170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5170, 'data-value': derived.doubled }, children);
}
export default Component5170;
