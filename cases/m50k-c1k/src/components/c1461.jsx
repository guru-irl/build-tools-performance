import React from 'react';
const LABEL_1461 = 'component_1461';
export function Component1461({ value = 1461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1461, 'data-value': derived.doubled }, children);
}
export default Component1461;
