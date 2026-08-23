import React from 'react';
const LABEL_39461 = 'component_39461';
export function Component39461({ value = 39461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39461, 'data-value': derived.doubled }, children);
}
export default Component39461;
