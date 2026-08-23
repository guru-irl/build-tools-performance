import React from 'react';
const LABEL_10167 = 'component_10167';
export function Component10167({ value = 10167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10167, 'data-value': derived.doubled }, children);
}
export default Component10167;
