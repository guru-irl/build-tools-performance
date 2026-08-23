import React from 'react';
const LABEL_32034 = 'component_32034';
export function Component32034({ value = 32034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32034, 'data-value': derived.doubled }, children);
}
export default Component32034;
