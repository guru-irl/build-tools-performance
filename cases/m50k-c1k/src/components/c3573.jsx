import React from 'react';
const LABEL_3573 = 'component_3573';
export function Component3573({ value = 3573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3573, 'data-value': derived.doubled }, children);
}
export default Component3573;
