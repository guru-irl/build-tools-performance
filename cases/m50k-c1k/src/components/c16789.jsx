import React from 'react';
const LABEL_16789 = 'component_16789';
export function Component16789({ value = 16789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16789, 'data-value': derived.doubled }, children);
}
export default Component16789;
