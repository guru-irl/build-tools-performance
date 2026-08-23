import React from 'react';
const LABEL_12625 = 'component_12625';
export function Component12625({ value = 12625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12625, 'data-value': derived.doubled }, children);
}
export default Component12625;
