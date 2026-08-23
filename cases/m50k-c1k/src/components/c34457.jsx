import React from 'react';
const LABEL_34457 = 'component_34457';
export function Component34457({ value = 34457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34457, 'data-value': derived.doubled }, children);
}
export default Component34457;
