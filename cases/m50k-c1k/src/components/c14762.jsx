import React from 'react';
const LABEL_14762 = 'component_14762';
export function Component14762({ value = 14762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14762, 'data-value': derived.doubled }, children);
}
export default Component14762;
