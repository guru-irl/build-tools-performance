import React from 'react';
const LABEL_40504 = 'component_40504';
export function Component40504({ value = 40504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40504, 'data-value': derived.doubled }, children);
}
export default Component40504;
