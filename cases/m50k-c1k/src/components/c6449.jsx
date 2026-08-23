import React from 'react';
const LABEL_6449 = 'component_6449';
export function Component6449({ value = 6449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6449, 'data-value': derived.doubled }, children);
}
export default Component6449;
