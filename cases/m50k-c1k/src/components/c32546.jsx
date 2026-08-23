import React from 'react';
const LABEL_32546 = 'component_32546';
export function Component32546({ value = 32546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32546, 'data-value': derived.doubled }, children);
}
export default Component32546;
