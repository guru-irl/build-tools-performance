import React from 'react';
const LABEL_32913 = 'component_32913';
export function Component32913({ value = 32913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32913, 'data-value': derived.doubled }, children);
}
export default Component32913;
