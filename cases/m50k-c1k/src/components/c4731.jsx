import React from 'react';
const LABEL_4731 = 'component_4731';
export function Component4731({ value = 4731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4731, 'data-value': derived.doubled }, children);
}
export default Component4731;
