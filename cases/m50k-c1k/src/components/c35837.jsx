import React from 'react';
const LABEL_35837 = 'component_35837';
export function Component35837({ value = 35837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35837, 'data-value': derived.doubled }, children);
}
export default Component35837;
