import React from 'react';
const LABEL_23528 = 'component_23528';
export function Component23528({ value = 23528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23528, 'data-value': derived.doubled }, children);
}
export default Component23528;
