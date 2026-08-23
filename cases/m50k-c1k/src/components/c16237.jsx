import React from 'react';
const LABEL_16237 = 'component_16237';
export function Component16237({ value = 16237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16237, 'data-value': derived.doubled }, children);
}
export default Component16237;
