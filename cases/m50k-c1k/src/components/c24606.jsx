import React from 'react';
const LABEL_24606 = 'component_24606';
export function Component24606({ value = 24606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24606, 'data-value': derived.doubled }, children);
}
export default Component24606;
