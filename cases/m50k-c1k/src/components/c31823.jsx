import React from 'react';
const LABEL_31823 = 'component_31823';
export function Component31823({ value = 31823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31823, 'data-value': derived.doubled }, children);
}
export default Component31823;
