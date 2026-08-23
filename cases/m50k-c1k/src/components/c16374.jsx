import React from 'react';
const LABEL_16374 = 'component_16374';
export function Component16374({ value = 16374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16374, 'data-value': derived.doubled }, children);
}
export default Component16374;
