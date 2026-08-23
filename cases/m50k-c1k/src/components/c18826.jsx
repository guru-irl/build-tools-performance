import React from 'react';
const LABEL_18826 = 'component_18826';
export function Component18826({ value = 18826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18826, 'data-value': derived.doubled }, children);
}
export default Component18826;
