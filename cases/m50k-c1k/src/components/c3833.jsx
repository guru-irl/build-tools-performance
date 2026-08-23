import React from 'react';
const LABEL_3833 = 'component_3833';
export function Component3833({ value = 3833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3833, 'data-value': derived.doubled }, children);
}
export default Component3833;
