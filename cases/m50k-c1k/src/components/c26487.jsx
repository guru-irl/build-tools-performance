import React from 'react';
const LABEL_26487 = 'component_26487';
export function Component26487({ value = 26487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26487, 'data-value': derived.doubled }, children);
}
export default Component26487;
