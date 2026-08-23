import React from 'react';
const LABEL_26577 = 'component_26577';
export function Component26577({ value = 26577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26577, 'data-value': derived.doubled }, children);
}
export default Component26577;
