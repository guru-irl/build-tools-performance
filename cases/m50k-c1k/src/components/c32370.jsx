import React from 'react';
const LABEL_32370 = 'component_32370';
export function Component32370({ value = 32370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32370, 'data-value': derived.doubled }, children);
}
export default Component32370;
