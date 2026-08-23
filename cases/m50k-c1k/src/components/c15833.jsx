import React from 'react';
const LABEL_15833 = 'component_15833';
export function Component15833({ value = 15833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15833, 'data-value': derived.doubled }, children);
}
export default Component15833;
