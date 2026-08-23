import React from 'react';
const LABEL_11457 = 'component_11457';
export function Component11457({ value = 11457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11457, 'data-value': derived.doubled }, children);
}
export default Component11457;
