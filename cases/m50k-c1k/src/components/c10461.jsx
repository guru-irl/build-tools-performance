import React from 'react';
const LABEL_10461 = 'component_10461';
export function Component10461({ value = 10461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10461, 'data-value': derived.doubled }, children);
}
export default Component10461;
