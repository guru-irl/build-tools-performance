import React from 'react';
const LABEL_25967 = 'component_25967';
export function Component25967({ value = 25967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25967, 'data-value': derived.doubled }, children);
}
export default Component25967;
