import React from 'react';
const LABEL_8853 = 'component_8853';
export function Component8853({ value = 8853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8853, 'data-value': derived.doubled }, children);
}
export default Component8853;
