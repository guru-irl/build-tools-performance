import React from 'react';
const LABEL_38630 = 'component_38630';
export function Component38630({ value = 38630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38630, 'data-value': derived.doubled }, children);
}
export default Component38630;
