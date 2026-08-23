import React from 'react';
const LABEL_38379 = 'component_38379';
export function Component38379({ value = 38379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38379, 'data-value': derived.doubled }, children);
}
export default Component38379;
