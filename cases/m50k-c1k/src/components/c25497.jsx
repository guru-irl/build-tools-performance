import React from 'react';
const LABEL_25497 = 'component_25497';
export function Component25497({ value = 25497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25497, 'data-value': derived.doubled }, children);
}
export default Component25497;
