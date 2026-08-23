import React from 'react';
const LABEL_13292 = 'component_13292';
export function Component13292({ value = 13292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13292, 'data-value': derived.doubled }, children);
}
export default Component13292;
