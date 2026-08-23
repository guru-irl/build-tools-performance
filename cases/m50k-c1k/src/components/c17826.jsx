import React from 'react';
const LABEL_17826 = 'component_17826';
export function Component17826({ value = 17826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17826, 'data-value': derived.doubled }, children);
}
export default Component17826;
