import React from 'react';
const LABEL_23789 = 'component_23789';
export function Component23789({ value = 23789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23789, 'data-value': derived.doubled }, children);
}
export default Component23789;
