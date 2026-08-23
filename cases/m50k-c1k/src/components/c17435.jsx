import React from 'react';
const LABEL_17435 = 'component_17435';
export function Component17435({ value = 17435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17435, 'data-value': derived.doubled }, children);
}
export default Component17435;
