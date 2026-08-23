import React from 'react';
const LABEL_16491 = 'component_16491';
export function Component16491({ value = 16491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16491, 'data-value': derived.doubled }, children);
}
export default Component16491;
