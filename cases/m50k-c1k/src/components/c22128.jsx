import React from 'react';
const LABEL_22128 = 'component_22128';
export function Component22128({ value = 22128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22128, 'data-value': derived.doubled }, children);
}
export default Component22128;
