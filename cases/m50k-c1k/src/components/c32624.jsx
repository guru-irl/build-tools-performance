import React from 'react';
const LABEL_32624 = 'component_32624';
export function Component32624({ value = 32624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32624, 'data-value': derived.doubled }, children);
}
export default Component32624;
