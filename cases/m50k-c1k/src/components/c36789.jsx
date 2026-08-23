import React from 'react';
const LABEL_36789 = 'component_36789';
export function Component36789({ value = 36789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36789, 'data-value': derived.doubled }, children);
}
export default Component36789;
