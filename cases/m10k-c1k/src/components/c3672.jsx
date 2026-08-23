import React from 'react';
const LABEL_3672 = 'component_3672';
export function Component3672({ value = 3672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3672, 'data-value': derived.doubled }, children);
}
export default Component3672;
