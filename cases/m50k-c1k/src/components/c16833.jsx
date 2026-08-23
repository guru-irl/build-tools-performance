import React from 'react';
const LABEL_16833 = 'component_16833';
export function Component16833({ value = 16833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16833, 'data-value': derived.doubled }, children);
}
export default Component16833;
