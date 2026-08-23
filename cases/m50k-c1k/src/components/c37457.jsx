import React from 'react';
const LABEL_37457 = 'component_37457';
export function Component37457({ value = 37457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37457, 'data-value': derived.doubled }, children);
}
export default Component37457;
