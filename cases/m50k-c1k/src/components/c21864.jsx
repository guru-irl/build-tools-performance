import React from 'react';
const LABEL_21864 = 'component_21864';
export function Component21864({ value = 21864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21864, 'data-value': derived.doubled }, children);
}
export default Component21864;
