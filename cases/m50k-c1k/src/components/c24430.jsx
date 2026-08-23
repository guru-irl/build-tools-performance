import React from 'react';
const LABEL_24430 = 'component_24430';
export function Component24430({ value = 24430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24430, 'data-value': derived.doubled }, children);
}
export default Component24430;
