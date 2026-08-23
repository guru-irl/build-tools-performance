import React from 'react';
const LABEL_17981 = 'component_17981';
export function Component17981({ value = 17981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17981, 'data-value': derived.doubled }, children);
}
export default Component17981;
