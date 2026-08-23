import React from 'react';
const LABEL_21441 = 'component_21441';
export function Component21441({ value = 21441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21441, 'data-value': derived.doubled }, children);
}
export default Component21441;
