import React from 'react';
const LABEL_32473 = 'component_32473';
export function Component32473({ value = 32473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32473, 'data-value': derived.doubled }, children);
}
export default Component32473;
