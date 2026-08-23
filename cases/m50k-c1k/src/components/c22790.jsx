import React from 'react';
const LABEL_22790 = 'component_22790';
export function Component22790({ value = 22790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22790, 'data-value': derived.doubled }, children);
}
export default Component22790;
