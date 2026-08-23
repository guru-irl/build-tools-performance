import React from 'react';
const LABEL_19757 = 'component_19757';
export function Component19757({ value = 19757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19757, 'data-value': derived.doubled }, children);
}
export default Component19757;
