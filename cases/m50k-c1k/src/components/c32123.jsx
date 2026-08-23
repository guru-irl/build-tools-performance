import React from 'react';
const LABEL_32123 = 'component_32123';
export function Component32123({ value = 32123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32123, 'data-value': derived.doubled }, children);
}
export default Component32123;
