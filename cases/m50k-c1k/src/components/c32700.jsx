import React from 'react';
const LABEL_32700 = 'component_32700';
export function Component32700({ value = 32700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32700, 'data-value': derived.doubled }, children);
}
export default Component32700;
