import React from 'react';
const LABEL_38627 = 'component_38627';
export function Component38627({ value = 38627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38627, 'data-value': derived.doubled }, children);
}
export default Component38627;
