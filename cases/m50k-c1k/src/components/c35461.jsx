import React from 'react';
const LABEL_35461 = 'component_35461';
export function Component35461({ value = 35461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35461, 'data-value': derived.doubled }, children);
}
export default Component35461;
