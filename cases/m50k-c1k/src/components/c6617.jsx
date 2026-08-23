import React from 'react';
const LABEL_6617 = 'component_6617';
export function Component6617({ value = 6617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6617, 'data-value': derived.doubled }, children);
}
export default Component6617;
