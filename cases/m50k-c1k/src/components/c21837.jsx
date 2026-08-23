import React from 'react';
const LABEL_21837 = 'component_21837';
export function Component21837({ value = 21837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21837, 'data-value': derived.doubled }, children);
}
export default Component21837;
