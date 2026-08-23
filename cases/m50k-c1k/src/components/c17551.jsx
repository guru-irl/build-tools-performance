import React from 'react';
const LABEL_17551 = 'component_17551';
export function Component17551({ value = 17551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17551, 'data-value': derived.doubled }, children);
}
export default Component17551;
