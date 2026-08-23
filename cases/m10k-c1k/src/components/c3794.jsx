import React from 'react';
const LABEL_3794 = 'component_3794';
export function Component3794({ value = 3794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3794, 'data-value': derived.doubled }, children);
}
export default Component3794;
