import React from 'react';
const LABEL_6545 = 'component_6545';
export function Component6545({ value = 6545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6545, 'data-value': derived.doubled }, children);
}
export default Component6545;
