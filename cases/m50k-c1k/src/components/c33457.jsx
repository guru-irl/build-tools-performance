import React from 'react';
const LABEL_33457 = 'component_33457';
export function Component33457({ value = 33457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33457, 'data-value': derived.doubled }, children);
}
export default Component33457;
