import React from 'react';
const LABEL_3202 = 'component_3202';
export function Component3202({ value = 3202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3202, 'data-value': derived.doubled }, children);
}
export default Component3202;
