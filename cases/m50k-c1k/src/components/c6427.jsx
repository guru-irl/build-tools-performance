import React from 'react';
const LABEL_6427 = 'component_6427';
export function Component6427({ value = 6427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6427, 'data-value': derived.doubled }, children);
}
export default Component6427;
