import React from 'react';
const LABEL_36633 = 'component_36633';
export function Component36633({ value = 36633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36633, 'data-value': derived.doubled }, children);
}
export default Component36633;
