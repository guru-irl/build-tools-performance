import React from 'react';
const LABEL_26375 = 'component_26375';
export function Component26375({ value = 26375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26375, 'data-value': derived.doubled }, children);
}
export default Component26375;
