import React from 'react';
const LABEL_10494 = 'component_10494';
export function Component10494({ value = 10494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10494, 'data-value': derived.doubled }, children);
}
export default Component10494;
