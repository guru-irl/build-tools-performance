import React from 'react';
const LABEL_3441 = 'component_3441';
export function Component3441({ value = 3441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3441, 'data-value': derived.doubled }, children);
}
export default Component3441;
