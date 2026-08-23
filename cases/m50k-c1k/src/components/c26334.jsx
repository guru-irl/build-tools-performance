import React from 'react';
const LABEL_26334 = 'component_26334';
export function Component26334({ value = 26334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26334, 'data-value': derived.doubled }, children);
}
export default Component26334;
