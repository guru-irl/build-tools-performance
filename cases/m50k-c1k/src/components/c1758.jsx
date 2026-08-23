import React from 'react';
const LABEL_1758 = 'component_1758';
export function Component1758({ value = 1758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1758, 'data-value': derived.doubled }, children);
}
export default Component1758;
