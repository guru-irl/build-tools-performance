import React from 'react';
const LABEL_23753 = 'component_23753';
export function Component23753({ value = 23753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23753, 'data-value': derived.doubled }, children);
}
export default Component23753;
