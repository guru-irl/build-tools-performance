import React from 'react';
const LABEL_38495 = 'component_38495';
export function Component38495({ value = 38495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38495, 'data-value': derived.doubled }, children);
}
export default Component38495;
