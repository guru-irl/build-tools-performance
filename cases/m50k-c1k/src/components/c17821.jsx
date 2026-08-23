import React from 'react';
const LABEL_17821 = 'component_17821';
export function Component17821({ value = 17821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17821, 'data-value': derived.doubled }, children);
}
export default Component17821;
