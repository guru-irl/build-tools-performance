import React from 'react';
const LABEL_39857 = 'component_39857';
export function Component39857({ value = 39857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39857, 'data-value': derived.doubled }, children);
}
export default Component39857;
