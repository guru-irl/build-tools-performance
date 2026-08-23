import React from 'react';
const LABEL_25789 = 'component_25789';
export function Component25789({ value = 25789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25789, 'data-value': derived.doubled }, children);
}
export default Component25789;
