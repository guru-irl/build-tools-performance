import React from 'react';
const LABEL_32393 = 'component_32393';
export function Component32393({ value = 32393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32393, 'data-value': derived.doubled }, children);
}
export default Component32393;
