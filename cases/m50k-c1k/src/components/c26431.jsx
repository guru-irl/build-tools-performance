import React from 'react';
const LABEL_26431 = 'component_26431';
export function Component26431({ value = 26431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26431, 'data-value': derived.doubled }, children);
}
export default Component26431;
