import React from 'react';
const LABEL_3046 = 'component_3046';
export function Component3046({ value = 3046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3046, 'data-value': derived.doubled }, children);
}
export default Component3046;
