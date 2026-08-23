import React from 'react';
const LABEL_3917 = 'component_3917';
export function Component3917({ value = 3917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3917, 'data-value': derived.doubled }, children);
}
export default Component3917;
