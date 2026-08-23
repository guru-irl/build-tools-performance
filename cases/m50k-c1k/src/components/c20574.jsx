import React from 'react';
const LABEL_20574 = 'component_20574';
export function Component20574({ value = 20574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20574, 'data-value': derived.doubled }, children);
}
export default Component20574;
