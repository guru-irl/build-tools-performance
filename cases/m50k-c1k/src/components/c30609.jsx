import React from 'react';
const LABEL_30609 = 'component_30609';
export function Component30609({ value = 30609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30609, 'data-value': derived.doubled }, children);
}
export default Component30609;
