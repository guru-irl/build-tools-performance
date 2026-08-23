import React from 'react';
const LABEL_32061 = 'component_32061';
export function Component32061({ value = 32061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32061, 'data-value': derived.doubled }, children);
}
export default Component32061;
