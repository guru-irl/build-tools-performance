import React from 'react';
const LABEL_30885 = 'component_30885';
export function Component30885({ value = 30885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30885, 'data-value': derived.doubled }, children);
}
export default Component30885;
