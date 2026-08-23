import React from 'react';
const LABEL_38252 = 'component_38252';
export function Component38252({ value = 38252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38252, 'data-value': derived.doubled }, children);
}
export default Component38252;
