import React from 'react';
const LABEL_42457 = 'component_42457';
export function Component42457({ value = 42457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42457, 'data-value': derived.doubled }, children);
}
export default Component42457;
