import React from 'react';
const LABEL_30660 = 'component_30660';
export function Component30660({ value = 30660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30660, 'data-value': derived.doubled }, children);
}
export default Component30660;
