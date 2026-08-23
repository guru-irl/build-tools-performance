import React from 'react';
const LABEL_12672 = 'component_12672';
export function Component12672({ value = 12672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12672, 'data-value': derived.doubled }, children);
}
export default Component12672;
