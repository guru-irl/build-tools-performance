import React from 'react';
const LABEL_21457 = 'component_21457';
export function Component21457({ value = 21457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21457, 'data-value': derived.doubled }, children);
}
export default Component21457;
