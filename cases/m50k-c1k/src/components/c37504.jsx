import React from 'react';
const LABEL_37504 = 'component_37504';
export function Component37504({ value = 37504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37504, 'data-value': derived.doubled }, children);
}
export default Component37504;
