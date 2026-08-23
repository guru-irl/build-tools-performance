import React from 'react';
const LABEL_16409 = 'component_16409';
export function Component16409({ value = 16409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16409, 'data-value': derived.doubled }, children);
}
export default Component16409;
