import React from 'react';
const LABEL_33071 = 'component_33071';
export function Component33071({ value = 33071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33071, 'data-value': derived.doubled }, children);
}
export default Component33071;
