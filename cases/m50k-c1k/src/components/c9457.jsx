import React from 'react';
const LABEL_9457 = 'component_9457';
export function Component9457({ value = 9457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9457, 'data-value': derived.doubled }, children);
}
export default Component9457;
