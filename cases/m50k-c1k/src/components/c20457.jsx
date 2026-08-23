import React from 'react';
const LABEL_20457 = 'component_20457';
export function Component20457({ value = 20457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20457, 'data-value': derived.doubled }, children);
}
export default Component20457;
