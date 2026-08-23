import React from 'react';
const LABEL_17885 = 'component_17885';
export function Component17885({ value = 17885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17885, 'data-value': derived.doubled }, children);
}
export default Component17885;
