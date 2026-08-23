import React from 'react';
const LABEL_33790 = 'component_33790';
export function Component33790({ value = 33790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33790, 'data-value': derived.doubled }, children);
}
export default Component33790;
