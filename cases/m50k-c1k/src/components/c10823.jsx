import React from 'react';
const LABEL_10823 = 'component_10823';
export function Component10823({ value = 10823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10823, 'data-value': derived.doubled }, children);
}
export default Component10823;
