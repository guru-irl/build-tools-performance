import React from 'react';
const LABEL_38474 = 'component_38474';
export function Component38474({ value = 38474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38474, 'data-value': derived.doubled }, children);
}
export default Component38474;
