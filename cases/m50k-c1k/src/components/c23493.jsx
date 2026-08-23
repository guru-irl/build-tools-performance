import React from 'react';
const LABEL_23493 = 'component_23493';
export function Component23493({ value = 23493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23493, 'data-value': derived.doubled }, children);
}
export default Component23493;
