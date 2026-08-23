import React from 'react';
const LABEL_12407 = 'component_12407';
export function Component12407({ value = 12407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12407, 'data-value': derived.doubled }, children);
}
export default Component12407;
