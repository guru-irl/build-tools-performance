import React from 'react';
const LABEL_7321 = 'component_7321';
export function Component7321({ value = 7321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7321, 'data-value': derived.doubled }, children);
}
export default Component7321;
