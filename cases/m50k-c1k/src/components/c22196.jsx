import React from 'react';
const LABEL_22196 = 'component_22196';
export function Component22196({ value = 22196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22196, 'data-value': derived.doubled }, children);
}
export default Component22196;
