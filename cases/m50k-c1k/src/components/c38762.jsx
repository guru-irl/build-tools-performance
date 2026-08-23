import React from 'react';
const LABEL_38762 = 'component_38762';
export function Component38762({ value = 38762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38762, 'data-value': derived.doubled }, children);
}
export default Component38762;
