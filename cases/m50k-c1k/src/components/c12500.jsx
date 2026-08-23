import React from 'react';
const LABEL_12500 = 'component_12500';
export function Component12500({ value = 12500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12500, 'data-value': derived.doubled }, children);
}
export default Component12500;
