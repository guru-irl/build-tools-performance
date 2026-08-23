import React from 'react';
const LABEL_17265 = 'component_17265';
export function Component17265({ value = 17265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17265, 'data-value': derived.doubled }, children);
}
export default Component17265;
