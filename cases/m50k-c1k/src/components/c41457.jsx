import React from 'react';
const LABEL_41457 = 'component_41457';
export function Component41457({ value = 41457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41457, 'data-value': derived.doubled }, children);
}
export default Component41457;
