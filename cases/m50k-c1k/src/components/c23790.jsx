import React from 'react';
const LABEL_23790 = 'component_23790';
export function Component23790({ value = 23790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23790, 'data-value': derived.doubled }, children);
}
export default Component23790;
