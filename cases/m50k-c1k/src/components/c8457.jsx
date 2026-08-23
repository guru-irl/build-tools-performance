import React from 'react';
const LABEL_8457 = 'component_8457';
export function Component8457({ value = 8457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8457, 'data-value': derived.doubled }, children);
}
export default Component8457;
