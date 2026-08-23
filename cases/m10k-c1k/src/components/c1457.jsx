import React from 'react';
const LABEL_1457 = 'component_1457';
export function Component1457({ value = 1457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1457, 'data-value': derived.doubled }, children);
}
export default Component1457;
