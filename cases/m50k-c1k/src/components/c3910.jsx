import React from 'react';
const LABEL_3910 = 'component_3910';
export function Component3910({ value = 3910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3910, 'data-value': derived.doubled }, children);
}
export default Component3910;
