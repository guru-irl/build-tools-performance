import React from 'react';
const LABEL_32149 = 'component_32149';
export function Component32149({ value = 32149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32149, 'data-value': derived.doubled }, children);
}
export default Component32149;
