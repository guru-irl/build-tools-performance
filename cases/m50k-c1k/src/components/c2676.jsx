import React from 'react';
const LABEL_2676 = 'component_2676';
export function Component2676({ value = 2676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2676, 'data-value': derived.doubled }, children);
}
export default Component2676;
