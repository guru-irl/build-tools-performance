import React from 'react';
const LABEL_40276 = 'component_40276';
export function Component40276({ value = 40276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40276, 'data-value': derived.doubled }, children);
}
export default Component40276;
