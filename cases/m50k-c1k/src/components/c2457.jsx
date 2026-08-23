import React from 'react';
const LABEL_2457 = 'component_2457';
export function Component2457({ value = 2457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2457, 'data-value': derived.doubled }, children);
}
export default Component2457;
