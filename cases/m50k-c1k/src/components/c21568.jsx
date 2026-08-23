import React from 'react';
const LABEL_21568 = 'component_21568';
export function Component21568({ value = 21568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21568, 'data-value': derived.doubled }, children);
}
export default Component21568;
