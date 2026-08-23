import React from 'react';
const LABEL_32601 = 'component_32601';
export function Component32601({ value = 32601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32601, 'data-value': derived.doubled }, children);
}
export default Component32601;
