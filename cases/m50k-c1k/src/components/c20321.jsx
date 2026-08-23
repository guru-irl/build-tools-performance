import React from 'react';
const LABEL_20321 = 'component_20321';
export function Component20321({ value = 20321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20321, 'data-value': derived.doubled }, children);
}
export default Component20321;
