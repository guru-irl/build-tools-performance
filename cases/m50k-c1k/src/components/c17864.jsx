import React from 'react';
const LABEL_17864 = 'component_17864';
export function Component17864({ value = 17864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17864, 'data-value': derived.doubled }, children);
}
export default Component17864;
