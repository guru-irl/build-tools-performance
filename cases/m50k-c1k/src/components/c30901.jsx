import React from 'react';
const LABEL_30901 = 'component_30901';
export function Component30901({ value = 30901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30901, 'data-value': derived.doubled }, children);
}
export default Component30901;
