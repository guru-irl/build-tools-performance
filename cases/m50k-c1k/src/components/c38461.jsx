import React from 'react';
const LABEL_38461 = 'component_38461';
export function Component38461({ value = 38461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38461, 'data-value': derived.doubled }, children);
}
export default Component38461;
