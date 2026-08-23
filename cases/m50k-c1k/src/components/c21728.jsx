import React from 'react';
const LABEL_21728 = 'component_21728';
export function Component21728({ value = 21728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21728, 'data-value': derived.doubled }, children);
}
export default Component21728;
