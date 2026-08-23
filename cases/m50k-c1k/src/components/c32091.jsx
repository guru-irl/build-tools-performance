import React from 'react';
const LABEL_32091 = 'component_32091';
export function Component32091({ value = 32091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32091, 'data-value': derived.doubled }, children);
}
export default Component32091;
