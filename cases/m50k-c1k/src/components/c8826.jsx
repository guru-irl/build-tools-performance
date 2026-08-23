import React from 'react';
const LABEL_8826 = 'component_8826';
export function Component8826({ value = 8826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8826, 'data-value': derived.doubled }, children);
}
export default Component8826;
