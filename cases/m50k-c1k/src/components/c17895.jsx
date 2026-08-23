import React from 'react';
const LABEL_17895 = 'component_17895';
export function Component17895({ value = 17895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17895, 'data-value': derived.doubled }, children);
}
export default Component17895;
