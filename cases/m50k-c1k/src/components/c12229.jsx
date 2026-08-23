import React from 'react';
const LABEL_12229 = 'component_12229';
export function Component12229({ value = 12229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12229, 'data-value': derived.doubled }, children);
}
export default Component12229;
