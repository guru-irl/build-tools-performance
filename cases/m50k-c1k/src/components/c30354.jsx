import React from 'react';
const LABEL_30354 = 'component_30354';
export function Component30354({ value = 30354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30354, 'data-value': derived.doubled }, children);
}
export default Component30354;
