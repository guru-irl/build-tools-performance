import React from 'react';
const LABEL_19636 = 'component_19636';
export function Component19636({ value = 19636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19636, 'data-value': derived.doubled }, children);
}
export default Component19636;
