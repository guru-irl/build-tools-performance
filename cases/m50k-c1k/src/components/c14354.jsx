import React from 'react';
const LABEL_14354 = 'component_14354';
export function Component14354({ value = 14354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14354, 'data-value': derived.doubled }, children);
}
export default Component14354;
