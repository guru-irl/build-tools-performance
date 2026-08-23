import React from 'react';
const LABEL_32757 = 'component_32757';
export function Component32757({ value = 32757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32757, 'data-value': derived.doubled }, children);
}
export default Component32757;
