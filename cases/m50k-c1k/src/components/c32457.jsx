import React from 'react';
const LABEL_32457 = 'component_32457';
export function Component32457({ value = 32457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32457, 'data-value': derived.doubled }, children);
}
export default Component32457;
