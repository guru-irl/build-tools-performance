import React from 'react';
const LABEL_39171 = 'component_39171';
export function Component39171({ value = 39171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39171, 'data-value': derived.doubled }, children);
}
export default Component39171;
