import React from 'react';
const LABEL_5461 = 'component_5461';
export function Component5461({ value = 5461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5461, 'data-value': derived.doubled }, children);
}
export default Component5461;
