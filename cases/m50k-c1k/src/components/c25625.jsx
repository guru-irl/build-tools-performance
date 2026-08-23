import React from 'react';
const LABEL_25625 = 'component_25625';
export function Component25625({ value = 25625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25625, 'data-value': derived.doubled }, children);
}
export default Component25625;
