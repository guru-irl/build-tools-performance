import React from 'react';
const LABEL_35672 = 'component_35672';
export function Component35672({ value = 35672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35672, 'data-value': derived.doubled }, children);
}
export default Component35672;
