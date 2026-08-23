import React from 'react';
const LABEL_20823 = 'component_20823';
export function Component20823({ value = 20823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20823, 'data-value': derived.doubled }, children);
}
export default Component20823;
