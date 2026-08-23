import React from 'react';
const LABEL_17574 = 'component_17574';
export function Component17574({ value = 17574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17574, 'data-value': derived.doubled }, children);
}
export default Component17574;
