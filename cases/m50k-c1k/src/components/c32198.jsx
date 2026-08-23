import React from 'react';
const LABEL_32198 = 'component_32198';
export function Component32198({ value = 32198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32198, 'data-value': derived.doubled }, children);
}
export default Component32198;
