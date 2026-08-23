import React from 'react';
const LABEL_30483 = 'component_30483';
export function Component30483({ value = 30483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30483, 'data-value': derived.doubled }, children);
}
export default Component30483;
