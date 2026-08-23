import React from 'react';
const LABEL_19321 = 'component_19321';
export function Component19321({ value = 19321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19321, 'data-value': derived.doubled }, children);
}
export default Component19321;
