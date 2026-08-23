import React from 'react';
const LABEL_16627 = 'component_16627';
export function Component16627({ value = 16627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16627, 'data-value': derived.doubled }, children);
}
export default Component16627;
