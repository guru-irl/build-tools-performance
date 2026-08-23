import React from 'react';
const LABEL_11672 = 'component_11672';
export function Component11672({ value = 11672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11672, 'data-value': derived.doubled }, children);
}
export default Component11672;
