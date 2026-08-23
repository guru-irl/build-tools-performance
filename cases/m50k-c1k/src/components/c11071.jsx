import React from 'react';
const LABEL_11071 = 'component_11071';
export function Component11071({ value = 11071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11071, 'data-value': derived.doubled }, children);
}
export default Component11071;
