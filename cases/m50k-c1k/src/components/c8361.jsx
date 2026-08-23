import React from 'react';
const LABEL_8361 = 'component_8361';
export function Component8361({ value = 8361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8361, 'data-value': derived.doubled }, children);
}
export default Component8361;
