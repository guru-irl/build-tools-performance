import React from 'react';
const LABEL_40457 = 'component_40457';
export function Component40457({ value = 40457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40457, 'data-value': derived.doubled }, children);
}
export default Component40457;
