import React from 'react';
const LABEL_30234 = 'component_30234';
export function Component30234({ value = 30234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30234, 'data-value': derived.doubled }, children);
}
export default Component30234;
