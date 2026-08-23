import React from 'react';
const LABEL_38321 = 'component_38321';
export function Component38321({ value = 38321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38321, 'data-value': derived.doubled }, children);
}
export default Component38321;
