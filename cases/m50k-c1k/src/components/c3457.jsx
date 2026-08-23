import React from 'react';
const LABEL_3457 = 'component_3457';
export function Component3457({ value = 3457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3457, 'data-value': derived.doubled }, children);
}
export default Component3457;
