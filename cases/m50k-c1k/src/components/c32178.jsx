import React from 'react';
const LABEL_32178 = 'component_32178';
export function Component32178({ value = 32178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32178, 'data-value': derived.doubled }, children);
}
export default Component32178;
