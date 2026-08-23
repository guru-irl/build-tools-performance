import React from 'react';
const LABEL_379 = 'component_379';
export function Component379({ value = 379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_379, 'data-value': derived.doubled }, children);
}
export default Component379;
