import React from 'react';
const LABEL_32627 = 'component_32627';
export function Component32627({ value = 32627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32627, 'data-value': derived.doubled }, children);
}
export default Component32627;
