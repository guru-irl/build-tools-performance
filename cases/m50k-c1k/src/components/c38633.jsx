import React from 'react';
const LABEL_38633 = 'component_38633';
export function Component38633({ value = 38633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38633, 'data-value': derived.doubled }, children);
}
export default Component38633;
