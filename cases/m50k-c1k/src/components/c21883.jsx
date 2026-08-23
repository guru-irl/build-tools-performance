import React from 'react';
const LABEL_21883 = 'component_21883';
export function Component21883({ value = 21883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21883, 'data-value': derived.doubled }, children);
}
export default Component21883;
