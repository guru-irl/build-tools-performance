import React from 'react';
const LABEL_42178 = 'component_42178';
export function Component42178({ value = 42178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42178, 'data-value': derived.doubled }, children);
}
export default Component42178;
