import React from 'react';
const LABEL_32587 = 'component_32587';
export function Component32587({ value = 32587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32587, 'data-value': derived.doubled }, children);
}
export default Component32587;
