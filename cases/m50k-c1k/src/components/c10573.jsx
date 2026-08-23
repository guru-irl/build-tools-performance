import React from 'react';
const LABEL_10573 = 'component_10573';
export function Component10573({ value = 10573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10573, 'data-value': derived.doubled }, children);
}
export default Component10573;
