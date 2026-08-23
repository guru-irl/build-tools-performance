import React from 'react';
const LABEL_32896 = 'component_32896';
export function Component32896({ value = 32896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32896, 'data-value': derived.doubled }, children);
}
export default Component32896;
