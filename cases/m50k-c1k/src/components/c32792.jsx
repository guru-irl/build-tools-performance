import React from 'react';
const LABEL_32792 = 'component_32792';
export function Component32792({ value = 32792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32792, 'data-value': derived.doubled }, children);
}
export default Component32792;
