import React from 'react';
const LABEL_26457 = 'component_26457';
export function Component26457({ value = 26457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26457, 'data-value': derived.doubled }, children);
}
export default Component26457;
