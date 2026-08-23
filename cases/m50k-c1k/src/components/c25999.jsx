import React from 'react';
const LABEL_25999 = 'component_25999';
export function Component25999({ value = 25999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25999, 'data-value': derived.doubled }, children);
}
export default Component25999;
