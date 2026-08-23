import React from 'react';
const LABEL_35198 = 'component_35198';
export function Component35198({ value = 35198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35198, 'data-value': derived.doubled }, children);
}
export default Component35198;
