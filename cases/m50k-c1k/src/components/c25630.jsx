import React from 'react';
const LABEL_25630 = 'component_25630';
export function Component25630({ value = 25630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25630, 'data-value': derived.doubled }, children);
}
export default Component25630;
