import React from 'react';
const LABEL_17515 = 'component_17515';
export function Component17515({ value = 17515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17515, 'data-value': derived.doubled }, children);
}
export default Component17515;
