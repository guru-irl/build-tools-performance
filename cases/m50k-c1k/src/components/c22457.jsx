import React from 'react';
const LABEL_22457 = 'component_22457';
export function Component22457({ value = 22457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22457, 'data-value': derived.doubled }, children);
}
export default Component22457;
