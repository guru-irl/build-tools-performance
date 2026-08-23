import React from 'react';
const LABEL_30271 = 'component_30271';
export function Component30271({ value = 30271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30271, 'data-value': derived.doubled }, children);
}
export default Component30271;
