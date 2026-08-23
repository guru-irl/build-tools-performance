import React from 'react';
const LABEL_4789 = 'component_4789';
export function Component4789({ value = 4789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4789, 'data-value': derived.doubled }, children);
}
export default Component4789;
