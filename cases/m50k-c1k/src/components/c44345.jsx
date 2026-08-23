import React from 'react';
const LABEL_44345 = 'component_44345';
export function Component44345({ value = 44345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44345, 'data-value': derived.doubled }, children);
}
export default Component44345;
