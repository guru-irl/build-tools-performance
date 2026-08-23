import React from 'react';
const LABEL_3826 = 'component_3826';
export function Component3826({ value = 3826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3826, 'data-value': derived.doubled }, children);
}
export default Component3826;
