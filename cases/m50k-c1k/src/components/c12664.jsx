import React from 'react';
const LABEL_12664 = 'component_12664';
export function Component12664({ value = 12664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12664, 'data-value': derived.doubled }, children);
}
export default Component12664;
