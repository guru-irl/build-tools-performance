import React from 'react';
const LABEL_14826 = 'component_14826';
export function Component14826({ value = 14826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14826, 'data-value': derived.doubled }, children);
}
export default Component14826;
