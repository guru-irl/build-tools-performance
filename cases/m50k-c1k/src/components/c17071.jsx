import React from 'react';
const LABEL_17071 = 'component_17071';
export function Component17071({ value = 17071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17071, 'data-value': derived.doubled }, children);
}
export default Component17071;
