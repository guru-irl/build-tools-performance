import React from 'react';
const LABEL_37957 = 'component_37957';
export function Component37957({ value = 37957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37957, 'data-value': derived.doubled }, children);
}
export default Component37957;
