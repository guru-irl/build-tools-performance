import React from 'react';
const LABEL_23457 = 'component_23457';
export function Component23457({ value = 23457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23457, 'data-value': derived.doubled }, children);
}
export default Component23457;
