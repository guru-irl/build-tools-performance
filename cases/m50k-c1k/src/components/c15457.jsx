import React from 'react';
const LABEL_15457 = 'component_15457';
export function Component15457({ value = 15457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15457, 'data-value': derived.doubled }, children);
}
export default Component15457;
