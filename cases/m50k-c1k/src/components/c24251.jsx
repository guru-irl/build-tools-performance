import React from 'react';
const LABEL_24251 = 'component_24251';
export function Component24251({ value = 24251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24251, 'data-value': derived.doubled }, children);
}
export default Component24251;
