import React from 'react';
const LABEL_19495 = 'component_19495';
export function Component19495({ value = 19495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19495, 'data-value': derived.doubled }, children);
}
export default Component19495;
