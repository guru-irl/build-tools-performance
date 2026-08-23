import React from 'react';
const LABEL_23574 = 'component_23574';
export function Component23574({ value = 23574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23574, 'data-value': derived.doubled }, children);
}
export default Component23574;
