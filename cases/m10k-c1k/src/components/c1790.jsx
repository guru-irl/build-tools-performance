import React from 'react';
const LABEL_1790 = 'component_1790';
export function Component1790({ value = 1790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1790, 'data-value': derived.doubled }, children);
}
export default Component1790;
