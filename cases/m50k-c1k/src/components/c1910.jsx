import React from 'react';
const LABEL_1910 = 'component_1910';
export function Component1910({ value = 1910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1910, 'data-value': derived.doubled }, children);
}
export default Component1910;
