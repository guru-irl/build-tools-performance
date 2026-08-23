import React from 'react';
const LABEL_14457 = 'component_14457';
export function Component14457({ value = 14457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14457, 'data-value': derived.doubled }, children);
}
export default Component14457;
