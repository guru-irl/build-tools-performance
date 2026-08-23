import React from 'react';
const LABEL_33833 = 'component_33833';
export function Component33833({ value = 33833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33833, 'data-value': derived.doubled }, children);
}
export default Component33833;
