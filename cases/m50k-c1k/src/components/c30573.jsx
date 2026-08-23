import React from 'react';
const LABEL_30573 = 'component_30573';
export function Component30573({ value = 30573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30573, 'data-value': derived.doubled }, children);
}
export default Component30573;
