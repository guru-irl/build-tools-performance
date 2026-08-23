import React from 'react';
const LABEL_30923 = 'component_30923';
export function Component30923({ value = 30923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30923, 'data-value': derived.doubled }, children);
}
export default Component30923;
