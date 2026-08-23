import React from 'react';
const LABEL_24457 = 'component_24457';
export function Component24457({ value = 24457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24457, 'data-value': derived.doubled }, children);
}
export default Component24457;
