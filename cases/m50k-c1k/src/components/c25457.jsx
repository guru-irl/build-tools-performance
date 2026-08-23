import React from 'react';
const LABEL_25457 = 'component_25457';
export function Component25457({ value = 25457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25457, 'data-value': derived.doubled }, children);
}
export default Component25457;
