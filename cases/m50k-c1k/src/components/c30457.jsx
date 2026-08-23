import React from 'react';
const LABEL_30457 = 'component_30457';
export function Component30457({ value = 30457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30457, 'data-value': derived.doubled }, children);
}
export default Component30457;
