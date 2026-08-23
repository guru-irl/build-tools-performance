import React from 'react';
const LABEL_3353 = 'component_3353';
export function Component3353({ value = 3353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3353, 'data-value': derived.doubled }, children);
}
export default Component3353;
