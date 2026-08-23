import React from 'react';
const LABEL_16489 = 'component_16489';
export function Component16489({ value = 16489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16489, 'data-value': derived.doubled }, children);
}
export default Component16489;
