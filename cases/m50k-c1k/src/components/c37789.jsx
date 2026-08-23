import React from 'react';
const LABEL_37789 = 'component_37789';
export function Component37789({ value = 37789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37789, 'data-value': derived.doubled }, children);
}
export default Component37789;
