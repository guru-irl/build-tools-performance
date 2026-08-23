import React from 'react';
const LABEL_12582 = 'component_12582';
export function Component12582({ value = 12582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12582, 'data-value': derived.doubled }, children);
}
export default Component12582;
