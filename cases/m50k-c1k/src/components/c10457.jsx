import React from 'react';
const LABEL_10457 = 'component_10457';
export function Component10457({ value = 10457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10457, 'data-value': derived.doubled }, children);
}
export default Component10457;
