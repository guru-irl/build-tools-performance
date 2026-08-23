import React from 'react';
const LABEL_35789 = 'component_35789';
export function Component35789({ value = 35789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35789, 'data-value': derived.doubled }, children);
}
export default Component35789;
