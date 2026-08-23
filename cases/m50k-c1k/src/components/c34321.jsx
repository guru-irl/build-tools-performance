import React from 'react';
const LABEL_34321 = 'component_34321';
export function Component34321({ value = 34321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34321, 'data-value': derived.doubled }, children);
}
export default Component34321;
