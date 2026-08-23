import React from 'react';
const LABEL_40606 = 'component_40606';
export function Component40606({ value = 40606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40606, 'data-value': derived.doubled }, children);
}
export default Component40606;
