import React from 'react';
const LABEL_22188 = 'component_22188';
export function Component22188({ value = 22188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22188, 'data-value': derived.doubled }, children);
}
export default Component22188;
