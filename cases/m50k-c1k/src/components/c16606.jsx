import React from 'react';
const LABEL_16606 = 'component_16606';
export function Component16606({ value = 16606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16606, 'data-value': derived.doubled }, children);
}
export default Component16606;
