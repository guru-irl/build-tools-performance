import React from 'react';
const LABEL_13483 = 'component_13483';
export function Component13483({ value = 13483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13483, 'data-value': derived.doubled }, children);
}
export default Component13483;
