import React from 'react';
const LABEL_22 = 'component_22';
export function Component22({ value = 22, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22, 'data-value': derived.doubled }, children);
}
export default Component22;
