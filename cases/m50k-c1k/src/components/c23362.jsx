import React from 'react';
const LABEL_23362 = 'component_23362';
export function Component23362({ value = 23362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23362, 'data-value': derived.doubled }, children);
}
export default Component23362;
