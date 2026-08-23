import React from 'react';
const LABEL_32374 = 'component_32374';
export function Component32374({ value = 32374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32374, 'data-value': derived.doubled }, children);
}
export default Component32374;
