import React from 'react';
const LABEL_46875 = 'component_46875';
export function Component46875({ value = 46875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46875, 'data-value': derived.doubled }, children);
}
export default Component46875;
