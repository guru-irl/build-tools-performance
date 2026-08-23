import React from 'react';
const LABEL_11461 = 'component_11461';
export function Component11461({ value = 11461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11461, 'data-value': derived.doubled }, children);
}
export default Component11461;
