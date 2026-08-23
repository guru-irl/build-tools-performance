import React from 'react';
const LABEL_17589 = 'component_17589';
export function Component17589({ value = 17589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17589, 'data-value': derived.doubled }, children);
}
export default Component17589;
