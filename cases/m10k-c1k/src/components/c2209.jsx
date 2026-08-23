import React from 'react';
const LABEL_2209 = 'component_2209';
export function Component2209({ value = 2209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2209, 'data-value': derived.doubled }, children);
}
export default Component2209;
