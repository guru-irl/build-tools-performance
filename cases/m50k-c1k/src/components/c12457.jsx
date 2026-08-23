import React from 'react';
const LABEL_12457 = 'component_12457';
export function Component12457({ value = 12457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12457, 'data-value': derived.doubled }, children);
}
export default Component12457;
