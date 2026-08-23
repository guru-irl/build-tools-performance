import React from 'react';
const LABEL_19824 = 'component_19824';
export function Component19824({ value = 19824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19824, 'data-value': derived.doubled }, children);
}
export default Component19824;
