import React from 'react';
const LABEL_22823 = 'component_22823';
export function Component22823({ value = 22823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22823, 'data-value': derived.doubled }, children);
}
export default Component22823;
