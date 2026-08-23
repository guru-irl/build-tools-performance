import React from 'react';
const LABEL_21292 = 'component_21292';
export function Component21292({ value = 21292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21292, 'data-value': derived.doubled }, children);
}
export default Component21292;
