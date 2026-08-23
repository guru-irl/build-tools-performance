import React from 'react';
const LABEL_6833 = 'component_6833';
export function Component6833({ value = 6833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6833, 'data-value': derived.doubled }, children);
}
export default Component6833;
