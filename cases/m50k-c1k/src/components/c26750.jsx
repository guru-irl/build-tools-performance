import React from 'react';
const LABEL_26750 = 'component_26750';
export function Component26750({ value = 26750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26750, 'data-value': derived.doubled }, children);
}
export default Component26750;
