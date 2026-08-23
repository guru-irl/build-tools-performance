import React from 'react';
const LABEL_45321 = 'component_45321';
export function Component45321({ value = 45321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45321, 'data-value': derived.doubled }, children);
}
export default Component45321;
