import React from 'react';
const LABEL_44457 = 'component_44457';
export function Component44457({ value = 44457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44457, 'data-value': derived.doubled }, children);
}
export default Component44457;
