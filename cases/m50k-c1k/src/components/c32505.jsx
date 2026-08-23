import React from 'react';
const LABEL_32505 = 'component_32505';
export function Component32505({ value = 32505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32505, 'data-value': derived.doubled }, children);
}
export default Component32505;
