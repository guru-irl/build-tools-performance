import React from 'react';
const LABEL_38883 = 'component_38883';
export function Component38883({ value = 38883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38883, 'data-value': derived.doubled }, children);
}
export default Component38883;
