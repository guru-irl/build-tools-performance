import React from 'react';
const LABEL_32179 = 'component_32179';
export function Component32179({ value = 32179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32179, 'data-value': derived.doubled }, children);
}
export default Component32179;
