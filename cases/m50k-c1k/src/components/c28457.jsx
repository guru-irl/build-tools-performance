import React from 'react';
const LABEL_28457 = 'component_28457';
export function Component28457({ value = 28457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28457, 'data-value': derived.doubled }, children);
}
export default Component28457;
