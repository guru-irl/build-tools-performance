import React from 'react';
const LABEL_6789 = 'component_6789';
export function Component6789({ value = 6789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6789, 'data-value': derived.doubled }, children);
}
export default Component6789;
