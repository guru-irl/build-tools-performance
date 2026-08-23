import React from 'react';
const LABEL_30694 = 'component_30694';
export function Component30694({ value = 30694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30694, 'data-value': derived.doubled }, children);
}
export default Component30694;
