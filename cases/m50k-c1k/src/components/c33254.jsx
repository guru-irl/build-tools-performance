import React from 'react';
const LABEL_33254 = 'component_33254';
export function Component33254({ value = 33254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33254, 'data-value': derived.doubled }, children);
}
export default Component33254;
