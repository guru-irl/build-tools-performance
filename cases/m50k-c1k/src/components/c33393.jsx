import React from 'react';
const LABEL_33393 = 'component_33393';
export function Component33393({ value = 33393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33393, 'data-value': derived.doubled }, children);
}
export default Component33393;
