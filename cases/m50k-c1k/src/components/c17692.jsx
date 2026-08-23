import React from 'react';
const LABEL_17692 = 'component_17692';
export function Component17692({ value = 17692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17692, 'data-value': derived.doubled }, children);
}
export default Component17692;
