import React from 'react';
const LABEL_38837 = 'component_38837';
export function Component38837({ value = 38837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38837, 'data-value': derived.doubled }, children);
}
export default Component38837;
