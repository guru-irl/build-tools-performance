import React from 'react';
const LABEL_3545 = 'component_3545';
export function Component3545({ value = 3545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3545, 'data-value': derived.doubled }, children);
}
export default Component3545;
