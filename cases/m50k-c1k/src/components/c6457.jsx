import React from 'react';
const LABEL_6457 = 'component_6457';
export function Component6457({ value = 6457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6457, 'data-value': derived.doubled }, children);
}
export default Component6457;
