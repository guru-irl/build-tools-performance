import React from 'react';
const LABEL_17588 = 'component_17588';
export function Component17588({ value = 17588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17588, 'data-value': derived.doubled }, children);
}
export default Component17588;
