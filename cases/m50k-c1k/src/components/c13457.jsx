import React from 'react';
const LABEL_13457 = 'component_13457';
export function Component13457({ value = 13457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13457, 'data-value': derived.doubled }, children);
}
export default Component13457;
