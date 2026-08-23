import React from 'react';
const LABEL_17085 = 'component_17085';
export function Component17085({ value = 17085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17085, 'data-value': derived.doubled }, children);
}
export default Component17085;
